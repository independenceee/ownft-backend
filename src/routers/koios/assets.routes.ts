import { Router } from "express";
import assetsController from "../../controllers/koios/AssetsController";

const router = Router();

router.route("/asset-nft-address").post(assetsController.assetNftAddress);
router.route("/asset-information").post(assetsController.assetInfomation);
router.route("/policy-asset-information").post(assetsController.policyAssetInfomation);
router.route("/asset-policy-infomation").post(assetsController.assetPolicyInfomation);
router.route("/asset-summary").post(assetsController.assetSummary);
router.route("/policy-asset-list").post(assetsController.policyAssetList);

export default router;
