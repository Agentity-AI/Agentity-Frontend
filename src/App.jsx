import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import AiAgent from "./pages/AiAgentPage.jsx";
import SimulationPage from "./pages/SimulationPage.jsx";
import LandingPag from "./pages/LandingPage.jsx";
import SmartContract from "./pages/SmartContract.jsx";
import { authentication } from "./store/zustant/useZustandHook.js";


function App() {
   const {  dashBoard } = authentication();
  return (
    <Routes>
      <Route path="/" element={<LandingPag />} />
      <Route path="/dashboard" element={ dashBoard ? <DashboardPage /> : <LandingPag /> } />
      <Route path="/agents" element={ dashBoard ? <AiAgent /> : <LandingPag /> } />
      <Route path="/simulations" element={ dashBoard ? <SimulationPage /> : <LandingPag /> } />
      <Route path="/audits" element={ dashBoard ? <SmartContract /> : <LandingPag /> } />
    </Routes>
  );
}

export default App;
