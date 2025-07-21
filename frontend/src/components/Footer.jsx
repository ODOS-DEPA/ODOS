import React from "react";

function Footer() {
  return (
    <div className="bg-[#2c2c2c] flex flex-col px-4 py-0">

      {/* Row 1: Logo + Flag Counter */}
      <div className="flex flex-row items-center justify-between">
        {/* Logo */}
        <img
          src="/images/Logo ODOS and KV_Monochome_White.png"
          alt="Logo"
          className="sm:w-[250px] sm:h-[250px]"
        />

        {/* Flag Counter */}
        <div className="flex justify-center my-4">
          <a href="https://info.flagcounter.com/LeL4">
            <img
              src="https://s01.flagcounter.com/count2/LeL4/bg_2C2C2C/txt_FFFFFF/border_2C2C2C/columns_2/maxflags_10/viewers_0/labels_0/pageviews_0/flags_0/percent_0/"
              alt="Flag Counter"
              border="0"
            />
          </a>
        </div>
      </div>

      {/* Row 2: Address */}
      <div className="text-white text-sm sm:text-xl mt-0">
        {/* <p className="font-bold">Email: contactodos@depa.or.th</p> */}
        <p className="font-bold">Address</p>
        <p>234/431 Soi Ladprao 10, Ladprao Road, Chom Phon Subdistrict,</p>
        <p>Chatuchak District, Bangkok 10900</p>
        <p>This website is created by the Digital Economy Promotion Agency</p>
      </div>

      {/* Row 3: Social Icons */}
      <div className="flex text-white justify-center gap-4 mt-6">
        <a
          href="https://www.facebook.com/share/16BVKLsMhE/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/FBIcon.png"
            alt="Facebook"
            className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
          />
        </a>
        <a
          href="https://www.tiktok.com/@odossummercamp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/TikTokIcon.png"
            alt="TikTok"
            className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
          />
        </a>
      </div>

      {/* Row 4: Copyright */}
      <div className="text-white text-center text-base mt-6">
        <p>©2025. Powered and secured by depa</p>
      </div>
    </div>
  );
}

export default Footer;
