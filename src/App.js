import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import LifesciencesPage from "./pages/LifesciencesPage/LifesciencesPage";
import DiagnosticsPage from "./pages/DiagnosticsPage/DiagnosticsPage";
import BecomePartnerPage from "./pages/BecomePartnerPage/BecomePartnerPage";
import CareersPage from "./pages/CareersPage/CareersPage";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";
import Leadership from "./components/Leadership/Leadership";
import OurFootprint from "./pages/OurFootprint/OurFootprint";
import DosTable from "./components/DosTable";

import WhatsAppWidget from "./components/WhatsAppWidget/WhatsAppWidget"; 
import logoImg from "./assets/Sagepath-Labs-Logo.png";

import "./App.css";

function App() {
  return (
    <Router>
      {/* WhatsApp Floating Widget — always on screen */}
      <WhatsAppWidget
        companyName="SagePath Labs"
        phone="+917995862920" 
        message="Hello SagePath Labs! I would like to know more about your diagnostics and home sample pick-up."
        logo={logoImg}
        position="bottom-right"
        showOnDesktop={true}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Lifesciences" element={<LifesciencesPage />} />
        <Route path="Diagnostics" element={<DiagnosticsPage />} />
        <Route path="Become-a-Partner" element={<BecomePartnerPage />} />
        <Route path="Careers" element={<CareersPage />} />
        <Route path="Leadership" element={<Leadership />} />
        <Route path="Contact" element={<ContactUsPage />} />
        <Route path="DocTable" element={<DosTable />} />
        <Route path="Our-Footprint" element={<OurFootprint />} />
      </Routes>
    </Router>
  );
}

export default App;
