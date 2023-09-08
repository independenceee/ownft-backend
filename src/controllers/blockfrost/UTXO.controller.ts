import { Request, Response } from "express";
import apiBlockfrost from "../../utils/blockfrost";
import { StatusCodes } from "http-status-codes";

class UTXO {
    /**
     * @description GET DETAILS UTXOs BLOCK
     * @param request
     * @param response
     */
    async getUTXOs(request: Request, response: Response) {
        const { transactionHash } = request.body;

        const data = await apiBlockfrost.txsUtxos(transactionHash);
        response.status(StatusCodes.OK).json(data);
    }
}

export default new UTXO();
