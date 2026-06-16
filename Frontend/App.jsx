import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./Frontend/Home";
import About from "./Frontend/About";
import Services from "./Frontend/Services";
import Contact from "./Frontend/Contact";

import ArchitectureDesign from "./Frontend/ArchitectureDesign";
import BuildingPlan from "./Frontend/BuildingPlan";
import CivilVastu from "./Frontend/CivilVastu";
import RealEstate from "./Frontend/RealEstate";
import SoftwareEngineer from "./Frontend/SoftwareEngineer";
import Valuation from "./Frontend/Valuation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/architecture-design" element={<ArchitectureDesign />} />
        <Route path="/building-plan" element={<BuildingPlan />} />
        <Route path="/civil-vastu" element={<CivilVastu />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/software-engineer" element={<SoftwareEngineer />} />
        <Route path="/valuation" element={<Valuation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;