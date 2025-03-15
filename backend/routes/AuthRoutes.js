import express from "express";
import * as AuthController from "../controllers/AuthController.js";

import { catchError } from "../handlers/ErrorHandler.js";

const AuthRouter = express.Router();

AuthRouter.route("/login").post(catchError(AuthController.userLoginRoute));

export default AuthRouter;
