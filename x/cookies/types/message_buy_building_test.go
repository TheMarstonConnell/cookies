package types

import (
	"testing"

	"github.com/TheMarstonConnell/cookies/testutil/sample"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/stretchr/testify/require"
)

func TestMsgBuyBuilding_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgBuyBuilding
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgBuyBuilding{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgBuyBuilding{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
