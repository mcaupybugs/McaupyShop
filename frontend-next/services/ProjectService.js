import axios from "axios";

const projectService = axios.create({
  baseURL: "http://localhost:3007",
});

export const fetchProjects = async () => {
  const response = await projectService.get("/projects");
  return response.data;
};
