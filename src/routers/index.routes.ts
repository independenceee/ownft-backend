import { Express } from "express";
import informationsRouter from "./informations.routes";
import historyRouter from "./history.routes";
import transactionRouter from "./transactions.routes";
import UTXORouter from "./utxos.routes";
import allAssetsRouter from "./allassets.routes";
import ownerShipRouter from "./ownership.routes";

const router = function (app: Express) {
    app.use("/information", informationsRouter);
    app.use("/history", historyRouter);
    app.use("/transaction", transactionRouter);
    app.use("/utxo", UTXORouter);
    app.use("/all-assets", allAssetsRouter);
    app.use("/ownership", ownerShipRouter);
};

export default router;
