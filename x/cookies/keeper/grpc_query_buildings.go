package keeper

import (
	"context"

	"github.com/TheMarstonConnell/cookies/x/cookies/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) BuildingsAll(c context.Context, req *types.QueryAllBuildingsRequest) (*types.QueryAllBuildingsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var buildingss []types.Buildings
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	buildingsStore := prefix.NewStore(store, types.KeyPrefix(types.BuildingsKeyPrefix))

	pageRes, err := query.Paginate(buildingsStore, req.Pagination, func(key []byte, value []byte) error {
		var buildings types.Buildings
		if err := k.cdc.Unmarshal(value, &buildings); err != nil {
			return err
		}

		buildingss = append(buildingss, buildings)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllBuildingsResponse{Buildings: buildingss, Pagination: pageRes}, nil
}

func (k Keeper) Buildings(c context.Context, req *types.QueryGetBuildingsRequest) (*types.QueryGetBuildingsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	ctx := sdk.UnwrapSDKContext(c)

	val, found := k.GetBuildings(
		ctx,
		req.Uid,
	)
	if !found {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetBuildingsResponse{Buildings: val}, nil
}
