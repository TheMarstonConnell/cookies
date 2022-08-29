package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/TheMarstonConnell/cookies/testutil/keeper"
	"github.com/TheMarstonConnell/cookies/x/cookies/keeper"
	"github.com/TheMarstonConnell/cookies/x/cookies/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.CookiesKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
