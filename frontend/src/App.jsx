import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Checkstatus from "./pages/Checkstatus.jsx";
import Captcha from "./pages/Captcha.jsx";
import TH from "./pages/TH.jsx";
import Information from "./pages/infoEN.jsx";
import InfoTH from "./pages/infoTH.jsx";
import QaTH from "./pages/qaTH.jsx";
import QaEN from "./pages/qaEN.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Announcement from "./pages/Announcement.jsx";
import RandomInfoTH from "./pages/RandomSlot_TH.jsx";
import Home from "./pages/Home.jsx";
import Maintenance from './pages/Maintenance.jsx';


let maintenanceMode = Boolean(Number(import.meta.env.VITE_IS_MAINTANENCE || "0"))

function App() {
  return (
    <Router>
      <Routes>
        {maintenanceMode ? 
          // When ON, every route shows Maintenance
          <Route path="*" element={<Maintenance />} />
        : 
          // When OFF, normal routes work
          <>
            <Route path="/EN" element={<Home />} />
            <Route path="/" element={<TH />} />
            <Route path="/Information" element={<Information />} />
            <Route path="/infoTH" element={<InfoTH />} />
            <Route path="/qaTH" element={<QaTH />} />
            <Route path="/qaEN" element={<QaEN />} />
            <Route path="/check-status" element={<Checkstatus />} />
          </>
        }
      </Routes>
    </Router>
  );
}

export default App;
