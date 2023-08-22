import { Router } from "express";
import allAssetsController from "../controllers/AllAssets.controller";

const router = Router();

router.route("/").post(allAssetsController.getAllAssetsFromAddress);



export default router;
