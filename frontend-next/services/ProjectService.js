import axios from "axios";

const projectService = axios.create({
  baseURL: "http://localhost:3007",
});

export const fetchProjects = async () => {
  const response = await projectService.get("/projects");
  return response.data;
};

export const fetchIsProjectPurchased = async (userId, projectId) => {
  const response = await projectService.get(`/projects/${projectId}/users`);
  var userList = response.data;
  const isUserPurchased = userList.some((user) => user.id === userId);

  console.log("Is User Purchased:", isUserPurchased);

  return isUserPurchased;
};

export const fetchProject = async (id) => {
  const response = await projectService.get(`/projects/${id}`);
  return response.data;
};

export const purchaseProject = async (projectDetails, userEmail) => {
  projectDetails.displayImage = null;
  projectDetails.projectImages = [];

  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  if (!res) {
    alert("Razropay failed to load!!");
    return;
  }

  const orderCreationResponse = await initiateOrderCreation(projectDetails);
  if (!orderCreationResponse) {
    console.log("error in order creation");
  }
  console.log(orderCreationResponse);
  const orderId = orderCreationResponse.data.orderId;
  const options = {
    key: "rzp_test_19bFgLQqIJRFVL", // Enter the Key ID generated from the Dashboard
    amount: projectDetails.price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "USD",
    name: projectDetails.title,
    description: projectDetails.description,
    image: "https://example.com/your_logo",
    order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    handler: async function (response, error) {
      const paymentPayload = {
        orderCreationId: orderId,
        razorpayPaymentId: response.razorpay_payment_id,
        razorpayOrderId: response.razorpay_order_id,
        razorpaySignature: response.razorpay_signature,
        userEmail: userEmail,
        projectId: projectDetails.id,
      };

      const result = await verifyPayment(paymentPayload);
    },
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#3399cc",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

export const downloadProject = async (projectDetails, userEmail) => {
  projectDetails.displayImage = null;
  projectDetails.projectImages = [];
  var projectDownloadPayload = {
    projectDetails: projectDetails,
    userEmail: userEmail,
  };
  const response = await projectService.post(
    `/projects/${projectDetails.id}/download`,
    projectDownloadPayload,
    {
      responseType: "blob",
    }
  );
  if (response.status !== 200) {
    console.log("Download Failed");
    return;
  }
  const fileBlob = new Blob([response.data], { type: "application/zip" });
  const fileUrl = URL.createObjectURL(fileBlob);
  return fileUrl;
};

const verifyPayment = async (paymentPayload) => {
  const verifyPaymentResponse = await projectService.post(
    `/payments/success`,
    paymentPayload
  );
};

const initiateOrderCreation = async (projectDetails) => {
  const initiatePaymentResponse = await projectService.post(
    `/payments/${projectDetails.id}`,
    projectDetails
  );

  if (initiatePaymentResponse.status !== 200) {
    return null;
  }
  return initiatePaymentResponse;
};

// ============================= Utility Functions ================

const loadScript = async (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
