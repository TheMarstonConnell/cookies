package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// BuildingsKeyPrefix is the prefix to retrieve all Buildings
	BuildingsKeyPrefix = "Buildings/value/"
)

// BuildingsKey returns the store key to retrieve a Buildings from the index fields
func BuildingsKey(
	uid string,
) []byte {
	var key []byte

	uidBytes := []byte(uid)
	key = append(key, uidBytes...)
	key = append(key, []byte("/")...)

	return key
}
