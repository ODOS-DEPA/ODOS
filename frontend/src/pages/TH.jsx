import React from "react";
// import { Link } from "react-router-dom";
import NavbarTH from "../components/NavbarTH";
import FooterTH from "../components/FooterTH";
import TimelineTH from "../components/TimelineTH";
import ScrollToTop from "../components/ScrollToTop";
import Region from "../components/Region";
import Button from "../components/Button";
import DeclarationTH from "../components/DeclareTH";
import { useEffect } from "react";
function TH() {
    useEffect(() => {
    const refreshedStep = sessionStorage.getItem("refreshedStep");
    console.log("refreshedStep:", refreshedStep);

    if (!refreshedStep) {
        sessionStorage.setItem("refreshedStep", "1");
        console.log(">> Refreshing: รอบที่ 1");
        window.location.reload();
    } else if (refreshedStep === "1") {
        sessionStorage.setItem("refreshedStep", "2");
        console.log(">> Refreshing: รอบที่ 2");
        setTimeout(() => {
            console.log("After 2 seconds");
        }, 2000);
        window.location.reload();
    } else {
        console.log("✅ ไม่รีเฟรชแล้ว (ครบ 2 รอบ)");
        // do nothing
    }
    }, []);
    return (

        <div className="LINESeed">



            <NavbarTH />
            <ScrollToTop />
            <div>
                {/* <img src="/images/ODOS Website_Detail_Section 1.jpg" alt="" /> */}
                <img src="/images/Section 1-th.jpg" alt="" />
            </div>
            <div>
                <img src="/images/ODOS Website_TH_20032025_Section 2_0.jpg" alt="" />
            </div>

            <div className="flex flex-col justify-center items-center">
                
                
                {/* <br />
                <br /> */}
                <Region />
                <img src="/images/Section 3 - 4 TH3.jpg" alt="" />
                {/* <Button /> */}
                <br />
                <br />
            </div>
            <div className="flex flex-col">
                <DeclarationTH />
            </div>
            <div className="flex flex-col">
                <TimelineTH />
            </div>
            <div>
                <img src="/images/ODOS_Website_Partners.jpg" alt="" />
            </div>

            <div className="flex flex-col">


                <FooterTH />
            


            </div>
        </div>
    );
}

export default TH;