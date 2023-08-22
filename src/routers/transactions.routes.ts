import { Router } from "express";
import transactionController from "../controllers/Transaction.controller";
const router = Router();

router.route("/").post(transactionController.getDetailsTransactions);

export default router;
