import * as dotenv from "dotenv";
import "express-async-errors";
import { json } from "body-parser";
import express, { Express } from "express";
import cors from "cors";
import corsOption from "./configs/CorsOptions";
import router from "./routers/index.routes";
import { logger } from "./middlewares/Logger";

dotenv.config();
const app: Express = express();

const start = function () {
    if (!process.env.PORT) {
        process.exit(1);
    }
    const PORT = parseInt(process.env.PORT as string, 10);
    app.use(logger);
    app.use(json());
    app.use(cors(corsOption));
    app.use(express.json());

    router(app);
    app.listen(PORT, function () {
        console.log(`http://localhost:${PORT}`);
    });
};

start();

export default app;
