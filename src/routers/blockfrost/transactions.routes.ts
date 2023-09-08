import { Router } from "express";
import transactionController from "../../controllers/blockfrost/Transaction.controller";
const router = Router();

router.route("/").post(transactionController.getDetailsTransactions);

export default router;
