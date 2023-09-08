import { Router } from "express";
import informationsController from "../../controllers/blockfrost/Infomations.controller";

const router = Router();

router.route("/").post(informationsController.getAllInformationAssets);

export default router;
