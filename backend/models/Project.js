import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Project = sequelize.define("Project", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  displayImage: {
    type: DataTypes.TEXT("long"), // For large base64 strings
    allowNull: true,
  },
  projectImages: {
    type: DataTypes.JSON,
  },
  projectBlob: {
    type: DataTypes.STRING,
  },
  rating: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 5,
    },
  },
  tags: {
    type: DataTypes.JSON,
  },
});

export default Project;
