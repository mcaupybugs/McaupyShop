import Project from "../models/Project.js";
import { createTransaction } from "./PaymentService.js";
import { downloadBlob, getImageFromBlobName } from "./StorageBlobService.js";

const CreateProject = async (payload) => {
  console.log(payload);

  var projectBlobImages = [];

  payload.projectImages.map(async (image) => {
    var content = await getImageFromBlobName(image);
    projectBlobImages.push(content);
  });

  var newProject = {
    title: payload.title,
    description: payload.description,
    price: payload.price,
    displayImage: await getImageFromBlobName(payload.displayImage),
    projectImages: projectBlobImages,
    rating: payload.rating,
    tags: payload.tags,
    projectBlob: payload.projectBlob,
  };
  console.log(newProject);
  await Project.create(newProject);
  return newProject;
};

const DownloadProject = async (projectId) => {
  var projectDetails = await Project.findOne({ id: projectId });
  var projectZipName = projectDetails.title.replaceAll(" ", "") + "-code.zip";
  var projectZipBlobBuffer = await downloadBlob(projectZipName);
  console.log(projectZipBlobBuffer);
  return projectZipBlobBuffer;
};

export { CreateProject, DownloadProject };
