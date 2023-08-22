import { Router } from "express";
import ownerShipController from "../controllers/OwnerShip.controller";
const router = Router();

router.route("/").post(ownerShipController.getMintedAssets)

export default router;