import { Router } from "express";
import informationsController from "../controllers/Infomations.controller";

const router = Router();

router.route("/").post(informationsController.getAllInformationAssets);

export default router;
