import { useState, useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
import NavbarUnified from "../components/UnifiedNavbar";
import FooterCombined from "../components/FooterCombined";

const faqDataTH = [
  {
    question: "อายุเกิน 19 ปี สมัครได้ไหม",
    answer: "ทางโครงการกำหนดคุณสมบัติของผู้สมัครต้องอายุไม่เกิน 19 ปี ณ วันที่เปิดรับสมัคร 24 มีนาคม 2568 เช่น หากอายุ 19 ปี 1 วัน ณ วันที่เปิดรับสมัคร ก็จะไม่ผ่านคุณสมบัติ"
  },
  {
    question: "เรียนจบมัธยมต้นปีที่ 3 (ม.3) กำลังจะเข้า ม.4 หรือ ปวช. สมัครได้ไหม",
    answer: "ไม่ตรงตามคุณสมบัติ เนื่องจากจำเป็นต้องเป็นผู้ที่ศึกษาอยู่ในชั้นมัธยมปลาย (ม.4) หรือ ปวช.ปี 1 ภายในปีการศึกษา 2567"
  },
  {
    question: "สมัครโครงการมีค่าใช้จ่ายหรือไม่",
    answer: "ไม่มีค่าใช้จ่ายในการสมัครเข้าร่วมโครงการ"
  },
  {
    question: "โครงการสนับสนุนค่าใช้จ่ายอะไรบ้าง",
    answer: "โครงการสนับสนุนค่าใช้จ่ายที่เกี่ยวข้องกับการศึกษา การเดินทางไปศึกษา และการใช้ชีวิตในต่างประเทศ"
  },
  {
    question: "หากกำลังศึกษาอยู่ในระดับมหาวิทยาลัยปี 1 ใช้ผลการเรียน 2 ภาคการศึกษาไหน",
    answer: "สามารถใช้ผลการเรียนปี 1 ภาค 1 และ ม.6 ภาค 2 ได้ หรือใช้ปี 1 ทั้งภาค 1 และ 2 หากผลสอบออกทัน"
  },
  {
    question: "หากจบการศึกษาแล้วอยู่ระหว่างการรอเรียนต่อ จะใช้หนังสือรับรองความประพฤติจากไหน",
    answer: "ใช้หนังสือรับรองจากสถานศึกษาที่จบ หรือให้ครูประจำชั้นออกใบรับรอง"
  },
  {
    question: "ช่วงเวลาเข้าร่วมโครงการตรงกับสอบ จะกระทบการเรียนไหม",
    answer: "โครงการจะออกหนังสือขออนุญาต และจัดการเรื่องสอบกับสถานศึกษาให้"
  },
  {
    question: "หาแถบสมัคร ODOS Summer Camp ไม่เจอ ต้องทำอย่างไร",
    answer: "ค้นหาคำว่า “ODOS” ในแอปทางรัฐ ถ้าไม่พบ ให้ตรวจสอบว่าเป็น Version 3.3.1 หรือไม่"
  },
  {
    question: "สามารถเลือกสถานศึกษา/ประเทศที่อยากไปได้ไหม",
    answer: "จะมีการจับฉลากในวันที่ 26 กรกฎาคม 2568"
  },
  {
    question: "VDO แนะนำต้องถ่ายอย่างไร",
    answer: "ถ่ายแนะนำตัวภาษาอังกฤษ ไม่เกิน 2 นาที ไม่ตัดต่อ เห็นหน้าชัด อัปโหลด Google Drive หรือโซเชียล"
  },
  {
    question: "เป็นนักเรียนสอบเทียบ GED มีเกรด ม.ปลายเทอมเดียว สมัครได้ไหม",
    answer: "ถ้าในปีการศึกษา 2567 มีสถานะเป็นนักเรียน ม.ปลาย สามารถสมัครได้ พร้อมแนบ GED"
  },
  {
    question: "แนวข้อสอบวัดระดับภาษาอังกฤษและทักษะดิจิทัล",
    answer: "สอบออนไลน์: ภาษาอังกฤษตาม CEFR และทักษะดิจิทัลพื้นฐาน"
  },
  {
    question: "มีวิชาภาษาอังกฤษหลายรหัส ใช้เกรดของรหัสไหน",
    answer: "ใช้เฉพาะเกรดของวิชาภาษาอังกฤษพื้นฐานที่เป็นวิชาบังคับ"
  },
  {
    question: "เทอม 2 ไม่มีภาษาอังกฤษ ต้องยื่นเกรดแบบไหน",
    answer: "ใช้เกรด 3 เทอมล่าสุด คือ เทอม 1 และ 2 ปัจจุบัน + เทอม 2 ก่อนหน้า"
  }
];


function QaTH() {
  const [language, setLanguage] = useState("TH");

  return (
    <div className="LINESeed">
      <NavbarUnified language={language} setLanguage={setLanguage} />
      <ScrollToTop />

      <div>
        <img src="/images/info_sec1_banner_th.jpg" alt="FAQ Banner" />
      </div>

      <div className="h-screen flex flex-col">
        <br />
        <h1 className="text-5xl  font-bold mb-6 items-center text-center ">คำถามที่พบบ่อย</h1>
        <ul className="space-y-6">
          {faqDataTH.map((item, index) => (
            <li key={index}>
              <p className="font-bold text-lg pl-4">Q: {item.question}</p>
              <p className="font-normal text-lg pl-4"> A: {item.answer}</p>
            </li>
          ))}
          <br />
        </ul>
        <div className="flex flex-col">
          <FooterCombined lang="th" />
        </div>
      </div>
    </div>
  );
}

export default QaTH;