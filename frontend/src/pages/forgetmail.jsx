import { useState } from "react";
import Navbar from "../components/Navbar"; // ตรวจสอบเส้นทาง Navbar ให้ถูกต้อง
import { Link } from "react-router-dom";

const Forgot = () => {
    const [searchEmail, setSearchEmail] = useState(""); // State สำหรับเก็บค่าอีเมลที่กรอก
    const [error, setError] = useState(""); // State สำหรับเก็บข้อผิดพลาด
    const [isLoading, setIsLoading] = useState(false); // State สำหรับสถานะการโหลด/ส่งอีเมล
    const [emailSentMessage, setEmailSentMessage] = useState(""); // State สำหรับข้อความแจ้งเตือนการส่งอีเมล

    // ฟังก์ชันสำหรับจัดการการค้นหาและส่งอีเมลทันที
    const handleSearchAndSendEmail = async (e) => {
        e.preventDefault(); // ป้องกันการ reload หน้าเมื่อกด submit

        const trimmedEmail = searchEmail.trim(); // ลบช่องว่างหน้าหลังอีเมล

        // ตรวจสอบรูปแบบอีเมลเบื้องต้น
        if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
            setError("กรุณากรอกรูปแบบอีเมลที่ถูกต้อง");
            setEmailSentMessage(""); // ล้างข้อความการส่งอีเมลเก่า
            return;
        }

        setIsLoading(true); // ตั้งค่าสถานะกำลังโหลด/ส่ง
        setError(""); // ล้างข้อผิดพลาดเก่า
        setEmailSentMessage(""); // ล้างข้อความการส่งอีเมลเก่า

        try {
            // 1. เรียก API /api/searchE เพื่อค้นหาข้อมูลด้วยอีเมล
            const searchResponse = await fetch(
                `https://odos.thaigov.go.th:3000/api/searchE?email=${encodeURIComponent(trimmedEmail)}`
            );

            if (!searchResponse.ok) {
                // หาก response ไม่ใช่ 2xx (เช่น 404, 500) ให้ดึงข้อผิดพลาดจาก Backend
                const errorData = await searchResponse.json();
                throw new Error(errorData.error || "ไม่พบข้อมูลที่ตรงกับอีเมลนี้");
            }

            const data = await searchResponse.json(); // แปลง response เป็น JSON

            if (data.length === 0) {
                setError("ไม่พบข้อมูลที่ตรงกับอีเมลนี้");
                return; // ไม่พบข้อมูล ไม่ต้องส่งอีเมล
            }

            const foundRecord = data[0]; // หากพบข้อมูล ให้เก็บข้อมูลแรกที่เจอ

            // 2. ดึงข้อมูล Application ID, เบอร์โทรศัพท์, ชื่อ และนามสกุลจากผลลัพธ์ที่ค้นเจอ
            // **สำคัญมาก**: ตรวจสอบว่าชื่อคีย์ตรงกับที่อยู่ใน Excel ของคุณเป๊ะๆ
            // ตามภาพที่คุณเคยส่งมา ควรจะเป็น 'Application_id', 'เบอร์โทรศัพท์', 'ชื่อ (ภาษาไทย)', 'นามสกุล (ภาษาไทย)'
            const applicationId = foundRecord.Application_id;
            const phoneNumber = foundRecord["เบอร์โทรศัพท์"];
            const firstName = foundRecord["ชื่อ (ภาษาไทย)"]; // ดึงชื่อ
            const lastName = foundRecord["นามสกุล (ภาษาไทย)"]; // ดึงนามสกุล

            // กำหนดคำขึ้นต้นสำหรับชื่อผู้รับ
            const greetingName = (firstName || lastName) ? `คุณ ${firstName || ''} ${lastName || ''}`.trim() : 'ท่านผู้สมัคร';

            // 3. สร้างเนื้อหาอีเมล
            const emailBody = `
        เรียน ${greetingName},

        นี่คือข้อมูลสำหรับเข้าสู่ระบบของคุณ:
        รหัสการสมัคร: ${applicationId || 'ไม่ระบุ'}
        รหัสตรวจสอบ: ${phoneNumber || 'ไม่ระบุ'}

        เข้าเว็บไซต์
        https://odos.thaigov.go.th/check-status

        ขอแสดงความนับถือ,
        ทีมงาน ODOS Summer Camp
      `;

            // 4. เรียก API /send-email ของ Backend เพื่อส่งอีเมล
            const sendEmailResponse = await fetch("https://odos.thaigov.go.th:3000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: trimmedEmail, // ส่งไปที่อีเมลที่ผู้ใช้กรอกในช่องค้นหา
                    message: emailBody, // เนื้อหาอีเมลที่สร้างไว้
                }),
            });

            if (!sendEmailResponse.ok) {
                // หาก response ไม่ใช่ 2xx ให้ดึงข้อผิดพลาดจาก Backend
                const errorData = await sendEmailResponse.json();
                throw new Error(errorData.message || "เกิดข้อผิดพลาดในการส่งอีเมล");
            }

            const sendEmailResult = await sendEmailResponse.json(); // แปลง response เป็น JSON
            setEmailSentMessage(sendEmailResult.message); // แสดงข้อความแจ้งเตือนการส่งอีเมลสำเร็จ
            setSearchEmail(""); // ล้างช่องอีเมลหลังจากส่งสำเร็จ
        } catch (err) {
            console.error("Error during search and email send:", err); // แสดงข้อผิดพลาดใน console
            setError(err.message || "เกิดข้อผิดพลาดในการดำเนินการ โปรดลองใหม่อีกครั้ง");
        } finally {
            setIsLoading(false); // สิ้นสุดสถานะกำลังโหลด/ส่ง
        }
    };

    return (
        <div className="Sukhumvit">
            <Navbar hideLanguageTranslator={false} />
            <div className="container mx-auto py-8 px-4 text-[#003366] mb-4 font-sukhumvit">
                <h2 className="font-serif text-2xl font-sukhumvit">
                    ค้นหาข้อมูลด้วยอีเมล (สำหรับลืมรหัสผ่าน)
                </h2>

                {/* Form สำหรับกรอกอีเมลเพื่อค้นหาและส่งอีเมล */}
                <form onSubmit={handleSearchAndSendEmail} className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <div className="mb-4">
                        <label htmlFor="searchEmail" className="block text-gray-700 text-sm font-bold mb-2">
                            อีเมล:
                        </label>
                        <input
                            type="email" // ใช้ type="email" เพื่อให้มีการตรวจสอบรูปแบบเบื้องต้นจากเบราว์เซอร์
                            id="searchEmail"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="กรอกอีเมลของคุณ"
                            value={searchEmail}
                            onChange={(e) => setSearchEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled={isLoading} // ปิดการใช้งานปุ่มขณะกำลังดำเนินการ
                    >
                        {isLoading ? "กำลังดำเนินการ..." : "ค้นหาและส่งข้อมูล"}
                    </button>
                </form>

                {/* แสดงข้อความ Error หรือ Loading/Success */}
                {error && <p className="mt-4 text-red-600 font-sukhumvit">{error}</p>}
                {isLoading && <p className="mt-4 text-gray-600 font-sukhumvit">กำลังดำเนินการ...</p>}
                {emailSentMessage && <p className="mt-4 text-green-600 font-sukhumvit">{emailSentMessage}</p>}

                {/* ไม่มีส่วนแสดงผลลัพธ์บนหน้าเว็บแล้ว */}

                {/* ปุ่มกลับหน้าหลัก */}
                <div className="flex justify-center mt-6">
                    <Link to="/" className="text-blue-500 hover:underline">
                        กลับหน้าหลัก
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Forgot;