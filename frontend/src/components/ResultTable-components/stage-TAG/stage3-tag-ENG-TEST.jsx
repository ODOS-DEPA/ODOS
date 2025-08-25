import React from "react";
import Axios from "axios"

//รอบทดสอบภาษาอังกฤษ

async function StudentEnglishScore(studentID) {
  try {
    const domain = import.meta.env.VITE_DOMAIN_NAME || "nodomain.space";
    const response = await Axios.get(`https://${domain}:8443/EnglishScore/${studentID}`);
    const StudentsInfo = response.data;  // สมมติข้อมูลอยู่ที่ .data
    return StudentsInfo;
  } catch (error) {
    console.error("Error fetching student info:", error);
    return null; // หรือจะ throw error ขึ้นไปก็ได้
  }
}

export default function Stage3Tag_ENG_TEST({ StudentID, headers, colorTag }) {
  const cellClass =
    "px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-center border-r border-gray-300 text-gray-900";

  // Mock function, replace with actual call
  const EnglishScoreData = StudentEnglishScore(StudentID);

  // Destructure data
  const { tokenENG, Score, status } = EnglishScoreData;

  return (
    <>
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-[#1a365d] mb-3 sm:mb-4 font-sukhumvit px-2 sm:px-0">
          ข้อมูลสำหรับการสอบทักษะภาษาอังกฤษ
        </h3>
        <div className="overflow-x-auto shadow-lg rounded-lg -mx-2 sm:mx-0 mb-6">
          <div className="min-w-[800px] sm:min-w-0">
            <table className="w-full bg-white border border-gray-200">
              <thead className={colorTag}>
                <tr>
                  {headers.map((title, i) => (
                    <th key={i} className={`${cellClass} font-medium`}>
                      {title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-100">
                  {/* รหัสผู้สมัคร */}
                  <td className={cellClass}>{StudentID}</td>

                  {/* รหัสเข้าสอบ (แสดงเป็น ●●●●) */}
                  <td className={cellClass}>
                    {"●".repeat(tokenENG?.length || 6)}
                  </td>

                  {/* คู่มือการสอบ */}
                  <td className={cellClass}>
                    <div className="space-y-1">
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        เอกสาร (PDF)
                      </a>
                      <br />
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        คลิป (VDO)
                      </a>
                    </div>
                  </td>

                  {/* ปุ่มเข้าระบบ */}
                  <td className={cellClass}>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs">
                      Click
                    </button>
                  </td>

                  {/* คะแนน */}
                  <td className={cellClass}>{Score ?? "–"}</td>

                  {/* สถานะ */}
                  <td className={cellClass}>{status ?? "–"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

