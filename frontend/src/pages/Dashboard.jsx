import ScrollToTop from "../components/ScrollToTop";
// import Footer from "../components/Footer";
// import NavbarDashboard from "../components/NavbarDashboard";
// import NavbarTH from "../components/NavbarTH";
import NavbarUnified from "../components/UnifiedNavbar";
import { useState } from "react";
import FooterCombined from "../components/FooterCombined";

function Dashboard() {
    const [language, setLanguage] = useState("TH");
    return (
        <div className="LINESeed">
            {/* <NavbarTH /> */}
            <NavbarUnified language={language} setLanguage={setLanguage} />

            <br />
            <br />
            <div className="h-screen flex items-center justify-center p-10">
                <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMTljYWM1YzUtYTAwYi00OTZhLTg0ZjYtNWFjN2FmODdkZjgzIiwidCI6IjRhNGY3YjUyLTBlMDUtNDQxNS04NDU0LTc2ODliMDBhODdiMiIsImMiOjEwfQ%3D%3D&pageName=277162da8f32c9147b90"
                    width={1000}
                    height={660}

                />
            </div>
            <br />
             <div className="h-screen flex items-center justify-center p-10">
                <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMTljYWM1YzUtYTAwYi00OTZhLTg0ZjYtNWFjN2FmODdkZjgzIiwidCI6IjRhNGY3YjUyLTBlMDUtNDQxNS04NDU0LTc2ODliMDBhODdiMiIsImMiOjEwfQ%3D%3D&pageName=eb03ca756a26edde19f2"
                    width={1000}
                    height={660}

                />
            </div>
            <ScrollToTop />
            <div className="flex flex-col">
                {/* <Footer /> */}
                <FooterCombined lang="th" />
            </div>
        </div>
    );
}

export default Dashboard;