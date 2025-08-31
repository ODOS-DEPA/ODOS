import React from "react";

function Button({
  imageSrcEN = "/images/homepage_sec3_en.jpg",
  imageSrcTH = "/images/homepage_sec3_th.jpg",
  link = "https://dg.th/kw6uzvdo57",
  lang = "en", // add lang prop
}) {
  const isThai = lang === "th";
  const buttonText = isThai
    ? "สมัครผ่าน แอปฯ 'ทางรัฐ'"
    : "Apply via 'Thang Rath' App";

  return (
    <div className="relative w-full max-w mx-auto">
      {/* Background image */}
      <img
        src={isThai ? imageSrcTH : imageSrcEN}
        alt="banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay button */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 sm:bottom-[12%] left-1/2 -translate-x-1/2 
        my-2 bg-[#FFF200] text-black font-bold rounded-lg shadow-lg
        w-80 py-2 sm:py-3 text-base sm:text-2xl text-center hover:bg-yellow-300 transition"
      >
        {buttonText}
      </a>
    </div>
  );
}

export default Button;
