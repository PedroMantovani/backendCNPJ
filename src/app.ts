require("dotenv").config();

import express from "express";
import config from "config";
import SwaggerUI from "swagger-ui-express";
import swaggerDocs from "../config/swagger.json";

const app = express();

// JSON middleware
app.use(express.json());

// Swagger
app.use("/docs", SwaggerUI.serve, SwaggerUI.setup(swaggerDocs));

// DB
import db from "../config/db";

// Logger
import Logger from "../config/logger";

// Middlewares
import morganMiddleware from "./middleware/morganMiddleware";

// Routes
import router from "./router";
app.use(morganMiddleware);

app.use("/api/", router);

// APP
const port = config.get<number>("port");

app.listen(port, async () => {
    await db();

    Logger.info(`Running on port: ${port}`);
});
