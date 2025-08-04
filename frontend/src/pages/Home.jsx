import React from "react";
import Timeline from "../components/Timeline";
import Region from "../components/Region";
import Button from "../components/Button";
import Declaration from "../components/Declaration";

function Home() {
  return (
    <div className="LINESeed">
      <div>
        <img src="/images/Section 1-en.jpg" alt="" />
      </div>
      <div>
        <img src="/images/ODOS Website_EN_Section 2_0.jpg" alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Region />
        <img src="/images/Section 3 - 4 EN.jpg" alt="" />
        <Button />
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
        <img src="/images/ODOS Website_EN_Section 7 Partner.jpg" alt="" />
      </div>
    </div>
  );
}

export default Home;
