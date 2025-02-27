import express from "express";
import Project from "../models/Project.js";
import { CreateProject } from "../service/ProjectService.js";

const ProjectRouter = express.Router();

ProjectRouter.get("/", async (req, res) => {
  var projects = await Project.findAll();
  console.log(projects);
  res.send(projects);
});

ProjectRouter.get("/:id", async (req, res) => {
  var filteredProject = await Project.findOne({ id: req.params.id });
  res.send(filteredProject);
});

ProjectRouter.post("/", async (req, res) => {
  var newlyCreatedProject = await CreateProject(req.body);
  res.send(newlyCreatedProject);
});

ProjectRouter.put("/:id", async (req, res) => {
  await Project.update(req.body, {
    where: { id: req.params.id },
  });
  res.sendStatus(202);
});

ProjectRouter.patch("/:id", async (req, res) => {
  var filteredProject = await Project.findOne({ where: { id: req.params.id } });
  filteredProject.update(req.body);
  await filteredProject.save();
  res.sendStatus(202);
});

ProjectRouter.delete("/:id", async (req, res) => {
  await Project.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
});

ProjectRouter.delete("/", async (req, res) => {
  await Project.destroy({ truncate: true });
  res.sendStatus(204);
});

export default ProjectRouter;
