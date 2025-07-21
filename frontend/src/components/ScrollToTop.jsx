import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showScrollTop && (
      <button
        className="scroll-to-top fixed bottom-4 right-4 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center drop-shadow-xl"
        style={{ zIndex: 999 }}
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-[black]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    )
  );
};

export default ScrollToTop;
