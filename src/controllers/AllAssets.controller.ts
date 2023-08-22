import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import apiBlockfrost from "../utils/blockfrost";

class AllAssetsController {
    async getAllAssetsFromAddress(request: Request, response: Response) {
        const { stakeAddress } = request.body;
        const data = await apiBlockfrost.accountsAddressesAssets(stakeAddress);
        response.status(StatusCodes.OK).json(data);
    }
}

export default new AllAssetsController();
