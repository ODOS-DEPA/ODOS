import React from "react";

function Timeline({lang = "en"}) {
  const imgSrc =
    lang === "th"
      ? "/images/homepage_sec6_timeline_th.jpg"
      : "/images/homepage_sec6_timeline_en.jpg";

  return (
    <div>
      <div className="">
        <img src={imgSrc} alt="ODOS_Timeline" />
      </div>

      
    </div>
  );
}

export default Timeline;
