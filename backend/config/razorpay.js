import Razorpay from "razorpay";

var razorInstance = new Razorpay({
  key_id: process.env.RAZOR_TEST_KEY,
  key_secret: process.env.RAZOR_TEST_SECRET,
});

export default razorInstance;
