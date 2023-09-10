import { Router } from "express";
import assetsController from "../../controllers/blockfrost/AssetsController";

const router = Router();

router.route("/information").post(assetsController.getAllInformationAssets);
router.route("/mint").post(assetsController.getMintedAssets);
router.route("/address").post(assetsController.getAllAssetsFromAddress);

export default router;
