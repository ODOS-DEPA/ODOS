import { Routes, Route } from "react-router-dom";
import Timeline from "../components/Timeline";
import ScrollToTop from "../components/ScrollToTop";
import Region from "../components/Region";
import Declaration from "../components/Declaration";
import Checkstatus from "../pages/Checkstatus";
import NavbarUnified from "../components/UnifiedNavbar";
import { useState } from "react";
import FooterCombined from "../components/FooterCombined";


function Home() {
  const [language, setLanguage] = useState("EN");
  return (
    <div className="LINESeed">
      {/* <Navbar /> */}
      <NavbarUnified language={language} setLanguage={setLanguage} context="main" />
      <ScrollToTop />
      <div>
        {/* <img src="/images/Section1.png" alt="" /> */}
        <img src="/images/homepage_sec1_banner_en.jpg" alt="" />
      </div>
      <div>
        <img src="/images/homepage_sec2_en.jpg" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        {/* <br />
        <br /> */}
        <Region />
              <img src="/images/homepage_sec3_en.jpg" alt="" />
        {/* <Button /> */}
        <br />
        <br />
      </div>
      <div className="flex flex-col">
        <Declaration lang="en" />
      </div>
      <div className="flex flex-col">
        <Timeline lang="en"/>
      </div>
          <div>
              <img src="/images/homepage_sec5_partners_en.jpg" alt="" /> 
      </div>
      <div className="flex flex-col">

        <FooterCombined lang="en" />
      </div>
    </div>
  );
}

export default Home;