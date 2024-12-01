import "./App.css";
import Catalog from "./views/Catalog.tsx";
import LandingPage from "./views/LandingPage.tsx";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div class="h-screen w-screen">
      <Routes>
        <Route exact path="/" element={<Catalog />} />
        <Route exact path="/landingpage" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
