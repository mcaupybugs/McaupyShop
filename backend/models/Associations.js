import User from "./User.js";
import Project from "./Project.js";
import UserProject from "./UserProject.js";
import sequelize from "../config/db.js";

// Many-to-many relationship between User and Project via the UserProject join table
User.belongsToMany(Project, {
  through: UserProject, // Specifies the join table
  foreignKey: "userId", // Defines the foreign key in the join table
  as: "projects", // Alias for accessing projects of a user
});

Project.belongsToMany(User, {
  through: UserProject, // Specifies the join table
  foreignKey: "projectId", // Defines the foreign key in the join table
  as: "users", // Alias for accessing users of a project
});

// Sync all models
await sequelize.sync(); // Drop and recreate tables
