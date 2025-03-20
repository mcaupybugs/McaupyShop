import axios from "axios";

const projectService = axios.create({
  baseURL: "http://localhost:3007",
});

export const fetchProjects = async () => {
  const response = await projectService.get("/projects");
  return response.data;
};

export const fetchProject = async (id) => {
  const response = await projectService.get(`/projects/${id}`);
  return response.data;
};
