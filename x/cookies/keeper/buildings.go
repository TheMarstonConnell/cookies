package keeper

import (
	"github.com/TheMarstonConnell/cookies/x/cookies/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// SetBuildings set a specific buildings in the store from its index
func (k Keeper) SetBuildings(ctx sdk.Context, buildings types.Buildings) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuildingsKeyPrefix))
	b := k.cdc.MustMarshal(&buildings)
	store.Set(types.BuildingsKey(
		buildings.Uid,
	), b)
}

// GetBuildings returns a buildings from its index
func (k Keeper) GetBuildings(
	ctx sdk.Context,
	uid string,

) (val types.Buildings, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuildingsKeyPrefix))

	b := store.Get(types.BuildingsKey(
		uid,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveBuildings removes a buildings from the store
func (k Keeper) RemoveBuildings(
	ctx sdk.Context,
	uid string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuildingsKeyPrefix))
	store.Delete(types.BuildingsKey(
		uid,
	))
}

// GetAllBuildings returns all buildings
func (k Keeper) GetAllBuildings(ctx sdk.Context) (list []types.Buildings) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.BuildingsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Buildings
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
