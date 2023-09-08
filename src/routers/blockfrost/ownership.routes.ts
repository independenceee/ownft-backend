import { Router } from "express";
import ownerShipController from "../../controllers/blockfrost/OwnerShip.controller";
const router = Router();

router.route("/").post(ownerShipController.getMintedAssets)

export default router;