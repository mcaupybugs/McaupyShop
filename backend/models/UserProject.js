import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import User from "./User.js";
import Project from "./Project.js";

// The join table should have UUID fields to match User and Project IDs
const UserProject = sequelize.define("UserProject", {
  userId: {
    type: DataTypes.UUID, // Use UUID to match the User model
    references: {
      model: User, // Refers to the User table
      key: "id", // The `id` field in the User table
    },
    allowNull: false,
  },
  projectId: {
    type: DataTypes.UUID, // Use UUID to match the Project model
    references: {
      model: Project, // Refers to the Project table
      key: "id", // The `id` field in the Project table
    },
    allowNull: false,
  },
});

export default UserProject;
