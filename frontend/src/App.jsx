import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import ScrollToTop from "./components/ScrollToTop";
import Region from "./components/Region";
import Button from "./components/Button";
import Declaration from "./components/Declaration";
import Checkstatus from "./pages/Checkstatus";
import NavbarTH from "./components/NavbarTH"
import YoutubeEmbed from "./components/YoutubeEmbed";
import SimpleCard  from "./components/news-slide";

function Home() {
  return (
    <div className="LINESeed">
      <NavbarTH />
      {/* <YoutubeEmbed embedId="Z6IFOUDB4oA" /> */}
      <ScrollToTop />
      {/* <SimpleCard /> */}

      <div>
        {/* <img src="/images/Section1.png" alt="" /> */}
        <img src="/images/Section 1-en.jpg" alt="" />
      </div>
      <div>
        <img src="/images/ODOS Website_EN_Section 2_0.jpg" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        {/* <br />
        <br /> */}
        <Region />
              <img src="/images/ODOS Website_EN_V3_Section 3 - 4.jpg" alt="" />
        {/* <Button /> */}
        <br />
        <br />
      </div>
      <div className="flex flex-col">
        <Declaration />
      </div>
      <div className="flex flex-col">
        <Timeline />
      </div>
          <div>
              <img src="/images/ODOS Website_Partners_26072025_Partners_EN.jpg" alt="" /> 
      </div>
      <div className="flex flex-col">
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkstatus" element={<Checkstatus />} />
      {/* เพิ่ม routes อื่นๆ ตามต้องการ */}
      {/* <Route path="/InfoTH" element={<InfoTH />} />
      <Route path="/qaTH" element={<QaTH />} />
      <Route path="/Dashboard" element={<Dashboard />} /> */}
    </Routes>
  );
}

export default App;