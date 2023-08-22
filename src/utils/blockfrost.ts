import { BlockFrostAPI } from "@blockfrost/blockfrost-js";
import * as dotenv from "dotenv";

dotenv.config();
const apiBlockfrost = new BlockFrostAPI({
    projectId: process.env.BLOCKFROST_PROJECT_ID_SECRET!,
});

export default apiBlockfrost;
