package cli

import (
	"context"

	"github.com/TheMarstonConnell/cookies/x/cookies/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

func CmdListBuildings() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "list-buildings",
		Short: "list all buildings",
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)

			pageReq, err := client.ReadPageRequest(cmd.Flags())
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryAllBuildingsRequest{
				Pagination: pageReq,
			}

			res, err := queryClient.BuildingsAll(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddPaginationFlagsToCmd(cmd, cmd.Use)
	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}

func CmdShowBuildings() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "show-buildings [uid]",
		Short: "shows a buildings",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			clientCtx := client.GetClientContextFromCmd(cmd)

			queryClient := types.NewQueryClient(clientCtx)

			argUid := args[0]

			params := &types.QueryGetBuildingsRequest{
				Uid: argUid,
			}

			res, err := queryClient.Buildings(context.Background(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
