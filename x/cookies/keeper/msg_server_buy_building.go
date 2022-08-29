package keeper

import (
	"context"

	"github.com/TheMarstonConnell/cookies/x/cookies/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) BuyBuilding(goCtx context.Context, msg *types.MsgBuyBuilding) (*types.MsgBuyBuildingResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	building, ok := sdk.NewIntFromString(msg.Building)
	if !ok {
		return nil, types.ErrNoParse
	}

	address, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}

	entry := types.BuildEntry(address, building.Int64())

	var count int64 = 0
	e, found := k.Keeper.GetBuildings(ctx, entry)
	if found {
		count = count + e.Count
	}

	cost := types.GetCost(building.Int64(), count)
	coin := sdk.NewCoin(k.GetParams(ctx).CookieDenom, sdk.NewInt(cost))
	coins := sdk.NewCoins(coin)

	err = k.bankkeeper.SendCoinsFromAccountToModule(ctx, address, types.ModuleName, coins)
	if err != nil {
		return nil, err
	}
	err = k.bankkeeper.BurnCoins(ctx, types.ModuleName, coins)
	if err != nil {
		return nil, err
	}

	b := types.Buildings{
		Uid:   entry,
		Count: count + 1,
	}
	k.Keeper.SetBuildings(ctx, b)

	return &types.MsgBuyBuildingResponse{}, nil
}
