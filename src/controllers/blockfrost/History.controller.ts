import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import apiBlockfrost from "../../utils/blockfrost";
import stringToHex from "../../utils/convertToHex";

class HistoryController {
    /**
     * @description GET TRANSACTION ASSET
     * @param request
     * @param response
     */
    async getTransactionAsset(request: Request, response: Response) {
        const { policyId, assetName } = request.body;

        if (!policyId && !assetName) {
            return response.status(StatusCodes.BAD_REQUEST).json({
                message: "",
            });
        }

        const assetHex = stringToHex(assetName);
        const data = await apiBlockfrost.assetsTransactions(policyId + assetHex);
        response.status(StatusCodes.OK).json(data);
    }

    /**
     * @description GET TRANSACTION ACCOUNT
     * @param request
     * @param response
     */
    async getTransactionAccount(request: Request, response: Response) {
        const { address } = request.body;
        const data = await apiBlockfrost.addressesTransactions(address);
        response.status(StatusCodes.OK).json(data);
    }
}

export default new HistoryController();
