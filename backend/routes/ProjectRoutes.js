import express from "express";
import Project from "../models/Project.js";
import { CreateProject } from "../service/ProjectService.js";
import { catchError } from "../handlers/ErrorHandler.js";
import * as ProjectController from "../controllers/ProjectController.js";

const ProjectRouter = express.Router();

ProjectRouter.route("/").get(catchError(ProjectController.listProjects));

ProjectRouter.route("/:id").get(catchError(ProjectController.listProject));

ProjectRouter.route("/:id/purchase").get(
  catchError(ProjectController.purchaseProject)
);
ProjectRouter.route("/").post(catchError(ProjectController.addProject));

ProjectRouter.route("/:id").put(catchError(ProjectController.putProject));

ProjectRouter.route("/:id").patch(catchError(ProjectController.patchProject));

ProjectRouter.route("/:id").delete(catchError(ProjectController.deleteProject));

ProjectRouter.route("/").delete(catchError(ProjectController.deleteProjects));

export default ProjectRouter;
