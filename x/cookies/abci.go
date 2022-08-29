package cookies

import (
	"github.com/TheMarstonConnell/cookies/x/cookies/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	abci "github.com/tendermint/tendermint/abci/types"
)

func HandleBlock(ctx sdk.Context, module AppModule, req abci.RequestBeginBlock) {
	buildings := module.keeper.GetAllBuildings(ctx)

	for _, b := range buildings {
		id := b.Uid
		btype := types.GetType(id)

		rate := types.RATES[btype]

		add, err := types.GetAddress(id)

		if err != nil {
			continue
		}

		coin := sdk.NewCoin(module.keeper.GetParams(ctx).CookieDenom, sdk.NewInt(rate*b.Count))
		coins := sdk.NewCoins(coin)

		err = module.bankKeeper.MintCoins(ctx, types.ModuleName, coins)
		if err != nil {
			continue
		}
		err = module.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, add, coins)
		if err != nil {
			continue
		}

	}
}
