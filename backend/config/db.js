import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db/projectDatabase.sqlite",
});

export default sequelize;
