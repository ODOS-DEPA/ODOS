import React from "react";

function Declaration({ lang = "en" }) {
  const imgSrc =
    lang === "th"
      ? "/images/homepage_sec4_dec_th.jpg"
      : "/images/homepage_sec4_dec_en.jpg";

  return (
    <div>
      <img
        src={imgSrc}
        alt=""
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Declaration;
