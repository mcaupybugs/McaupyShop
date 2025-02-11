import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={HomePage} />
        <Route path="/projectDetails/:id" Component={ProjectDetails} />
      </Routes>
    </div>
  );
}

export default App;
