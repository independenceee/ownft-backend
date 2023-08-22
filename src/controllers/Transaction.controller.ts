import { Request, Response } from "express";
import apiBlockfrost from "../utils/blockfrost";
import { StatusCodes } from "http-status-codes";

class TransactionController {
    /**
     * @description GET DETAILS TRANSACTION BLOCK
     * @param request
     * @param response
     */
    async getDetailsTransactions(request: Request, response: Response) {
        const { transactionHash } = request.body;

        const data = await apiBlockfrost.txs(transactionHash);
        response.status(StatusCodes.OK).json(data);
    }
}

export default new TransactionController();
