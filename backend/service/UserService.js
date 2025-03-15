import Project from "../models/Project.js";
import User from "../models/User.js";
import "../models/Associations.js";

const createUserIfNotExist = async (userDetails) => {
  const checkUser = await User.findOne({ where: { email: userDetails.email } });
  if (checkUser) {
    return checkUser;
  }
  var newUserSchema = {
    name: userDetails.name,
    email: userDetails.email,
    profilePicture: userDetails.picture,
  };
  await User.create(newUserSchema);
  return newUserSchema;
};

const linkProjectToUser = async (userEmail, projectId) => {
  // Find the user by email
  const currentUser = await User.findOne({ where: { email: userEmail } });

  if (!currentUser) {
    console.log("User not found!");
    return;
  }

  // Find the project by ID
  const projectBought = await Project.findOne({ where: { id: projectId } });

  if (!projectBought) {
    console.log("Project not found!");
    return;
  }

  // Add the project to the user (this should call the addProject method)
  await currentUser.addProject(projectBought);
};

export { createUserIfNotExist, linkProjectToUser };
