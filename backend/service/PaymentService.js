import razorInstance from "../config/razorpay.js";

const createTransaction = async (amount, currency) => {
  var transactionOptions = {
    amount: amount,
    currency: currency,
  };

  var order = await new Promise((resolve, reject) => {
    razorInstance.orders.create(transactionOptions, (err, order) => {
      if (err) {
        console.log(err);
        reject(err);
        return false;
      }
      resolve(order);
      console.log(order);
      return true;
    });
  });
  console.log(order);
};

export { createTransaction };
