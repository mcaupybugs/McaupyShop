import { googleLogout } from "@react-oauth/google";
import react from "react";

const CircularLoginButton = ({ userData, setUserState }) => {
  const showLogout = () => {
    var logoutButton = document.getElementById("logout-button");
    if (logoutButton.classList.contains("hidden")) {
      logoutButton.classList.remove("hidden");
    } else {
      logoutButton.classList.add("hidden");
    }
  };

  const logout = () => {
    console.log("Logging out ");
    window.sessionStorage.clear();
    setUserState(null);
    googleLogout();
  };

  return (
    <div className="h-full w-full flex flex-col">
      <div
        className="h-full w-full flex flex-row justify-start p-2 pr-8 gap-2"
        onClick={showLogout}
      >
        <img
          src={userData.profilePicture}
          alt={userData.name}
          className="border rounded-full"
        />
        <div className="text-nowrap">{userData.name}</div>
      </div>
      <div
        id="logout-button"
        className="h-full w-full bg-gray-100 p-2 hidden"
        onClick={logout}
      >
        Logout
      </div>
    </div>
  );
};

export { CircularLoginButton };
