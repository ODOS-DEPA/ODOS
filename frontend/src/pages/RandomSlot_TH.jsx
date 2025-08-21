import React from "react";
import { Link } from "react-router-dom";
import Mammoth from "mammoth";
import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Navbar_info from "../components/Nav_info";
import ScrollToTop from "../components/ScrollToTop";
// import Footer from "../components/FooterTH";
import { Underline } from "lucide-react";
// import NavbarTH from "../components/NavbarTH";
import NavbarUnified from "../components/UnifiedNavbar";
import FooterCombined from "../components/FooterCombined";



function RandomInfoTH() {
    const data = [
        { country: "เครือรัฐออสเตรเลีย", university: "University of Technology Sydney & Macquarie University", count: 140, date: "18 ต.ค. – 29 พ.ย." },
        { country: "สาธารณรัฐประชาชนจีน", university: "Beijing University of Posts and Telecommunications", count: 50, date: "19 ต.ค. – 22 พ.ย." },
        { country: "สาธารณรัฐประชาชนจีน", university: "Alibaba Academy", count: 50, date: "19 ต.ค. – 29 พ.ย." },
        { country: "สาธารณรัฐประชาชนจีน", university: "Huawei Technology", count: 50, date: "19 ต.ค. – 29 พ.ย." },
        { country: "สาธารณรัฐประชาชนจีน", university: "Huazhong University of Science and Technology", count: 50, date: "12 ต.ค. – 22 พ.ย." },
        { country: "สาธารณรัฐเอสโตเนีย", university: "Tallinn University of Technology", count: 50, date: "12 ต.ค. – 22 พ.ย." },
        { country: "สาธารณรัฐฟินแลนด์", university: "Alto University", count: 50, date: "5 ต.ค. – 15 พ.ย." },
        { country: "สาธารณรัฐฟินแลนด์", university: "Metropolia University of Applied Sciences", count: 50, date: "12 ต.ค. – 22 พ.ย." },
        { country: "ญี่ปุ่น", university: "Kyoto Seika University", count: 50, date: "4 ต.ค. – 15 พ.ย." },
        { country: "ญี่ปุ่น", university: "Tokyo Metropolitan University", count: 43, date: "5 ต.ค. – 7 พ.ย." },
        { country: "สาธารณรัฐสิงคโปร์", university: "Ngee Ann Polytechnic", count: 40, date: "5 ต.ค. – 15 พ.ย." },
        { country: "สาธารณรัฐเกาหลี", university: "Sookmyung University", count: 50, date: "14 ต.ค. – 22 พ.ย." },
        { country: "สหราชอาณาจักร", university: "University of Essex", count: 50, date: "4 ต.ค. – 15 พ.ย." },
        { country: "สหราชอาณาจักร", university: "University of Leicester", count: 50, date: "4 ต.ค. – 15 พ.ย." },
        { country: "สหราชอาณาจักร", university: "University of Surrey", count: 50, date: "4 ต.ค. – 15 พ.ย." },
        { country: "สหรัฐอเมริกา", university: "University of Washington", count: 105, date: "11 ต.ค. – 15 พ.ย." },
    ];

    const total = data.reduce((sum, item) => sum + item.count, 0);
    const [language, setLanguage] = useState("TH");

    return (

        <div className="LINESeed">
            {/* <NavbarTH /> */}
            <NavbarUnified language={language} setLanguage={setLanguage} />

            <ScrollToTop />

            <div>
                <img src="/images/info_sec1_banner_th.jpg" alt="" />
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
                <ul className="list-none list-inside mb-2">
                    <li>1. ผู้เข้าจับสลากจะต้องแสดงบัตรประจำตัวประชาชน หรือแสดงข้อมูลบัตรประจำตัวประชาชนผ่านแอปพลิเคชัน ThaID เพื่อลงทะเบียนและยืนยันตัวตนน (หากผู้เข้าจับสลากไม่ได้นำบัตรประจำตัวประชาชน หรือสิ่งที่กำหนดมาจะไม่มีสิทธิในการเข้าร่วมจับสลาก ดังนั้นขอให้เตรียมตัวมาเป็นอย่างดี) </li>
                    <li>2. ผู้เข้าจับสลากต้องแต่งกายด้วยเครื่องแบบนักเรียน/นักศึกษา</li>
                    <li>3. การจับสลากจะดำเนินการทีละคน โดยเรียงตามลำดับที่โครงการประกาศ</li>
                    <li>4. ลำดับการจับสลากจะเรียงตามลำดับการสมัครเข้าร่วมโครงการ ซึ่งทางโครงการจะประกาศลำดับให้ทราบ</li>
                    <li>5. ผู้ที่เข้าสู่พื้นที่การจับสลากจะต้องเป็นผู้ที่สมัครเข้าร่วมโครงการเท่านั้น</li>
                    <li>6. หลักสูตรที่จับสลากมีทั้งหมด 16 หลักสูตร</li>
                    <li>7. ในบางหลักสูตรมีการกำหนดอายุของผู้เข้าร่วมหลักสูตร ขั้นตอนการจับสลากจะมีการแจ้งให้ทราบโดยละเอียดอีกครั้งในวันจัดกิจกรรม</li>
                    <li>8. หลักสูตรที่จับสลากได้ถือเป็นที่สิ้นสุด ไม่สามารถเปลี่ยนแปลงหรือสลับกับผู้เข้าร่วมโครงการท่านอื่นได้</li>
                    <li>9. โครงการจะมีการถ่ายทอดสดการจับสลากเพื่อความโปร่งใส อีกทั้งเป็นการประชาสัมพันธ์ให้เกิดการรับรู้ในวงกว้าง</li>

                </ul>
                <p className="font-semibold">เงื่อนไขการสัมภาษณ์เพื่อเข้าร่วมโครงการ ODOS Summer Camp</p>
                <ul className="list-none list-inside">
                    <li>1. ผู้เข้ารับการสัมภาษณ์จะต้องใช้ภาษาอังกฤษในการสื่อสาร โดยจะมีการแนะนำตัว และตอบคำถามของกรรมการสัมภาษณ์</li>
                    <li>2. การตัดสินของกรรมการสัมภาษณ์ถือเป็นที่สิ้นสุด</li>
                </ul>
                <p className="font-semibold">การสละสิทธิ์หรือยุติสถานะการเข้าร่วมโครงการ</p>
                <ol className="list-inside mb-2">
                    <li>1. ผู้เข้าร่วมโครงการแจ้งสละสิทธิ์ในการเข้าร่วมโครงการ</li>
                    <li>2. ผู้เข้าร่วมโครงการไม่เข้าร่วมกิจกรรมของโครงการตามกำหนด</li>
                    <li>3. การยื่นคำร้องขอ VISA ไม่ได้รับการอนุมัติ</li>
                    <li>4. กรณีอื่น ๆ ที่คณะกรรมการพิจารณาแล้วเห็นสมควรให้ยุติสถานะการเข้าร่วมโครงการ</li>
                </ol>
                <p className="font-semibold">กรณีที่ผู้เข้าร่วมโครงการสละสิทธิ์ โครงการจะดำเนินการดังนี้</p>
                <ol className="list-inside mb-2">
                    <li>1. กรณีที่ผู้ผ่านการคัดเลือกสละสิทธิ์ในการเข้าร่วมโครงการ สิทธิ์นั้นจะตกเป็นของผู้สมัครที่มีคะแนนสูงสุดในลำดับถัดมาในอำเภอนั้น ๆ</li>
                    <li>2. กรณีที่อำเภอนั้น ๆ ไม่มีผู้สมัครรายอื่น สิทธิ์จะตกเป็นของผู้สมัครที่มีคะแนนสูงสุดลำดับถัดมาในจังหวัดเดียวกัน</li>
                    <li>3. กรณีจังหวัดนั้น ๆ ไม่มีผู้สมัครรายอื่น สิทธิ์จะตกเป็นของผู้สมัครที่มีคะแนนสูงสุดลำดับถัดมาในภูมิภาคเดียวกัน</li>
                    <li>4. การพิจารณาของคณะกรรมการถือเป็นที่สิ้นสุด</li>
                </ol>
                {/* <p className="font-semibold mt-4">การเตรียมความพร้อมสำหรับเข้าทดสอบ</p>
  <ol className="list-inside mb-2">
    <li>1. เตรียมอุปกรณ์คอมพิวเตอร์ แลปท็อป แท็บเล็ต หรือโทรศัพท์มือถือ ที่มีฟังก์ชันกล้องและไมโครโฟน</li>
    <li>2. เชื่อมต่อกับอินเทอร์เน็ตที่พร้อมใช้งาน</li>
    <li>3. เปิดสิทธิ์กล้องและไมโครโฟนระหว่างการสอบ</li>
    <li>4. อยู่ในสถานที่ส่วนตัว ไม่มีผู้เข้าออก และไม่มีเสียงรบกวน</li>
    <li>5. เตรียมบัตรประชาชนเพื่อยืนยันตัวตน</li>
  </ol> */}
                {/* <p className="font-semibold">ข้อปฏิบัติระหว่างการทดสอบ</p>
  <p className="mb-2">ผู้เข้าทดสอบจะต้องดำเนินการทดสอบให้เสร็จสิ้นภายในครั้งเดียว ระบบทดสอบจะไม่มีการหยุดเวลา และมีระบบการตรวจสอบการทุจริตผ่านการบันทึกภาพ เสียง และตรวจสอบการใช้งานโปรแกรม การสลับหน้าจอตลอดระยะเวลาการสอบ</p>
  <ol className="list-inside mb-2">
    <li>1. ต้องสอบให้เสร็จในครั้งเดียว ไม่มีการหยุดเวลา</li>
    <li>2. แต่งกายสุภาพ</li>
    <li>3. ปิดโปรแกรมสื่อสาร เช่น Line, Facebook ก่อนเริ่มสอบ</li>
    <li>4. ห้ามลุกจากที่นั่งหรือสื่อสารกับผู้อื่นขณะสอบ</li>
    <li>5. จะมีการบันทึกภาพและเสียง</li>
    <li>6. ห้ามใช้งานหรือสลับไปยังโปรแกรมอื่น ๆ ขณะสอบ</li>
  </ol> */}
            </div>

            {/* รายละเอียด */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="border border-gray-300 px-4 py-2">ประเทศ</th>
                            <th className="border border-gray-300 px-4 py-2">สถาบันการศึกษา</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">จำนวน (คน)</th>
                            <th className="border border-gray-300 px-4 py-2 text-center">วันเดินทาง</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-4 py-2">{item.country}</td>
                                <td className="border border-gray-300 px-4 py-2">{item.university}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{item.count}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{item.date}</td>
                            </tr>
                        ))}
                        <tr className="font-semibold bg-gray-100">
                            <td colSpan="2" className="border border-gray-300 px-4 py-2 text-left">รวม</td>
                            <td className="border border-gray-300 px-4 py-2 text-center">{total}</td>
                            <td className="border border-gray-300 px-4 py-2 text-center"></td>
                        </tr>
                    </tbody>
                </table>
            </div>


            {/* บังคับให้รูปไปอยู่ล่างสุด */}
            {/* <div className="mt-auto">
        <img src="/images/Partner.jpg" alt="" />
      </div> */}

            {/* <Footer /> */}
            <FooterCombined lang="th" />
        </div>
    );
}

export default RandomInfoTH;