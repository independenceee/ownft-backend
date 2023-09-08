import { Router } from "express";
import historyController from "../../controllers/blockfrost/History.controller";
const router = Router();

router.route("/asset").post(historyController.getTransactionAsset);
router.route("/account").post(historyController.getTransactionAccount);

export default router;
