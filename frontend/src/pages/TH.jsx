import { useState } from "react";
import Timeline from "../components/Timeline";
import ScrollToTop from "../components/ScrollToTop";
import Region from "../components/Region";
import Declaration from "../components/Declaration";
import NavbarUnified from "../components/UnifiedNavbar";
import FooterCombined from "../components/FooterCombined";

function TH() {
    const [language, setLanguage] = useState("TH");

    return (

        <div className="LINESeed">

            {/* <NavbarTH /> */}
            <NavbarUnified language={language} setLanguage={setLanguage} context="main" />
            <ScrollToTop />
            <div>
                {/* <img src="/images/ODOS Website_Detail_Section 1.jpg" alt="" /> */}
                <img src="/images/homepage_sec1_banner_th.jpg" alt="" />
            </div>
            <div>
                <img src="/images/homepage_sec2_th.jpg" alt="" />
            </div>

            <div className="flex flex-col justify-center items-center">
                
                
                {/* <br />
                <br /> */}
                {/* <Region /> */}
                <img src="/images/homepage_sec3_th.jpg" alt="" />
                {/* <Button /> */}
                <br />
                <br />
            </div>
            <div className="flex flex-col">
                <Declaration lang="th" />
            </div>
            <div className="flex flex-col">
                <Timeline lang="th"/>
            </div>
            <div>
                <img src="/images/homepage_sec5_partners_th.jpg" alt="" />
            </div>

            <div className="flex flex-col">


                {/* <FooterTH /> */}
                <FooterCombined lang="th" />
            </div>
        </div>
    );
}

export default TH;