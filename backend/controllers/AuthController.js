import { getUserLoginCredentials } from "../service/AuthService.js";
import { createUserIfNotExist } from "../service/UserService.js";

const userLoginRoute = async (req, res) => {
  const userData = await getUserLoginCredentials(req);
  console.log("User Data", userData);
  const userInDB = await createUserIfNotExist(userData);

  res.status(200).json(userInDB);
};

export { userLoginRoute };
