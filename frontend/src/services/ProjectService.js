import axios from "axios";

const projectService = axios.create({
  baseURL: "http://localhost:4000",
});

export const fetchProjects = async () => {
  const response = await projectService.get("/projects");
  return response.data;
};
