import express from "express";
import ProjectRoutes from "./routes/ProjectRoutes.js";
import PaymentRouter from "./routes/PaymentRoutes.js";
import bodyParser from "body-parser";
import cors from "cors";
import {
  developmentErrors,
  notFound,
  productionErrors,
} from "./handlers/ErrorHandler.js";
import AuthRouter from "./routes/AuthRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/payments", PaymentRouter);
app.use("/projects", ProjectRoutes);
app.use("/auth", AuthRouter);
app.use(notFound);

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV == "test") {
  app.use(developmentErrors);
}

app.use(productionErrors);

export default app;
