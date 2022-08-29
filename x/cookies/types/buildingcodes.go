package types

import (
	fmt "fmt"

	"math"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

var COSTS []int64 = []int64{COST_ASSISTANT, COST_OVEN, COST_BAKERY, COST_FACTORY, COST_CAMPUS, COST_POWER_PLANT, COST_ROBOTS, COST_QUANTUM_OVEN}
var RATES []int64 = []int64{RATE_ASSISTANT, RATE_OVEN, RATE_BAKERY, RATE_FACTORY, RATE_CAMPUS, RATE_POWER_PLANT, RATE_ROBOTS, RATE_QUANTUM_OVEN}

const (
	BUILDING_ASSISTANT    = 0
	BUILDING_OVEN         = 1
	BUILDING_BAKERY       = 2
	BUILDING_FACTORY      = 3
	BUILDING_CAMPUS       = 4
	BUILDING_POWER_PLANT  = 5
	BUILDING_ROBOTS       = 6
	BUILDING_QUANTUM_OVEN = 7

	COST_ASSISTANT    = 5000000
	COST_OVEN         = 100000000
	COST_BAKERY       = 1337000000
	COST_FACTORY      = COST_BAKERY * 11
	COST_CAMPUS       = COST_FACTORY * 12
	COST_POWER_PLANT  = COST_CAMPUS * 13
	COST_ROBOTS       = COST_POWER_PLANT * 16
	COST_QUANTUM_OVEN = COST_ROBOTS * 55

	RATE_ASSISTANT    = 100000
	RATE_OVEN         = 500000
	RATE_BAKERY       = 1100000
	RATE_FACTORY      = 22000000
	RATE_CAMPUS       = RATE_FACTORY * 11
	RATE_POWER_PLANT  = RATE_CAMPUS * 9
	RATE_ROBOTS       = RATE_POWER_PLANT * 8
	RATE_QUANTUM_OVEN = RATE_ROBOTS * 11
)

func BuildEntry(address sdk.Address, buildingType int64) string {
	return fmt.Sprintf("%s%02d", address.String(), buildingType)
}

func GetAddress(entry string) (sdk.AccAddress, error) {
	val := entry[:44]
	i, err := sdk.AccAddressFromBech32(val)
	if err != nil {
		return nil, err
	}
	return i, nil
}

func GetType(entry string) int64 {
	val := entry[44:]
	i, ok := sdk.NewIntFromString(val)
	if !ok {
		return -1
	}
	return i.Int64()
}

func GetCost(b int64, count int64) int64 {
	baseCost := COSTS[b]
	costMulti := math.Pow(1.15, float64(count))

	return int64(float64(baseCost) * costMulti)
}
