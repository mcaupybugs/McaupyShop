import Project from "../models/Project.js";
import {
  CreateProject,
  DownloadProject,
  checkProjectPurchased,
  getUsersLinkedToProject,
} from "../service/ProjectService.js";

const listProjects = async (req, res) => {
  var projects = await Project.findAll();
  res.send(projects);
};

const listProject = async (req, res) => {
  var filteredProject = await Project.findOne({ id: req.params.id });
  res.send(filteredProject);
};

const addProject = async (req, res) => {
  var newlyCreatedProject = await CreateProject(req.body);
  res.send(newlyCreatedProject);
};

const getUsersForProject = async (req, res) => {
  console.log("id", req.params.id);
  var users = await getUsersLinkedToProject(req.params.id);
  console.log("Users from controller", users);
  res.json(users);
};

const putProject = async (req, res) => {
  await Project.update(req.body, {
    where: { id: req.params.id },
  });
  res.sendStatus(202);
};

const patchProject = async (req, res) => {
  var filteredProject = await Project.findOne({ where: { id: req.params.id } });
  filteredProject.update(req.body);
  await filteredProject.save();
  res.sendStatus(202);
};

const deleteProject = async (req, res) => {
  await Project.destroy({ where: { id: req.params.id } });
  res.sendStatus(204);
};

const deleteProjects = async (req, res) => {
  await Project.destroy({ truncate: true });
  res.sendStatus(204);
};

const downloadProjectController = async (req, res) => {
  const projectId = req.params.id;
  var userEmail = req.body.userEmail;
  console.log("Download running", userEmail);
  var isProjectPurchased = await checkProjectPurchased(projectId, userEmail);
  if (!isProjectPurchased) {
    res.send(403).json({ err: "Payment not done" });
    return;
  }
  var projectBuffer = await DownloadProject(projectId);
  if (projectBuffer == null) {
    res.send(503);
  }
  res.setHeader("Content-Disposition", `attachment; filename=${projectId}.zip`);
  res.setHeader("Content-Type", "application/zip");
  res.setHeader("Content-Length", projectBuffer.length);
  res.send(projectBuffer);
};

export {
  listProject,
  listProjects,
  addProject,
  patchProject,
  putProject,
  deleteProject,
  getUsersForProject,
  deleteProjects,
  downloadProjectController,
};
