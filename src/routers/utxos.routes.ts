import { Router } from "express";
import UTXOSController from "../controllers/UTXO.controller";
const router = Router();

router.route("/").post(UTXOSController.getUTXOs);

export default router;
