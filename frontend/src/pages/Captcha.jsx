
import { useEffect, useState, useRef } from "react";

const Captcha = ({ children }) => {
  const [captchaValid, setCaptchaValid] = useState(false);
  const [captchaPassed, setCaptchaPassed] = useState(() => {
    const storedValue = localStorage.getItem("captchaPassed");
    return storedValue === "true"; // รีเซ็ตให้เริ่มต้นเป็น false ทุกครั้ง
  });

  const captchaRendered = useRef(false);

  const loadTurnstileScript = () => {
    return new Promise((resolve, reject) => {
      if (window.turnstile) {
        resolve(); // Turnstile มีอยู่แล้ว
        return;
      }

      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;

      script.onload = () => resolve();
      script.onerror = () => reject(new Error("Failed to load Turnstile script"));

      document.body.appendChild(script);
    });
  };

  const renderCaptcha = () => {
    const captchaContainer = document.getElementById("turnstile-container");

    if (captchaContainer && !captchaRendered.current) {
      // ลบ DOM เก่า
      while (captchaContainer.firstChild) {
        captchaContainer.removeChild(captchaContainer.firstChild);
      }

      window.turnstile.render("#turnstile-container", {
        sitekey: "0x4AAAAAAA5w0p24tBkYd5he", // ใส่ Site Key ที่ถูกต้อง
        callback: (token) => {
          if (token) {
            setCaptchaValid(true);
            console.log("CAPTCHA validated with token:", token);
          }
        },
        "error-callback": () => {
          setCaptchaValid(false);
          console.error("CAPTCHA encountered an error");
        },
        "expired-callback": () => {
          setCaptchaValid(false);
          captchaRendered.current = false;
          console.log("CAPTCHA expired. Showing alert...");
          alert(
            "เนื่องจาก Token สำหรับยืนยันตัวตนหมดอายุ\nโปรดกด OK เพื่อรีโหลดใหม่"
          );
          renderCaptcha(); // รีโหลด CAPTCHA อัตโนมัติหลังจากแจ้งเตือน
        },
      });

      captchaRendered.current = true;
    }
  };

  useEffect(() => {
    loadTurnstileScript()
      .then(() => {
        renderCaptcha();
        console.log("Turnstile script loaded successfully");
      })
      .catch((error) => {
        console.error(error);
        alert("CAPTCHA โหลดไม่สำเร็จ โปรดรีเฟรชหน้าเว็บ");
      });
  }, []);

  useEffect(() => {
    if (!captchaPassed) {
      captchaRendered.current = false; // รีเซ็ตสถานะเมื่อผู้ใช้ยังไม่ผ่าน CAPTCHA
      renderCaptcha();
    }
  }, [captchaPassed]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValid) {
      setCaptchaPassed(true);
      localStorage.setItem("captchaPassed", "true");
    } else {
      console.log("CAPTCHA token expired. Showing alert...");
      alert(
        "เนื่องจาก Token สำหรับยืนยันตัวตนหมดอายุ\nโปรดกด OK และกดปุ่ม Refresh อีกครั้งเพื่อรีโหลดใหม่"
      );
      captchaRendered.current = false;
      renderCaptcha(); // รีโหลด CAPTCHA อัตโนมัติหลังจากแจ้งเตือน
    }
  };

  if (!captchaPassed) {
    return (
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h2 className="text-xl font-sukhumvit text-center">
            {/* กรุณาผ่าน CAPTCHA ก่อนเข้าเว็บไซต์ */}
          </h2>

          <img
            src="/images/Section1.png"
            alt="Secure Access"
            className="mx-auto w-256 h-256"
          />

          <div className="text-center text-xl font-sukhumvit font-bold">
            <p>ระบบกำลังนำท่านเข้าสู่การตรวจสถานะการสมัคร</p>
            <p>กรุณากด Check Box ด้านล่าง และกดปุ่มยืนยัน</p>
          </div>



          <div id="turnstile-container" className="mt-4 justify-items-center"></div>
          
          <div className="text-center text-36px font-sukhumvit">
            <p>หาก CAPTCHA ไม่แสดงผล</p>
            <p>กรุณาเปลี่ยนเว็บเบราว์เซอร์เป็น Google Chrome</p> 
            <p>หรือรีเฟรชหน้าเว็บอีกครั้ง</p>
          </div>
          
          <button
  type="submit"
  className="bg-blue-500 text-white py-2 px-4 rounded-lg font-sukhumvit mt-2 mx-auto block"
>
  ยืนยัน
</button>

        </form>
      </div>
    );
  }

  return <>{children}</>;
};

export default Captcha;