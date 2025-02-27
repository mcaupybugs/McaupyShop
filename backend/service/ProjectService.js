import Project from "../models/Project.js";
import { getImageFromBlobName } from "./StorageBlobService.js";

const CreateProject = async (payload) => {
  console.log(payload);

  var projectBlobImages = [];

  payload.projectImages.map(async (image) => {
    console.log("Running", image);
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

export { CreateProject };
