import { createOrder, paymentVerfication } from "../service/PaymentService.js";
import { linkProjectToUser } from "../service/UserService.js";

const makePayment = async (req, res) => {
  var projectDetails = req.body;
  console.log(projectDetails);
  var orderId = await createOrder(projectDetails.price, "USD");
  res.json({ orderId: orderId });
};

const verifyPayment = async (req, res) => {
  var paymentData = req.body;
  console.log("Payment data from controller", paymentData);
  const verificationResponse = await paymentVerfication(paymentData);
  if (!verificationResponse) {
    res.status(402);
  }
  // Link the project with user.
  const linkingResult = await linkProjectToUser(
    paymentData.userEmail,
    paymentData.projectId
  );
  res.status(200);
};

export { makePayment, verifyPayment };
