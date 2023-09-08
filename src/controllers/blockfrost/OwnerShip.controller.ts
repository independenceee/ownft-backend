import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import apiBlockfrost from "../../utils/blockfrost";

class OwnerShipController {
    async getMintedAssets(request: Request, response: Response) {
        const { policyId } = request.body;

        const data = await apiBlockfrost.assetsPolicyById(policyId);
        response.status(StatusCodes.OK).json(data);
    }
}

export default new OwnerShipController();
