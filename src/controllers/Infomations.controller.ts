import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import stringToHex from "../utils/convertToHex";
import apiBlockfrost from "../utils/blockfrost";

class InformationsController {
    /**
     * @description GET INFORMATION ASSETS
     * @param request { body: { assetName: require, policyId: require } }
     * @param response
     * @returns 
     */
    async getAllInformationAssets(request: Request, response: Response) {
        try {
            const { policyId, assetName } = request.body;

            if (!policyId && !assetName) {
                return response.status(StatusCodes.BAD_REQUEST).json({
                    message: "",
                });
            }

            const assetHex = stringToHex(assetName);
            const data = await apiBlockfrost.assetsById(policyId + assetHex);
            response.status(StatusCodes.OK).json(data);
        } catch (error) {
            response.status(StatusCodes.BAD_REQUEST).json({
                message: error,
            });
        }
    }
}

export default new InformationsController();
