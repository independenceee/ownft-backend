import { Express } from "express";
import informationsRouter from "./blockfrost/informations.routes";
import historyRouter from "./blockfrost/history.routes";
import transactionRouter from "./blockfrost/transactions.routes";
import UTXORouter from "./blockfrost/utxos.routes";
import allAssetsRouter from "./blockfrost/allassets.routes";
import ownerShipRouter from "./blockfrost/ownership.routes";
import assetNftAddress from "./koios/assets.routes";

const router = function (app: Express) {
    // blockfrost
    app.use("/information", informationsRouter);
    app.use("/history", historyRouter);
    app.use("/transaction", transactionRouter);
    app.use("/utxo", UTXORouter);
    app.use("/all-assets", allAssetsRouter);
    app.use("/ownership", ownerShipRouter);

    // koios
    app.use("/koios/assets", assetNftAddress);
};

export default router;
