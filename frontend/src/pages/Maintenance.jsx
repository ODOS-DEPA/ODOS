import React from "react";

import MaintenanceImageEN from '/images/Maintenance_en.jpg';
import MaintenanceImageTH from '/images/Maintenance_th.jpg';
import NavbarUnified from "../components/UnifiedNavbar";
import { useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import FootCombined from "../components/FooterCombined";


function Maintenance({ lang = "en" }) {
  const selectedImage = lang === 'th' ? MaintenanceImageTH : MaintenanceImageEN;
  
  const [language, setLanguage] = useState("EN");
  return (
    <div className="LINESeed">
      <NavbarUnified language={language} setLanguage={setLanguage} context="main" />
      
      <ScrollToTop />
      <div className="bg-[#2c2c2c] flex flex-col px-4 py-0">
        <div className="flex flex-row items-center justify-between">
          <img
            src={selectedImage}
          />
        </div>

        <FootCombined lang={language} />
      </div>
    </div>
  );
}

export default Maintenance;