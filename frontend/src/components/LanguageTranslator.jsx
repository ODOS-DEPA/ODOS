// LanguageTranslator.js
import React, { useEffect } from "react";

const LanguageTranslator = () => {
  useEffect(() => {
    if (!document.querySelector('script[data-gt-widget-id="43217984"]')) {
      // Define Google Translate settings
      window.gtranslateSettings = window.gtranslateSettings || {};
      window.gtranslateSettings["43217984"] = {
        default_language: "en",
        languages: [
          "en",
          "zh-CN",
          "th",
          "ja",
          "ko",
          "af",
          "sq",
          "am",
          "fa",
          "ar",
          "ps",
          "hy",
          "az",
          "eu",
          "be",
          "bn",
          "bs",
          "bg",
          "ca",
          "ceb",
          "ny",
          "zh-TW",
          "co",
          "hr",
          "cs",
          "da",
          "nl",
          "eo",
          "et",
          "tl",
          "fi",
          "fr",
          "fy",
          "gl",
          "ka",
          "de",
          "el",
          "gu",
          "ht",
          "ha",
          "haw",
          "iw",
          "hi",
          "hmn",
          "hu",
          "is",
          "ig",
          "id",
          "ga",
          "it",
          "jw",
          "kn",
          "kk",
          "km",
          "ku",
          "lo",
          "la",
          "lv",
          "lt",
          "lb",
          "mk",
          "mg",
          "ms",
          "ml",
          "mt",
          "mi",
          "mr",
          "mn",
          "my",
          "ne",
          "no",
          "pl",
          "pt",
          "pa",
          "ro",
          "ru",
          "sm",
          "gd",
          "sr",
          "st",
          "sn",
          "sd",
          "si",
          "sk",
          "sl",
          "so",
          "es",
          "su",
          "sw",
          "sv",
          "tg",
          "ta",
          "te",
          "tr",
          "uk",
          "ur",
          "uz",
          "vi",
          "cy",
          "xh",
          "yi",
          "yo",
          "zu",
        ],
        wrapper_selector: "#gt-mordadam-43217984",
        native_language_names: 1,
        flag_style: "2d",
        flag_size: 24,
        horizontal_position: "inline",
        flags_location: "/flags/",
      };

      // Load Google Translate script
      const script = document.createElement("script");
      script.src = "/js/gt.min.js"; // Path to your Google Translate script
      script.setAttribute("data-gt-widget-id", "43217984");
      script.async = true;
      document.body.appendChild(script);

      // Initialize Google Translate widget
      window.googleTranslateElementInit = () => {
        if (!document.querySelector("#gt-mordadam-43217984 select")) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages:
                "af,sq,am,en,fa,ar,ps,ja,zh-CN,hy,az,eu,be,bn,bs,bg,ca,ceb,ny,zh-TW,co,hr,cs,da,nl,eo,et,tl,fi,fr,fy,gl,ka,de,el,gu,ht,ha,haw,iw,hi,hmn,hu,is,ig,id,ga,it,jw,kn,kk,km,ko,ku,ky,lo,la,lv,lt,lb,mk,mg,ms,ml,mt,mi,mr,mn,my,ne,no,pl,pt,pa,ro,ru,sm,gd,sr,st,sn,sd,si,sk,sl,so,es,su,sw,sv,tg,ta,te,th,tr,uk,ur,uz,vi,cy,xh,yi,yo,zu",
              layout:
                window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            "gt-mordadam-43217984"
          );
        }
      };
    }
  }, []);

  return <div id="gt-mordadam-43217984"></div>;
};

export default LanguageTranslator;
