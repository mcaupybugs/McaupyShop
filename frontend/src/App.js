import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectDetails from "./pages/ProjectDetails";
import Navbar from "./components/Navbar";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // window.sessionStorage.clear();
    var currentUser = window.sessionStorage.getItem("current_user");
    if (currentUser !== null) {
      var parsedCurrentUser = JSON.parse(currentUser);
      setUser(parsedCurrentUser);
    }
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <div className="sticky top-0 z-50 bg-white itim-regular">
          <Navbar />
        </div>
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/projectDetails/:id" Component={ProjectDetails} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
};

export default App;
