package keeper

import (
	"context"

	"github.com/TheMarstonConnell/cookies/x/cookies/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetCost(goCtx context.Context, req *types.QueryGetCostRequest) (*types.QueryGetCostResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	building, ok := sdk.NewIntFromString(req.Building)
	if !ok {
		return nil, types.ErrNoParse
	}

	address, err := sdk.AccAddressFromBech32(req.Address)
	if err != nil {
		return nil, err
	}

	entry := types.BuildEntry(address, building.Int64())

	var cost int64 = 0
	e, found := k.GetBuildings(ctx, entry)
	if found {
		cost = types.GetCost(building.Int64(), e.Count)
	} else {
		cost = types.GetCost(building.Int64(), 0)
	}

	return &types.QueryGetCostResponse{Cost: cost}, nil
}
