import dotenv from "dotenv";
import path from "path";

const getDotEnvPath = (env) => {
  if (env === "TEST") {
    return ".env.test";
  }
  return ".env.prod";
};

dotenv.config({
  path: path.resolve(
    process.cwd(),
    getDotEnvPath(process.env.NODE_ENV?.toUpperCase())
  ),
});

console.log(
  "Environment variables loaded from:",
  getDotEnvPath(process.env.NODE_ENV?.toUpperCase())
);
