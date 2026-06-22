import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

import ArchitectureDesign from "./ArchitectureDesign";
import BuildingPlan from "./BuildingPlan";
import CivilVastu from "./CivilVastu";
import RealEstate from "./RealEstate";
import SoftwareEngineer from "./SoftwareEngineer";
import Valuation from "./Valuation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/architecture-design"
          element={<ArchitectureDesign />}
        />

        <Route
          path="/building-plan"
          element={<BuildingPlan />}
        />

        <Route
          path="/civil-vastu"
          element={<CivilVastu />}
        />

        <Route
          path="/real-estate"
          element={<RealEstate />}
        />

        <Route
          path="/software-engineer"
          element={<SoftwareEngineer />}
        />

        <Route
          path="/valuation"
          element={<Valuation />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
