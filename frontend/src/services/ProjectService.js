import axios from "axios";

const projectService = axios.create({
  baseURL: "http://localhost:3007",
});

export const fetchProjects = async () => {
  const response = await projectService.get("/projects");
  return response.data;
};

export const purchaseProject = async (projectDetails) => {
  projectDetails.displayImage = null;
  projectDetails.projectImages = [];
  const initiatePaymentResponse = await projectService.post(
    `/payments/${projectDetails.id}`,
    projectDetails
  );

  console.log(initiatePaymentResponse);
  if (initiatePaymentResponse.status === "Failed") {
    return undefined;
  }

  // const response = await projectService.post(
  //   `/projects/${projectDetails.id}/purchase`,
  //   {
  //     responseType: "blob",
  //   }
  // );
  // const fileBlob = new Blob([response.data], { type: "application/zip" });
  // const fileUrl = URL.createObjectURL(fileBlob);
  // return fileUrl;
};
