import { Router } from "express";
import allAssetsController from "../../controllers/blockfrost/AllAssets.controller";

const router = Router();

router.route("/").post(allAssetsController.getAllAssetsFromAddress);

export default router;
