package cli

import (
	"strconv"

	"github.com/TheMarstonConnell/cookies/x/cookies/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdGetCost() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get-cost [address] [building]",
		Short: "Get the cost to buy a building.",
		Args:  cobra.ExactArgs(2),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqAddress := args[0]
			reqBuilding := args[1]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetCostRequest{

				Address:  reqAddress,
				Building: reqBuilding,
			}

			res, err := queryClient.GetCost(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
