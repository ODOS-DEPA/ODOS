// import { useState } from "react";

// const ForgotPasswordModal = ({ isOpen, onClose, excelData }) => {
//   const [email, setEmail] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!email) {
//       setError("กรุณากรอกอีเมล");
//       return;
//     }

//     // ตรวจสอบรูปแบบอีเมล
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setError("กรุณากรอกอีเมลให้ถูกต้อง");
//       return;
//     }

//     setIsLoading(true);
//     setError("");
//     setMessage("");

//     try {
//       // ค้นหาข้อมูลในไฟล์ Excel ที่อยู่ใน frontend
//       const userRecord = excelData.find(record => 
//         record.Email && record.Email.toLowerCase() === email.toLowerCase()
//       );

//       if (!userRecord) {
//         setError("ไม่พบข้อมูลอีเมลนี้ในระบบ");
//         setIsLoading(false);
//         return;
//       }

//       // สร้างข้อมูลที่จะส่งไปยังผู้ใช้
//       const applicationId = userRecord.Application_id || "ไม่พบข้อมูล";
//       const phoneNumber = userRecord.PhoneNumber || "ไม่พบข้อมูล";

//       // จำลองการส่งอีเมล (ในความเป็นจริงจะต้องใช้ email service)
//       // ที่นี่เราจะแสดงข้อมูลให้ผู้ใช้เห็น
//       const emailContent = `
//         รหัสผู้สมัคร: ${applicationId}
//         รหัสตรวจสอบ: ${phoneNumber}
//       `;

//       // จำลองการส่งอีเมล
//       setTimeout(() => {
//         setMessage(`ข้อมูลได้ถูกส่งไปยัง ${email} แล้ว`);
//         setIsLoading(false);
        
//         // สำหรับการทดสอบ - แสดงข้อมูลใน console
//         console.log("ข้อมูลที่ส่งไปยังผู้ใช้:", {
//           email: email,
//           applicationId: applicationId,
//           phoneNumber: phoneNumber
//         });
//       }, 2000);

//     } catch (err) {
//       setError("เกิดข้อผิดพลาดในการส่งข้อมูล");
//       setIsLoading(false);
//     }
//   };

//   const handleClose = () => {
//     setEmail("");
//     setMessage("");
//     setError("");
//     onClose();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
//         <div className="flex justify-between items-center mb-4">
//           <h3 className="text-xl font-bold text-[#003366]">ลืมรหัสผ่าน</h3>
//           <button
//             onClick={handleClose}
//             className="text-gray-500 hover:text-gray-700"
//           >
//             ✕
//           </button>
//         </div>

//         <div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               อีเมล
//             </label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
//               placeholder="กรุณากรอกอีเมลของคุณ"
//               disabled={isLoading}
//               onKeyPress={(e) => {
//                 if (e.key === 'Enter') {
//                   handleSubmit(e);
//                 }
//               }}
//             />
//           </div>

//           {error && (
//             <p className="text-red-600 text-sm mb-4">{error}</p>
//           )}

//           {message && (
//             <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
//               {message}
//             </div>
//           )}

//           <div className="flex gap-3">
//             <button
//               onClick={handleSubmit}
//               disabled={isLoading}
//               className="flex-1 bg-[#003366] text-white py-2 px-4 rounded-md hover:bg-[#002244] disabled:opacity-50 disabled:cursor-not-allowed"
//             >
//               {isLoading ? "กำลังส่ง..." : "ส่งข้อมูล"}
//             </button>
//             <button
//               onClick={handleClose}
//               className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
//             >
//               ยกเลิก
//             </button>
//           </div>
//         </div>

//         <div className="mt-4 text-sm text-gray-600">
//           <p>ระบบจะส่งรหัสผู้สมัครและรหัสตรวจสอบไปยังอีเมลของคุณ</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Component หลักที่แสดง Demo
// const ForgotPasswordDemo = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   // จำลองข้อมูลจาก Excel
//   const mockExcelData = [
//     {
//       Application_id: "S001",
//       PhoneNumber: "0812345678",
//       Email: "user1@example.com",
//       Status: "อนุมัติ"
//     },
//     {
//       Application_id: "S002", 
//       PhoneNumber: "0823456789",
//       Email: "user2@example.com",
//       Status: "รอการพิจารณา"
//     },
//     {
//       Application_id: "S003",
//       PhoneNumber: "0834567890", 
//       Email: "user3@example.com",
//       Status: "ไม่อนุมัติ"
//     }
//   ];

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen">
//       <div className="max-w-2xl mx-auto">
//         <h1 className="text-3xl font-bold text-[#003366] mb-8 text-center">
//           ระบบตรวจสอบสถานะการพิจารณาโครงการ ODOS
//         </h1>

//         <div className="bg-white rounded-lg shadow-md p-6 mb-6">
//           <h2 className="text-xl font-semibold mb-4">เข้าสู่ระบบ</h2>
          
//           <div className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 รหัสผู้สมัคร
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
//                 placeholder="กรุณากรอกรหัสผู้สมัคร"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 รหัสตรวจสอบ
//               </label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
//                 placeholder="กรุณากรอกรหัสตรวจสอบ"
//               />
//             </div>

//             <button className="w-full bg-[#003366] text-white py-2 px-4 rounded-md hover:bg-[#002244]">
//               ตรวจสอบสถานะ
//             </button>

//             <div className="text-center">
//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="text-[#003366] hover:text-[#002244] underline text-sm"
//               >
//                 ลืมรหัสผ่าน?
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
//           <h3 className="font-semibold text-blue-800 mb-2">ข้อมูลทดสอบ:</h3>
//           <p className="text-sm text-blue-700">
//             ลองใส่อีเมล: user1@example.com, user2@example.com, หรือ user3@example.com
//           </p>
//         </div>
//       </div>

//       <ForgotPasswordModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         excelData={mockExcelData}
//       />
//     </div>
//   );
// };

// export default ForgotPasswordDemo;