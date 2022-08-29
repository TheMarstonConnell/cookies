package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	keepertest "github.com/TheMarstonConnell/cookies/testutil/keeper"
	"github.com/TheMarstonConnell/cookies/testutil/nullify"
	"github.com/TheMarstonConnell/cookies/x/cookies/types"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func TestBuildingsQuerySingle(t *testing.T) {
	keeper, ctx := keepertest.CookiesKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNBuildings(keeper, ctx, 2)
	for _, tc := range []struct {
		desc     string
		request  *types.QueryGetBuildingsRequest
		response *types.QueryGetBuildingsResponse
		err      error
	}{
		{
			desc: "First",
			request: &types.QueryGetBuildingsRequest{
				Uid: msgs[0].Uid,
			},
			response: &types.QueryGetBuildingsResponse{Buildings: msgs[0]},
		},
		{
			desc: "Second",
			request: &types.QueryGetBuildingsRequest{
				Uid: msgs[1].Uid,
			},
			response: &types.QueryGetBuildingsResponse{Buildings: msgs[1]},
		},
		{
			desc: "KeyNotFound",
			request: &types.QueryGetBuildingsRequest{
				Uid: strconv.Itoa(100000),
			},
			err: status.Error(codes.NotFound, "not found"),
		},
		{
			desc: "InvalidRequest",
			err:  status.Error(codes.InvalidArgument, "invalid request"),
		},
	} {
		t.Run(tc.desc, func(t *testing.T) {
			response, err := keeper.Buildings(wctx, tc.request)
			if tc.err != nil {
				require.ErrorIs(t, err, tc.err)
			} else {
				require.NoError(t, err)
				require.Equal(t,
					nullify.Fill(tc.response),
					nullify.Fill(response),
				)
			}
		})
	}
}

func TestBuildingsQueryPaginated(t *testing.T) {
	keeper, ctx := keepertest.CookiesKeeper(t)
	wctx := sdk.WrapSDKContext(ctx)
	msgs := createNBuildings(keeper, ctx, 5)

	request := func(next []byte, offset, limit uint64, total bool) *types.QueryAllBuildingsRequest {
		return &types.QueryAllBuildingsRequest{
			Pagination: &query.PageRequest{
				Key:        next,
				Offset:     offset,
				Limit:      limit,
				CountTotal: total,
			},
		}
	}
	t.Run("ByOffset", func(t *testing.T) {
		step := 2
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.BuildingsAll(wctx, request(nil, uint64(i), uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Buildings), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Buildings),
			)
		}
	})
	t.Run("ByKey", func(t *testing.T) {
		step := 2
		var next []byte
		for i := 0; i < len(msgs); i += step {
			resp, err := keeper.BuildingsAll(wctx, request(next, 0, uint64(step), false))
			require.NoError(t, err)
			require.LessOrEqual(t, len(resp.Buildings), step)
			require.Subset(t,
				nullify.Fill(msgs),
				nullify.Fill(resp.Buildings),
			)
			next = resp.Pagination.NextKey
		}
	})
	t.Run("Total", func(t *testing.T) {
		resp, err := keeper.BuildingsAll(wctx, request(nil, 0, 0, true))
		require.NoError(t, err)
		require.Equal(t, len(msgs), int(resp.Pagination.Total))
		require.ElementsMatch(t,
			nullify.Fill(msgs),
			nullify.Fill(resp.Buildings),
		)
	})
	t.Run("InvalidRequest", func(t *testing.T) {
		_, err := keeper.BuildingsAll(wctx, nil)
		require.ErrorIs(t, err, status.Error(codes.InvalidArgument, "invalid request"))
	})
}
