import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import { get } from "../../utils/koios";
import stringToHex from "../../helpers/convertToHex";

class AssetsController {
    async assetNftAddress(request: Request, response: Response) {
        try {
            const { policyId, assetName } = request.body;

            const assetHex = stringToHex(assetName);
            const data = await get(`/asset_nft_address?_asset_policy=${policyId}&_asset_name=${assetHex}`, {});

            response.status(StatusCodes.OK).json(data);
        } catch (error) {
            response.status(StatusCodes.BAD_REQUEST).json({
                message: error,
            });
        }
    }

    async assetInfomation(request: Request, response: Response) {
        try {
            const { policyId, assetName } = request.body;

            const assetHex = stringToHex(assetName);
            const data = await get(`/asset_info?_asset_policy=${policyId}&_asset_name=${assetHex}`, {});

            response.status(StatusCodes.OK).json(data);
        } catch (error) {
            response.status(StatusCodes.BAD_REQUEST).json({
                message: error,
            });
        }
    }

    async policyAssetInfomation(request: Request, response: Response) {
        try {
            const { policyId } = request.body;

            const data = await get(`/policy_asset_info?_asset_policy=${policyId}`, {});

            response.status(StatusCodes.OK).json(data);
        } catch (error) {
            response.status(StatusCodes.BAD_REQUEST).json({
                message: error,
            });
        }
    }

    async assetPolicyInfomation(request: Request, response: Response) {
        try {
            const { policyId } = request.body;

            const data = await get(`/asset_policy_info?_asset_policy=${policyId}`, {});

            response.status(StatusCodes.OK).json(data);
        } catch (error) {
            response.status(StatusCodes.BAD_REQUEST).json({
                message: error,
            });
        }
    }

    async assetSummary(request: Request, response: Response) {
        try {
            const { policyId, assetName } = request.body;

            const assetHex = stringToHex(assetName);
            const data = await get(`/asset_summary?_asset_policy=${policyId}&_asset_name=${assetHex}`, {});

            response.status(StatusCodes.OK).json(data);
        } catch (error) {
            response.status(StatusCodes.BAD_REQUEST).json({
                message: error,
            });
        }
    }

    async policyAssetList(request: Request, response: Response) {
        try {
            const { policyId } = request.body;

            const data = await get(`/policy_asset_list?_asset_policy=${policyId}`, {});

            response.status(StatusCodes.OK).json(data);
        } catch (error) {
            response.status(StatusCodes.BAD_REQUEST).json({
                message: error,
            });
        }
    }
}

export default new AssetsController();
