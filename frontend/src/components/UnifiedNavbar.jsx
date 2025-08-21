import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const tab_nav =  {
    TH: [
      { to: "/", label: "Home" },
      { to: "/InfoTH", label: "Information" },
      { to: "/qaTH", label: "Q&A" },
      // { to: "/check-status", label: "Check Status" }
    //   { to: "/Dashboard", label: "Dashboard" },
    //   { to: "/Announcement", label: "Announcement" },
    ],
    EN: [
      { to: "/EN", label: "Home" },
      { to: "/Information", label: "Information" },
      { to: "/qaEN", label: "Q&A" },
      // { to: "/check-status", label: "Check Status" }
    //   { to: "/Dashboard", label: "Dashboard" },
    //   { to: "/Announcement", label: "Announcement" },
    ],
  }

const menuConfig = {

  main: tab_nav,
  dashboard: tab_nav,
  announcement: tab_nav,
  qa: tab_nav,
}


function NavbarUnified({ language = "TH", setLanguage, context = "main" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Language switch logic
  const handleLanguageSwitch = (lang) => {
    setLanguage && setLanguage(lang);
    const path = location.pathname;

    if (lang === "EN") {
      if (path === "/") return navigate("/EN");
      if (path === "/InfoTH") return navigate("/Information");
      if (path === "/qaTH") return navigate("/qaEN");
      if (path === "/Dashboard") return navigate("/Dashboard");
      if (path === "/Announcement") return navigate("/Announcement");
      return navigate("/EN");
    }
    if (lang === "TH") {
      if (path === "/EN") return navigate("/");
      if (path === "/Information") return navigate("/InfoTH");
      if (path === "/qaEN") return navigate("/qaTH");
      if (path === "/Dashboard") return navigate("/Dashboard");
      if (path === "/Announcement") return navigate("/Announcement");
      return navigate("/");
    }
  };

  // Get menu items for current context and language
  const menuItems = menuConfig[context][language];

  return (
    <nav className="sticky top-0 z-50 bg-[#FFF200] transition-colors">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img
          src="/images/icons/Logo ODOS and KV_Monochome_Black.png"
          alt="Logo ODOS"
          className="hidden md:block h-16 w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24"
        />

        <div className="flex md:hidden items-center justify-between w-full">
          <img
            src="/images/icons/Logo ODOS and KV_Monochome_Black.png"
            alt="Logo ODOS"
            className="h-12 w-12"
          />
          <button
            className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-gray-600 hover:border-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex font-weird items-center">
          <div className="flex gap-3 lg:gap-4 xl:gap-6 text-[10px] sm:text-[11px] lg:text-[12px] xl:text-[13px] pr-3 lg:pr-4">
            {menuItems.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-gray-600 transition-colors whitespace-nowrap">
                {item.label}
              </Link>
            ))}
            <a href={import.meta.env.VITE_DOMAIN_NAME_REDIRECT} className="hover:text-gray-600 transition-colors whitespace-nowrap" target="_blank" rel="noopener noreferrer">ODOS#1</a>
          </div>
          <div className="text-[10px] sm:text-[11px] lg:text-[12px] xl:text-[13px]">
            <button onClick={() => handleLanguageSwitch("EN")} className="hover:text-gray-600 transition-colors">EN</button>
            <span className="mx-1"> | </span>
            <button onClick={() => handleLanguageSwitch("TH")} className="hover:text-gray-600 transition-colors">TH</button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#FFF200] border-t border-gray-300`}>
        <div className="px-4 py-3 font-weird">
          <div className="flex flex-col space-y-3 text-[12px] mb-4">
            {menuItems.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-gray-600 transition-colors py-1" onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
            <a href={import.meta.env.VITE_DOMAIN_NAME_REDIRECT} className="hover:text-gray-600 transition-colors whitespace-nowrap" target="_blank" rel="noopener noreferrer">ODOS#1</a>
          </div>
          <div className="text-[12px] pt-3 border-t border-gray-300">
            <button onClick={() => { setIsMenuOpen(false); handleLanguageSwitch("EN"); }} className="hover:text-gray-600 transition-colors">EN</button>
            <span className="mx-2"> | </span>
            <button onClick={() => { setIsMenuOpen(false); handleLanguageSwitch("TH"); }} className="hover:text-gray-600 transition-colors">TH</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavbarUnified;