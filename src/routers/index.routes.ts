import { Express } from "express";

import transactionsBlockfrost from "./blockfrost/transaction.routes";
import assetsBlockfrost from "./blockfrost/assets.routes";
import assetsKoios from "./koios/assets.routes";

const router = function (app: Express) {
    // blockfrost
    app.use("/api/blockfrost/transaction", transactionsBlockfrost);
    app.use("/api/blockfrost/assets", assetsBlockfrost);
    // koios
    app.use("/api/koios/assets", assetsKoios);
};

export default router;
