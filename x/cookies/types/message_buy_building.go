package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgBuyBuilding = "buy_building"

var _ sdk.Msg = &MsgBuyBuilding{}

func NewMsgBuyBuilding(creator string, building string) *MsgBuyBuilding {
	return &MsgBuyBuilding{
		Creator:  creator,
		Building: building,
	}
}

func (msg *MsgBuyBuilding) Route() string {
	return RouterKey
}

func (msg *MsgBuyBuilding) Type() string {
	return TypeMsgBuyBuilding
}

func (msg *MsgBuyBuilding) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgBuyBuilding) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgBuyBuilding) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
