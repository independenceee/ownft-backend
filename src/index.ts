import * as dotenv from "dotenv";
import "express-async-errors";
import express, { Express, Request, Response, Router } from "express";
import cors from "cors";
import corsOption from "./configs/AllowedOrigins";
import router from "./routers/index.routes";

dotenv.config();
const app: Express = express();

const start = function () {
    if (!process.env.PORT) {
        process.exit(1);
    }
    const PORT = parseInt(process.env.PORT as string, 10);
    // app.use(cors(corsOption));
    app.use(express.json());

    router(app);
    app.listen(PORT, function () {
        console.log(`http://localhost:${PORT}`);
    });
};

start();

export default app;
