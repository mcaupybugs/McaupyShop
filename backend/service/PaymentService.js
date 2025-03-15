import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils.js";
import razorInstance from "../config/razorpay.js";

const createOrder = async (amount, currency) => {
  var transactionOptions = {
    amount: amount * 100,
    currency: currency,
  };

  var order = await new Promise((resolve, reject) => {
    razorInstance.orders.create(transactionOptions, (err, order) => {
      if (err) {
        reject(err);
      }
      resolve(order);
    });
  });
  return order.id;
};

const paymentVerfication = async (paymentData) => {
  const verificationResult = validatePaymentVerification(
    {
      order_id: paymentData.razorpayOrderId,
      payment_id: paymentData.razorpayPaymentId,
    },
    paymentData.razorpaySignature,
    process.env.RAZOR_TEST_SECRET
  );
  return verificationResult;
};

export { createOrder, paymentVerfication };
