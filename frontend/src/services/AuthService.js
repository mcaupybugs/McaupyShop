import axios from "axios";

const authService = axios.create({
  baseURL: "http://localhost:3007/auth",
});

export const loginUser = async (userData) => {
  const response = await authService.post("/login", userData);
  console.log(response);
  return response.data;
};
