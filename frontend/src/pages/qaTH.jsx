import React from "react";
import { Link } from "react-router-dom";
import Mammoth from "mammoth";
import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Navbar_info from "../components/NavQA";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/FooterTH";
import { Underline } from "lucide-react";
// import NavbarTH from "../components/NavbarTH";
import NavbarUnified from "../components/UnifiedNavbar";


function QaTH() {
  const [language, setLanguage] = useState("TH");
  return (
    <div className="LINESeed">

      {/* <NavbarTH /> */}
      <NavbarUnified language={language} setLanguage={setLanguage} />
      <ScrollToTop />
      <div>
        <img src="/images/info_sec1_banner_th.jpg" alt="" />
      </div>
      {/* รายละเอียด */}
      <div>
        <div className="id= คุณสมบัติ">
          <div className="h-screen flex flex-col  ">
            <br></br>
            <h1 className="text-5xl  font-bold mb-6 items-center text-center ">คำถามที่พบบ่อย</h1>

            <ul className="คุณสมบัติ px-6">
              <li><label htmlFor="#" className="font-bold">Q: อายุเกิน 19 ปี สมัครได้ไหม</label></li>
              <li><label htmlFor="#">A: ทางโครงการกำหนดคุณสมบัติของผู้สมัครต้องอายุไม่เกิน 19 ปี ณ วันที่เปิดรับสมัคร 24 มีนาคม 2568 เช่น หากอายุ 19 ปี 1 วัน ณ วันที่เปิดรับสมัคร ก็จะไม่ผ่านคุณสมบัติ</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: เรียบจบมัธยมต้นปีที่ 3 (ม.3) กำลังจะเข้า มัธยมปลาย (ม.4) หรือ ประกาศนียบัตรวิชาชีพ (ปวช.) สามารถสมัครได้ไหม</label></li>
              <li><label htmlFor="#">A: ไม่ตรงตามคุณสมับติ เนื่องจากจำเป็นต้องเป็นผู้ที่ศึกษาอยู่ในชั้นมันธยมปลาย (ม.4) หรือ ประกาศนียบัตรวิชาชีพ (ปวช.ปี 1) หรือมีใบมอบตัวอย่างเป็นทางการ ภายในปีการศึกษา 2567</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: สมัครโครงการมีค่าใช้จ่ายหรือไม่</label></li>
              <li><label htmlFor="#"></label>A: ไม่มีค่าใช้จ่ายในการสมัครเข้าร่วมโครงการ</li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: โครงการสนับสนุนค่าใช้จ่ายอะไรบ้าง</label></li>
              <li><label htmlFor="#"></label>A: โครงการสนับสนุนค่าใช้จ่ายที่เกี่ยวข้องกับการศึกษา การเดินทางไปศึกษา และการใช้ชีวิตในต่างประเทศ</li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: หากกำลังศึกษาอยู่ในระดับมหาวิทยาลัยปี 1 ใช้ผลการเรียน 2 ภาคการศึกษาไหน</label></li>
              <li><label htmlFor="#"></label>A: สามารถใช้ผลการเรียนปี 1 ภาคการศึกษา 1 และผลการเรียนในเทอมก่อนหน้า เช่น ม.6 ภาคการศึกษา 2 ได้ แต่ถ้าผลการเรียนเทอม 2 ออกในช่วงเวลาของการเปิดรับสมัคร (เปิดรับสมัครถึง 16 มิ.ย. 2568) สามารถรอผลของเทอม 2 ออกก่อนแล้วยื่นเอกสารโดยใช้ผลการเรียนปี 1 ทั้งเทอม 1 และ 2 ได้</li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: หากจบการศึกษาแล้วอยู่ระหว่างการรอเรียนต่อ จะใช้หนังสือรับรองความประพฤติจากไหน</label></li>
              <li><label htmlFor="#"></label>A: สามารถใช้หนังสือรับรองความประพฤติจากสถานศึกษาที่จบการศึกษามาได้ หรือให้ครูประจำชั้นออกใบรับรองแล้วลงชื่อให้ก็ได้เช่นกัน</li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: ช่วงระยะเวลาเข้าร่วมหลักสูตรของโครงการตรงกับช่วงการสอบหรือระหว่างภาคการศึกษา จะกระทบกับการเรียนไหม</label></li>
              <li><label htmlFor="#"></label>A: สำหรับผู้ที่ได้รับคัดเลือกเข้าร่วมโครงการ ทางโครงการจะทำหนังสือขออนุญาตทางสถานศึกษาให้เข้าร่วมโครงการ และพิจารณาเรื่องการสอบและเวลาเรียน เพื่อไม่ให้กระทบกับการเรียนในหลักสูตรปกติต่อไป</li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: ถ้าหาแถบสมัคร ODOS Summer Camp ไม่เจอ ต้องทำอย่างไร</label></li>
              <li><label htmlFor="#"></label>A: อันดับแรกเมื่อเข้ามาที่แอปทางรัฐ ตรงหัวข้อ “บริการ” ให้พิมพ์ “ODOS” ลงในช่องค้นหาด้านบนก่อน หากไม่ขึ้น ให้ตรวจสอบ Version ของแอปทางรัฐ โดยไปที่แอปทางรัฐเมนู “ตั้งค่า” เลื่อนมาด้านล่าง ตรวจสอบว่าเป็น Version 3.3.1 หรือยัง ถ้ายังให้ทำการ Update Application</li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: สามารถเลือกสถานศึกษา/ประเทศหรือเมืองที่อยากไปได้ไหม</label></li>
              <li><label htmlFor="#"></label>A: จะมีการจับฉลาก ประเทศ/หลักสูตร/สถานศึกษา และสอบสัมภาษณ์ในวันที่ 26 กรกฎาคม 2568</li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: VDO แนะนำต้องถ่ายอย่างไร</label></li>
              <li><label htmlFor="#"></label>A: ถ่าย VDO พูดแนะนำตัวเองและเหตุผลในการขอรับทุนโครงการ ODOS Summer Camp เป็น <strong>ภาษาอังกฤษ</strong> เวลารวมทั้งคลิปไม่เกิน 2 นาที ไม่มีการตัดต่อ แต่งกายสุภาพ เห็นหน้าตาชัดเจน เสียงชัดเจน นำคลิปใส่ลง Google Drive หรืออัปโหลดลง Social Media ของตนเอง (อย่าลืมเปิดให้คณะกรรมการสามารถรับชมและพิจารณา) แล้วแนบส่งมาได้</li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: เป็นนักเรียนสอบเทียบ GED แต่มีเกรดผลการเรียน ม.ปลายแค่เทอมเดียว สามารถเข้าร่วมโครงการได้ไหม</label></li>
              <li><label htmlFor="#"></label>A: หากภายในปีการศึกษา 2567 มีสถานะเป็นนักเรียน ม.ปลาย สามารถสมัครได้ โดยใช้เกรด 2 เทอมล่าสุดเป็นเกรดของปี 1 เทอม 1 และผลการเรียนในเทอมก่อนหน้าที่เป็น ม.ปลายได้ โดยแนบผลการสอบเทียบ GED มาด้วย</li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: แนวข้อสอบวัดระดับภาษาอังกฤษและทักษะดิจิทัล</label></li>
              <li><label htmlFor="#"></label>A: การสอบเป็นสอบแบบ online <br />
                - ข้อสอบภาษาอังกฤษ เป็นมาตรฐานการสอบ CEFR <br />
                - ข้อสอบทักษะดิจิทัล เป็นการทดสอบทักษะความเข้าใจและใช้เทคโนโลยีดิจิทัลพื้นฐาน
              </li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: กรณีมีการเรียนภาษาอังกฤษหลายรหัส ต้องใช้เกรดของรหัสไหน</label></li>
              <li><label htmlFor="#">A: ใช้เฉพาะเกรดของวิชาภาษาอังกฤษพื้นฐาน ที่เป็นวิชาบังคับ</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: หากในระดับที่ศึกษา เทอม 2 ไม่มีรายวิชาภาษาอังกฤษต้องยื่นเกรดแบบไหน</label></li>
              <li><label htmlFor="#">A: ใช้เกรด 3 เทอมล่าสุด คือ เกรดเทอม 1 และ 2 ในระดับปัจจุบัน ควบคู่กับเกรดเทอม 2 ในระดับก่อนหน้า</label></li>
              <br />

            </ul>
            <div className="flex flex-col"><Footer /></div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default QaTH;
