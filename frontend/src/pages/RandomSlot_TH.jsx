import React from "react";
import { Link } from "react-router-dom";
import Mammoth from "mammoth";
import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
import Navbar_info from "../components/Nav_info";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/FooterTH";
import { Underline } from "lucide-react";
import NavbarTH from "../components/NavbarTH";
function RandomInfoTH() {
  const data = [
    { country: "เครือรัฐออสเตรเลีย", university: "University of Technology Sydney & Macquarie University", count: 140 },
    { country: "สาธารณรัฐประชาชนจีน", university: "Beijing University of Posts and Telecommunications", count: 50 },
    { country: "สาธารณรัฐประชาชนจีน", university: "Alibaba Academy", count: 50 },
    { country: "สาธารณรัฐประชาชนจีน", university: "Huawei Technology", count: 50 },
    { country: "สาธารณรัฐประชาชนจีน", university: "Huazhong University of Science and Technology", count: 50 },
    { country: "สาธารณรัฐเอสโตเนีย", university: "Tallinn University of Technology", count: 50 },
    { country: "สาธารณรัฐฟินแลนด์", university: "Alto University", count: 50 },
    { country: "สาธารณรัฐฟินแลนด์", university: "Metropolia University of Applied Sciences", count: 50 },
    { country: "ญี่ปุ่น", university: "Kyoto Seika University", count: 50 },
    { country: "ญี่ปุ่น", university: "Tokyo Metropolitan University", count: 43 },
    { country: "สาธารณรัฐสิงคโปร์", university: "Ngee Ann Polytechnic", count: 40 },
    { country: "สาธารณรัฐเกาหลี", university: "Sookmyung University", count: 50 },
    { country: "สหราชอาณาจักร", university: "University of Essex", count: 50 },
    { country: "สหราชอาณาจักร", university: "University of Leicester", count: 50 },
    { country: "สหราชอาณาจักร", university: "University of Surrey", count: 50 },
    { country: "สหรัฐอเมริกา", university: "University of Washington", count: 105 },
  ];

  const total = data.reduce((sum, item) => sum + item.count, 0);
  return (
    <div className="LINESeed">
      <NavbarTH />
      <ScrollToTop />

      <div>
        <img src="/images/ODOS Website_Detail_Section 1.jpg" alt="" />
      </div>

      {/* ข้อความแนะนำการเตรียมสอบ */}
      <div className="bg-yellow-50 p-6 border-l-4 border-yellow-400 shadow-md m-4 rounded-lg">
  <h2 className="text-2xl font-bold text-yellow-800 mb-2">
    ข้อมูลรายละเอียดเข้าร่วมการจับสลากเลือกหลักสูตร/สอบสัมภาษณ์
  </h2>
  <p className="mb-2">
  การจับสลากเลือกประเทศ และการสัมภาษณ์เพื่อเข้าร่วมโครงการ ODOS Summer Camp<br />
  วันเสาร์ที่ 26 กรกฎาคม 2568<br />
  ลงทะเบียน: ระหว่างเวลา 07.30 - 09.00 น.<br />
  เริ่มพิธีการจับสลาก และสอบสัมภาษณ์: 9.00 น. เป็นต้นไป<br />
  สถานที่: บางกอกคอนเวนชั่นเซ็นเตอร์ ชั้น 22{" "}
  <a
    href="https://maps.app.goo.gl/EL2TgaedUvTMa9k2A"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline"
  >
    เซ็นทาราแกรนด์ แอท เซ็นทรัลเวิลด์
  </a>
  </p>
  <p className="font-semibold">เงื่อนไขการเข้าจับสลากเลือกประเทศเพื่อเข้าร่วมโครงการ ODOS Summer Camp</p>
  <ul className="list-disc list-inside mb-2">
    <li>1. ผู้เข้าจับสลากจะต้องแสดงบัตรประจำตัวประชาชน หรือแสดงข้อมูลบัตรประจำตัวประชาชนผ่านแอปพลิเคชัน ThaID เพื่อลงทะเบียนและยืนยันตัวตนน (หากผู้เข้าจับสลากไม่ได้นำบัตรประจำตัวประชาชน หรือสิ่งที่กำหนดมาจะไม่มีสิทธิในการเข้าร่วมจับสลาก ดังนั้นขอให้เตรียมตัวมาเป็นอย่างดี) </li>
    <li>2. ผู้เข้าจับสลากต้องแต่งกายด้วยเครื่องแบบนักเรียน/นักศึกษา</li>
    <li>3. การจับสลากจะดำเนินการทีละคน โดยเรียงตามลำดับที่โครงการฯ ประกาศ</li>
    <li>4. ลำดับการจับสลากจะเรียงตามลำดับการสมัครเข้าร่วมโครงการ ซึ่งทางโครงการฯ จะประกาศลำดับให้ทราบ</li>
    <li>5. ผู้ที่เข้าสู่พื้นที่การจับสลากจะต้องเป็นผู้ที่สมัครเข้าร่วมโครงการฯ เท่านั้น</li>
    <li>6. หลักสูตรที่จับสลากมีทั้งหมด 16 หลักสูตร*</li>
    <li>7. ในบางหลักสูตรมีการกำหนดอายุของผู้เข้าร่วมหลักสูตร หากผู้เข้าจับสลากมีอายุต่ำกว่าเกณฑ์ที่กำหนด โครงการฯ ขอสงวนสิทธิ์ให้มีการจับสลากใหม่</li>
    <li>8. หลักสูตรที่จับสลากได้ถือเป็นที่สิ้นสุด ไม่สามารถเปลี่ยนแปลงหรือสลับกับผู้เข้าร่วมโครงการฯ ท่านอื่นได้</li>
    <li>9. โครงการฯ จะมีการถ่ายทอดสดการจับสลากเพื่อความโปร่งใส อีกทั้งเป็นการประชาสัมพันธ์ให้เกิดการรับรู้ในวงกว้าง</li>
    
  </ul>
  <p className="font-semibold">เงื่อนไขการสัมภาษณ์เพื่อเข้าร่วมโครงการ ODOS Summer Camp</p>
  <ul className="list-disc list-inside">
    <li>1. ผู้เข้ารับการสัมภาษณ์จะต้องใช้ภาษาอังกฤษในการสื่อสาร โดยจะมีการแนะนำตัว และตอบคำถามของกรรมการสัมภาษณ์</li>
    <li>2. การตัดสินของกรรมการสัมภาษณ์ถือเป็นที่สิ้นสุด</li>
  </ul>
  <p className="font-semibold">การสละสิทธิ์หรือยุติสถานะการเข้าร่วมโครงการฯ</p>
  <ul className="list-disc list-inside">
    <li>1. ผู้เข้าร่วมโครงการฯ แจ้งสละสิทธิ์ในการเข้าร่วมโครงการฯ</li>
    <li>2. ผู้เข้าร่วมโครงการฯ ไม่เข้าร่วมกิจกรรมของโครงการฯ ตามกำหนด</li>
    <li>3. การยื่นคำร้องขอ VISA ไม่ได้รับการอนุมัติ</li>
    <li>4. กรณีอื่น ๆ ที่คณะกรรมการพิจารณาแล้วเห็นสมควรให้ยุติสถานะการเข้าร่วมโครงการฯ</li>
  </ul>
  <p className="font-semibold">กรณีที่ผู้เข้าร่วมโครงการฯ สละสิทธิ์ โครงการฯ จะดำเนินการดังนี้</p>
  <ul className="list-disc list-inside">
    <li>1. กรณีที่ผู้ผ่านการคัดเลือกสละสิทธิ์ในการเข้าร่วมโครงการฯ สิทธิ์นั้นจะตกเป็นของผู้สมัครที่มีคะแนนสูงสุดในลำดับถัดมาในอำเภอนั้น ๆ</li>
    <li>2. กรณีที่อำเภอนั้น ๆ ไม่มีผู้สมัครรายอื่น สิทธิ์จะตกเป็นของผู้สมัครที่มีคะแนนสูงสุดลำดับถัดมาในจังหวัดเดียวกัน</li>
    <li>3. กรณีจังหวัดนั้น ๆ ไม่มีผู้สมัครรายอื่น สิทธิ์จะตกเป็นของผู้สมัครที่มีคะแนนสูงสุดลำดับถัดมาในภูมิภาคเดียวกัน</li>
    <li>4. การพิจารณาของคณะกรรมการถือเป็นที่สิ้นสุด</li>
  </ul>
</div>

      {/* รายละเอียด */}
    <div className="overflow-x-auto">
      <table className="table-auto w-full border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2">ประเทศ</th>
            <th className="border border-gray-300 px-4 py-2">สถาบันการศึกษา</th>
            <th className="border border-gray-300 px-4 py-2 text-center">จำนวน (คน)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2">{item.country}</td>
              <td className="border border-gray-300 px-4 py-2">{item.university}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">{item.count}</td>
            </tr>
          ))}
          <tr className="font-semibold bg-gray-100">
            <td colSpan="2" className="border border-gray-300 px-4 py-2 text-right">รวม</td>
            <td className="border border-gray-300 px-4 py-2 text-center">{total}</td>
          </tr>
        </tbody>
      </table>
    </div>


      {/* บังคับให้รูปไปอยู่ล่างสุด */}
      {/* <div className="mt-auto">
        <img src="/images/Partner.jpg" alt="" />
      </div> */}

      {/* <Footer /> */}
    </div>
  );
}

export default RandomInfoTH;