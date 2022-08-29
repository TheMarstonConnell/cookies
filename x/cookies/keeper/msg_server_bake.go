package keeper

import (
	"context"

	"github.com/TheMarstonConnell/cookies/x/cookies/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) Bake(goCtx context.Context, msg *types.MsgBake) (*types.MsgBakeResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	params := k.GetParams(ctx)

	coin := sdk.NewCoin(params.CookieDenom, sdk.NewInt(1000000))
	coins := sdk.NewCoins(coin)

	err := k.bankkeeper.MintCoins(ctx, types.ModuleName, coins)
	if err != nil {
		return nil, err
	}

	address, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return nil, err
	}
	err = k.bankkeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, address, coins)
	if err != nil {
		return nil, err
	}
	return &types.MsgBakeResponse{}, nil
}
