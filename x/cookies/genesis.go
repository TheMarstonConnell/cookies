package cookies

import (
	"github.com/TheMarstonConnell/cookies/x/cookies/keeper"
	"github.com/TheMarstonConnell/cookies/x/cookies/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the buildings
	for _, elem := range genState.BuildingsList {
		k.SetBuildings(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.BuildingsList = k.GetAllBuildings(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
