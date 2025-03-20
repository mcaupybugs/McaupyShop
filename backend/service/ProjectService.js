import Project from "../models/Project.js";
import User from "../models/User.js";
import { downloadBlob, getImageFromBlobName } from "./StorageBlobService.js";

const CreateProject = async (payload) => {
  console.log(payload);

  var projectBlobImages = [];

  payload.projectImages.map(async (image) => {
    var content = await getImageFromBlobName(image);
    console.log("Contnet", content);
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
  console.log("projectCreated");
  return newProject;
};

const DownloadProject = async (projectId) => {
  var projectDetails = await Project.findOne({ id: projectId });
  var projectZipName = projectDetails.title.replaceAll(" ", "") + "-code.zip";
  var projectZipBlobBuffer = await downloadBlob(projectZipName);
  console.log(projectZipBlobBuffer);
  return projectZipBlobBuffer;
};

const getUsersLinkedToProject = async (projectId) => {
  const project = await Project.findOne({
    where: { id: projectId },
    include: {
      model: User,
      as: "users", // Alias defined in the Project model
      through: { attributes: [] }, // Hide the join table (UserProject) attributes
    },
  });
  console.log(project);
  if (!project) {
    console.log("Project not found");
    return [];
  }

  // Users linked to the project
  const users = project.users; // This is the result from the 'users' alias

  console.log(users);
  return users;
};

const checkProjectPurchased = async (projectId, userEmail) => {
  var userContext = await User.findOne({ where: { email: userEmail } });
  if (!userContext) {
    console.log("User not found");
    return false;
  }
  var projects = userContext.getProjects({ where: { id: projectId } });
  console.log("Found projects ", projects);
  if (projects) {
    return true;
  } else {
    return false;
  }
};

export {
  CreateProject,
  DownloadProject,
  getUsersLinkedToProject,
  checkProjectPurchased,
};
