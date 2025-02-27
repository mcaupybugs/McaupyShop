import "./config/envLoader.js";
import express from "express";
import ProjectRoutes from "./routes/ProjectRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";

import { getImageFromBlobName } from "./service/StorageBlobService.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use("/projects", ProjectRoutes);

export default app;
