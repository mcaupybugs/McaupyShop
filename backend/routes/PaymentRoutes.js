import express from "express";
import * as PaymentController from "../controllers/PaymentController.js";
import { catchError } from "../handlers/ErrorHandler.js";

const PaymentRouter = express.Router();

PaymentRouter.route("/success").post(
  catchError(PaymentController.verifyPayment)
);

PaymentRouter.route("/:id").post(catchError(PaymentController.makePayment));
export default PaymentRouter;
