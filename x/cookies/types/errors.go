package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/cookies module sentinel errors
var (
	ErrSample  = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrNoParse = sdkerrors.Register(ModuleName, 1110, "cannot parse building type")
)
