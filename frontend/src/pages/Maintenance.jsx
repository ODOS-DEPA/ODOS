import React from "react";

import MaintenanceImageEN from '/images/Maintenance_en.jpg';
import MaintenanceImageTH from '/images/Maintenance_th.jpg';
import NavbarUnified from "../components/UnifiedNavbar";
import { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";


function Maintenance({ lang = "en" }) {
  const selectedImage = lang === 'th' ? MaintenanceImageTH : MaintenanceImageEN;
  
  const [language, setLanguage] = useState("EN");
  return (
    <div className="LINESeed">
      <NavbarUnified language={language} setLanguage={setLanguage} context="main" />

      <ScrollToTop />
      <div
        className="h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${selectedImage})` }}
      />
    </div>
  );
}

export default Maintenance;