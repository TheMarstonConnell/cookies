package cookies_test

import (
	"testing"

	keepertest "github.com/TheMarstonConnell/cookies/testutil/keeper"
	"github.com/TheMarstonConnell/cookies/testutil/nullify"
	"github.com/TheMarstonConnell/cookies/x/cookies"
	"github.com/TheMarstonConnell/cookies/x/cookies/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		BuildingsList: []types.Buildings{
			{
				Uid: "0",
			},
			{
				Uid: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.CookiesKeeper(t)
	cookies.InitGenesis(ctx, *k, genesisState)
	got := cookies.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.BuildingsList, got.BuildingsList)
	// this line is used by starport scaffolding # genesis/test/assert
}
