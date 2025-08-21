import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from 'react';

import Checkstatus from "./pages/Checkstatus.jsx";
import App from "./App.jsx";
import Captcha from "./pages/Captcha.jsx";
import "./index.css";
import Maintenance from "./pages/Maintenance.jsx";
import TH from "./pages/TH.jsx";
import Information from "./pages/infoEN.jsx";
import InfoTH from "./pages/infoTH.jsx";
import QaTH from "./pages/qaTH.jsx";
import QaEN from "./pages/qaEN.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Announcement from "./pages/Announcement.jsx";
import RandomInfoTH from "./pages/RandomSlot_TH.jsx";
import { Navigate } from "react-router-dom";


const root = createRoot(document.getElementById("root"));
const targetSite = 'https://www.citydata.in.th/'

const DocSubmittedRedirect = () => {
  useEffect(() => {
    console.log("Redirecting to external site...");
    window.location.href = targetSite;
  }, []);

  return null;  // No content is rendered
};

root.render(
  <StrictMode>
    <Router>
      <Routes>
        {/* เส้นทางหน้าแรก */}
        {/* <Route path="/" element={<Maintenance />} /> */}
        <Route path="/EN" element={<App />} />

        <Route path="/" element={<TH />} />

        {/* เส้นทางหน้า list */}
        {/* <Route path="/list" element={<List />} /> */}
        {/* เส้นทางหน้า Maintenance */}
        <Route path="/Maintenance" element={<Maintenance />} />
        {/* เส้นทางหน้า Information */}
        <Route path="/Information" element={<Information />} />
        <Route path="/infoTH" element={<InfoTH />} />
        <Route path="/qaTH" element={<QaTH />} />
        <Route path="/qaEN" element={<QaEN />} />
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/Announcement" element={<Announcement />} /> */}
        {/* <Route path="/Info2TH" element={<RandomInfoTH />} /> */}
        <Route path="/odosform" element={<DocSubmittedRedirect />} />
        
        {/* เส้นทางที่ต้องตรวจสอบ CAPTCHA */}
        <Route
  path="/check-status"
  element={
    //<Captcha>
    <Checkstatus />
    //</Captcha>
  }
/>

      </Routes>
    </Router>
  </StrictMode>
);