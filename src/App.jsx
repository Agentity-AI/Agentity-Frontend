import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import AiAgent from "./pages/AiAgentPage.jsx";
import SimulationPage from "./pages/SimulationPage.jsx";
import LandingPag from "./pages/LandingPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPag />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/agents" element={<AiAgent />} />
      <Route path="/simulations" element={<SimulationPage />} />
    </Routes>
  );
}

export default App;
