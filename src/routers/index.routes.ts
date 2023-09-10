import { Express } from "express";

import transactionsBlockfrost from "./blockfrost/transactions.routes";
import assetsBlockfrost from "./blockfrost/assets.routes";
import assetsKoios from "./koios/assets.routes";

const router = function (app: Express) {
    // blockfrost
    app.use("/blockfrost/transaction", transactionsBlockfrost);
    app.use("/blockfrost/assets", assetsBlockfrost);
    // koios
    app.use("/koios/assets", assetsKoios);
};

export default router;
