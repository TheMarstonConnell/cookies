package keeper_test

import (
	"strconv"
	"testing"

	keepertest "github.com/TheMarstonConnell/cookies/testutil/keeper"
	"github.com/TheMarstonConnell/cookies/testutil/nullify"
	"github.com/TheMarstonConnell/cookies/x/cookies/keeper"
	"github.com/TheMarstonConnell/cookies/x/cookies/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNBuildings(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Buildings {
	items := make([]types.Buildings, n)
	for i := range items {
		items[i].Uid = strconv.Itoa(i)

		keeper.SetBuildings(ctx, items[i])
	}
	return items
}

func TestBuildingsGet(t *testing.T) {
	keeper, ctx := keepertest.CookiesKeeper(t)
	items := createNBuildings(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetBuildings(ctx,
			item.Uid,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestBuildingsRemove(t *testing.T) {
	keeper, ctx := keepertest.CookiesKeeper(t)
	items := createNBuildings(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveBuildings(ctx,
			item.Uid,
		)
		_, found := keeper.GetBuildings(ctx,
			item.Uid,
		)
		require.False(t, found)
	}
}

func TestBuildingsGetAll(t *testing.T) {
	keeper, ctx := keepertest.CookiesKeeper(t)
	items := createNBuildings(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllBuildings(ctx)),
	)
}
