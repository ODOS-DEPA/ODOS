import React, { useState , useEffect } from "react";
import GoogleDriveLinkButton from "./GoogleDriveConfidentialDownload";
import { getFileByName } from "./GoogleDriveConfidentialDownload";
const ResultTable = ({ result }) => {
  const [showEnglishCode, setShowEnglishCode] = useState(false);
  const [showDigitalCode, setShowDigitalCode] = useState(false);
  const [fileTarget, setFileTarget] = useState({});
  const [boolFileTarget,setBoolFiletarget] = useState(false)
//TODO: API CHECK CREDENTIAL
  useEffect(() => {
    const fetchData = async () => {
      try {
        const file = await getFileByName(`${applicantId}.pdf`);
        console.log("Fetched file:", file);
        setFileTarget(file);

        // ✅ Use the fetched file directly
        if (file && Object.keys(file).length > 0) {
          setBoolFiletarget(true);
        } else {
          setBoolFiletarget(false);
        }

      } catch (err) {
        console.error('Fetch error:', err);
      }
    };

    fetchData();
  }, []);



  if (!result) return null;

  // ฟังก์ชันรีเฟรสหน้า
  const handleRefresh = () => {
    window.location.reload();
  };

  // ฟังก์ชันแปลงสถานะเป็นภาษาไทย
  const getStatusText = (status) => {
    switch (status) {
      case "approved":
      case "ผ่านการคัดเลือกครั้งที่ 1":
        return "ผ่านการคัดเลือกครั้งที่ 1";
      case "ผ่านการคัดเลือกครั้งที่ 1 แบบมีเงื่อนไข":
        return "ผ่านการคัดเลือกครั้งที่ 1 แบบมีเงื่อนไข";
      case "ผ่านการคัดเลือกครั้งที่ 2":
        return "ผ่านการคัดเลือกรอบที่ 2";
      case "ผ่านการคัดเลือกครั้งที่ 3":
        return "ผ่านการคัดเลือกครั้งที่ 3";
      case "ผ่านการคัดเลือกครั้งที่ 3 (รายชื่อสำรอง)":
        return "ผ่านการคัดเลือกครั้งที่ 3 (รายชื่อสำรอง)";
      case "ไม่ผ่านการคัดเลือกครั้งที่ 3":
        return "ไม่ผ่านการคัดเลือกครั้งที่ 3";
      case "สำรอง":
        return "สำรอง";
      case "rejected":
      case "ไม่ผ่าน":
      case "fail":
        return "ไม่ผ่าน";
      case "pending":
      case "รอการพิจารณา":
        return "รอการพิจารณา";
      case "ผ่านสอบสัมภาษณ์":
        return "ผ่านสอบสัมภาษณ์";
      case "ไม่ผ่านสอบสัมภาษณ์":
        return "ไม่ผ่านสอบสัมภาษณ์";
      default:
        return status || "รอการพิจารณา";
    }
  };

  // ฟังก์ชันสร้าง Link component - แก้ไขเอาเส้นใต้ออก
  const LinkButton = ({ href, children, className = "" }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-blue-600 hover:text-blue-800 text-sm no-underline hover:no-underline ${className}`}
      style={{ textDecoration: "none" }}
    >
      {children}
    </a>
  );

  // ฟังก์ชันดึงข้อมูลจากหลายฟิลด์ที่เป็นไปได้
  const getFieldValue = (obj, ...fieldNames) => {
    for (const fieldName of fieldNames) {
      if (
        obj[fieldName] !== undefined &&
        obj[fieldName] !== null &&
        obj[fieldName] !== ""
      ) {
        return obj[fieldName];
      }
    }
    return "";
  };

  // ดึงข้อมูลจากฟิลด์ต่าง ๆ
  const applicantId = getFieldValue(
    result,
    "Application_id",
    "ApplicantId",
    "id",
    "searchId"
  );
  const applicantId2 = result["Application_id2"] || "";
  const firstName = getFieldValue(
    result,
    "ชื่อ (ภาษาไทย)",
    "FirstName",
    "firstName",
    "name"
  );
  const lastName = getFieldValue(
    result,
    "นามสกุล (ภาษาไทย)",
    "LastName",
    "lastName",
    "surname"
  );

  const status = getFieldValue(result, "Status", "status");
  const vdoLink = getFieldValue(
    result,
    "แนบ Link Youtube (เปิดแบบ unlisted)",
    "VDOLink",
    "vdoLink"
  );
  const docLink = getFieldValue(
    result,
    "เอกสารสำคัญ Google Drive Link (shared)",
    "DocLink",
    "docLink"
  );
  const email = getFieldValue(result, "อีเมล", "อีเมล1", "email");
  const phone = getFieldValue(result, "เบอร์โทรศัพท์", "phone");
  const englishPass = getFieldValue(result, "englishPass", "EnglishPass");
  const digitalPass = getFieldValue(result, "digitalPass", "DigitalPass");

  // ตรวจสอบว่าสถานะเป็น "ผ่าน" หรือไม่
  // const isApproved = getStatusText(status) === "ผ่านการคัดเลือกครั้งที่ 1" ;
  // const isApproved = getStatusText(status) === "pass";
  const isApproved =
    getStatusText(status) === "ผ่านการคัดเลือกครั้งที่ 1" ||
    getStatusText(status) === "ผ่านการคัดเลือกครั้งที่ 1 แบบมีเงื่อนไข" ||
    getStatusText(status) === "ผ่านการคัดเลือกรอบที่ 2" ||
    getStatusText(status) === "ผ่านการคัดเลือกครั้งที่ 3";
  getStatusText(status) === "สำรอง";

  // ฟังก์ชันสำหรับแสดง/ซ่อนรหัสเข้าสอบ
  const toggleEnglishCode = () => {
    setShowEnglishCode(!showEnglishCode);
  };

  const toggleDigitalCode = () => {
    setShowDigitalCode(!showDigitalCode);
  };

  // ฟังก์ชันซ่อนรหัสเป็นจุด
  const maskCode = (code) => {
    return code ? "•".repeat(code.length) : "••••";
  };

  // เพิ่มตัวแปรตรวจสอบว่าสอบผ่านแล้วหรือไม่
  const isTestCompleted = getFieldValue(
    result,
    "testCompleted",
    "TestCompleted",
    "completed"
  );
  const resultCode = getFieldValue(result, "resultCode", "ResultCode");

  const [showTable3Code, setShowTable3Code] = useState(false);

  const toggleTable3Code = () => {
    setShowTable3Code(!showTable3Code);
  };

  const [examPeriodActive, setExamPeriodActive] = useState(true); // false = ปิดช่วงสอบ

  const DisabledExamOverlay = ({ message }) => (
    <div className="absolute inset-0 bg-gray-100 bg-opacity-90 flex items-center justify-center rounded">
      <div className="text-center p-4">
        <div className="text-red-600 font-semibold text-sm mb-2">
          หมดช่วงเวลาการสอบ
        </div>
        <div className="text-gray-700 text-xs">
          {message || "การสอบได้สิ้นสุดลงแล้ว"}
        </div>
      </div>
    </div>
  );

  // เพิ่มตัวแปรสถานะ
  const statusText = getStatusText(status);

  // แก้ไข condition
  const showEnglishAndDigitalTable = true;
  const showRound2Table = true;
  const showRound3Table = true;

  // เงื่อนไขแสดงข้อความแจ้งเตือน Refresh
  const showTable3Notice =
    getStatusText(status) === "ผ่านการคัดเลือกรอบที่ 2" ||
    status === "ผ่านการคัดเลือกครั้งที่ 2" ||
    getStatusText(status) === "ไม่ผ่าน" ||
    status === "ไม่ผ่านการคัดเลือกครั้งที่ 2";

  return (
    <div className="mt-4 sm:mt-8 space-y-4 sm:space-y-8 px-2 sm:px-0">
      {/* ปุ่มรีเฟรส */}
      <p className="text-red-600 text-sm sm:text-base font-semibold mt-4 sm:mt-6 pl-[60%]">
        ⭐ เพื่อแสดงสถานะข้อมูลการสอบอย่างถูกต้อง โปรดกด Refresh หรือ กด Ctrl +
        F5 ทุกครั้ง
      </p>
      <div className="flex justify-end mb-4">
        <button
          onClick={handleRefresh}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
          title="รีเฟรสหน้า"
        >
          <svg
            className="w-3 h-3 sm:w-4 sm:h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span className="hidden sm:inline">รีเฟรส</span>
        </button>
      </div>

      {/* ตารางรายงานตัวและทำสัญญา (สำหรับผู้ผ่านสอบสัมภาษณ์) */}
      {getStatusText(status) === "ผ่านสอบสัมภาษณ์" && (
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1a365d] mb-3 sm:mb-4 font-sukhumvit px-2 sm:px-0">
            รายงานตัวและทำสัญญา
          </h3>
          <div className="overflow-x-auto shadow-lg rounded-lg -mx-2 sm:mx-0 mb-6">
            <div className="min-w-[800px] sm:min-w-0">
              <table className="w-full bg-white border border-gray-200">
                <thead className="bg-orange-400 text-white">
                  <tr>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300">
                      รหัสผู้สมัคร
                    </th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300">
                      ชื่อ
                    </th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300">
                      นามสกุล
                    </th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300">
                      Link
                    </th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300">
                      Upload
                    </th>
                    <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium">
                      ผลการพิจารณา
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-orange-50">
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 text-center font-medium border-r border-gray-300">
                      {applicantId}
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 text-center border-r border-gray-300">
                      {firstName}
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 text-center border-r border-gray-300">
                      {lastName}
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-center border-r border-gray-300">
                      <div className="flex flex-col items-center space-y-1">
                        {/* <LinkButton href="https://www.google.com">Link</LinkButton> */}
                        {
                          boolFileTarget
                          ? <GoogleDriveLinkButton targetFileName={`${applicantId}.pdf`} />
                          : <div>ยังอยู่ระหว่างการตรวจสอบเอกสาร</div>
                          
                        }
                        {
                          console.log("tt",boolFileTarget)
                        }
                      </div>
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm border-r border-gray-300">
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded text-xs">
                        Upload
                      </button>
                    </td>
                    <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">
                      รอการพิจารณา
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ตารางสำหรับการสมัครในบัตร */}
      <div>
        <h3 className="text-lg sm:text-xl font-semibold text-[#1a365d] mb-3 sm:mb-4 font-sukhumvit px-2 sm:px-0">
          1.ข้อมูลการสมัคร (24 มิ.ย. - 16 มิ.ย. 68)
        </h3>
        <div className="overflow-x-auto shadow-lg rounded-lg -mx-2 sm:mx-0">
          <div className="min-w-[800px] sm:min-w-0">
            <table className="w-full bg-white border border-gray-200">
              <thead className="bg-[#ffff00] text-black">
                <tr>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300">
                    รหัสผู้สมัคร
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300">
                    ชื่อ
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300">
                    นามสกุล
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300">
                    สถานะ
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300">
                    คลิปวีดีโอ
                  </th>
                  <th className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium">
                    เอกสาร
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 text-center font-medium border-r border-gray-300">
                    {applicantId}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 text-center border-r border-gray-300">
                    {firstName}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-900 text-center border-r border-gray-300">
                    {lastName}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-center border-r border-gray-300">
                    <div className="flex justify-center px-1 sm:px-2">
                      <span
                        className={`font-medium px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm inline-block text-center w-full max-w-full sm:max-w-none sm:w-auto leading-tight ${
                          getStatusText(status) === "ผ่านการคัดเลือกครั้งที่ 1"
                            ? "bg-green-100 text-green-800"
                            : getStatusText(status) ===
                              "ผ่านการคัดเลือกครั้งที่ 1 แบบมีเงื่อนไข"
                            ? "bg-orange-100 text-orange-800"
                            : getStatusText(status) ===
                              "ผ่านการคัดเลือกรอบที่ 2"
                            ? "bg-green-100 text-green-800"
                            : getStatusText(status) ===
                              "ผ่านการคัดเลือกครั้งที่ 3"
                            ? "bg-green-100 text-green-800"
                            : getStatusText(status) === "ผ่านสอบสัมภาษณ์"
                            ? "bg-green-500 text-white"
                            : getStatusText(status) === "ไม่ผ่านสอบสัมภาษณ์"
                            ? "bg-red-500 text-white"
                            : getStatusText(status) === "สำรอง" // เพิ่มเงื่อนไขสำรอง
                            ? "bg-yellow-100 text-yellow-800"
                            : getStatusText(status) === "ไม่ผ่าน" ||
                              status === "ไม่ผ่านการคัดเลือกครั้งที่ 1" ||
                              status === "ไม่ผ่านการคัดเลือกครั้งที่ 2" ||
                              status === "ไม่ผ่านการคัดเลือกครั้งที่ 3"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        <span className="block sm:hidden break-words hyphens-auto">
                          {getStatusText(status)}
                        </span>
                        <span className="hidden sm:block whitespace-nowrap">
                          {getStatusText(status)}
                        </span>
                      </span>
                    </div>

                    {/* 🔽 เพิ่มลิงก์กรอกข้อมูลเฉพาะเมื่อสถานะมีเงื่อนไข */}
                    {getStatusText(status) ===
                      "ผ่านการคัดเลือกครั้งที่ 1 แบบมีเงื่อนไข" && (
                      <div className="mt-1">
                        <a
                          href="https://forms.office.com/r/MhsNBnwZ4S?origin=lprLink"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline text-xs font-normal"
                        >
                          <span className="block sm:hidden">กรอกข้อมูล</span>
                          <span className="hidden sm:block">
                            กรุณากรอกข้อมูลอีกครั้ง
                          </span>
                        </a>
                        <div className="text-xs text-red-500 mt-1">
                          (ภายใน 4 ก.ค. 2568)
                        </div>
                      </div>
                    )}

                    {/* 🔽 เพิ่มลิงก์สำหรับผู้ที่ผ่านการคัดเลือกครั้งที่ 3 */}
                    {getStatusText(status) === "ผ่านการคัดเลือกครั้งที่ 3" && (
                      <div className="mt-2 p-3 border-2 border-red-200 rounded-lg">
                        <a
                          href="https://forms.office.com/r/NZbkvREmVk?origin=lprLink"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-center hover:scale-105 transition-transform"
                        >
                          <div className="text-red-600 font-bold text-sm md:text-base mb-1">
                            คลิกที่นี่
                          </div>
                          <div className="text-blue-600 text-xs md:text-sm">
                            <div>เพื่อยืนยันตัวเข้าร่วมกิจกรรม</div>
                            <div>จับสลากเลือกหลักสูตรและสอบสัมภาษณ์</div>
                          </div>
                        </a>
                        {/* เพิ่มบรรทัดใหม่ใต้ "คลิกที่นี่" */}
                        {/* <div className="mt-2">
                          <a
                            href="https://forms.office.com/r/qSP7HsyUcH?origin=lprLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center text-blue-600 underline text-xs"
                          >
                            กรอกข้อมูลสำหรับรายชื่อสำรอง
                          </a>
                        </div> */}
                      </div>
                    )}

                    {getStatusText(status) ===
                      "ผ่านการคัดเลือกครั้งที่ 3 (รายชื่อสำรอง)" && (
                      <div className="mt-2 p-3 border-2 border-red-200 rounded-lg">
                        <a
                          href="https://forms.office.com/r/qSP7HsyUcH?origin=lprLink"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-center hover:scale-105 transition-transform"
                        >
                          <div className="text-red-600 font-bold text-sm md:text-base mb-1">
                            คลิกที่นี่
                          </div>
                          <div className="text-blue-600 text-xs md:text-sm">
                            <div>เพื่อยืนยันตัวเข้าร่วมกิจกรรม</div>
                            <div>จับสลากเลือกหลักสูตรและสอบสัมภาษณ์</div>
                          </div>
                        </a>
                      </div>
                    )}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-center border-r border-gray-300">
                    {vdoLink && vdoLink !== "#" ? (
                      <LinkButton href={vdoLink}>
                        <span className="block sm:hidden">วีดีโอ</span>
                        <span className="hidden sm:block">ดูวีดีโอ</span>
                      </LinkButton>
                    ) : (
                      <span className="text-gray-400 text-xs">ไม่มีลิงก์</span>
                    )}
                  </td>
                  <td className="px-2 sm:px-4 py-2 sm:py-3 text-center text-xs sm:text-sm">
                    {docLink && docLink !== "#" ? (
                      <LinkButton href={docLink}>
                        <span className="block sm:hidden">เอกสาร</span>
                        <span className="hidden sm:block">ดูเอกสาร</span>
                      </LinkButton>
                    ) : (
                      <span className="text-gray-400 text-xs">ไม่มีลิงก์</span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ตารางสำหรับการสอบภาษาอังกฤษ - แสดงเฉพาะเมื่อสถานะเป็น "ผ่าน" */}
      {showEnglishAndDigitalTable && (
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1a365d] mb-3 sm:mb-4 font-sukhumvit px-2 sm:px-0">
            ทดสอบครั้งที่ 1
          </h3>
          <h3 className="text-lg sm:text-xl font-semibold text-[#1a365d] mb-3 sm:mb-4 font-sukhumvit px-2 sm:px-0">
            2.ข้อมูลสำหรับการสอบทักษะภาษาอังกฤษ (28 มิ.ย. - 6 ก.ค. 68)
          </h3>

          {/* ตารางภาษาอังกฤษ */}
          <div className="mb-4 sm:mb-6">
            <div className="overflow-x-auto shadow-lg rounded-lg -mx-2 sm:mx-0">
              <div className="min-w-[900px] sm:min-w-0">
                <table className="w-full bg-white border border-gray-200">
                  <thead className="bg-[#ffba00] text-black">
                    <tr>
                      <th className="px-2 sm:px-3 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300 w-[12%]">
                        รหัสผู้สมัคร
                      </th>
                      <th className="px-2 sm:px-3 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300 w-[18%]">
                        รหัสเข้าสอบ
                      </th>
                      <th className="px-2 sm:px-3 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300 w-[15%]">
                        คู่มือการสอบ
                      </th>
                      <th className="px-3 py-3 text-center text-sm font-medium border-r border-gray-300 w-[15%]">
                        ระบบทดลองสอบ
                      </th>
                      <th className="px-3 py-3 text-center text-sm font-bold w-[25%]">
                        ดูคะแนน
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm text-center text-gray-900 font-medium border-r border-gray-300">
                        {applicantId}
                      </td>

                      {/* ✅ รหัสเข้าสอบ */}
                      <td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm text-center align-middle border-r border-gray-300 relative">
                        {/* {!examPeriodActive && <DisabledExamOverlay />} */}
                        <div className="flex items-center justify-center text-center">
                          <span className="text-gray-900 font-medium bg-blue-50 px-1 sm:px-2 py-1 rounded text-xs">
                            {examPeriodActive
                              ? showEnglishCode
                                ? englishPass || `english66`
                                : maskCode(englishPass || `english66`)
                              : "***"}
                          </span>
                          {examPeriodActive && (
                            <button
                              onClick={toggleEnglishCode}
                              className="ml-1 sm:ml-2 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200 text-sm"
                              title={showEnglishCode ? "ซ่อนรหัส" : "แสดงรหัส"}
                            >
                              {showEnglishCode ? "🔒" : "👁"}
                            </button>
                          )}
                        </div>
                      </td>

                      {/* ✅ คู่มือการสอบ */}
                      <td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm border-r border-gray-300 relative">
                        {/* {!examPeriodActive && <DisabledExamOverlay />} */}
                        <div className="text-center space-y-1">
                          <div>
                            <a
                              href="https://drive.google.com/file/d/194KhLreYV1RwML2W1JO4pQVv2i6fXmLe/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              <span className="block sm:hidden">PDF</span>
                              <span className="hidden sm:block">
                                เอกสาร (PDF)
                              </span>
                            </a>
                          </div>
                          <div>
                            <a
                              href="https://drive.google.com/file/d/1OtWEI0Eakv3Ts9kwqfJKv9pn-6HQkbMq/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              <span className="block sm:hidden">VDO</span>
                              <span className="hidden sm:block">
                                คลิป (VDO)
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>

                      {/* ✅ ระบบทดลองสอบ */}
                      <td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm border-r border-gray-300 relative">
                        {/* {!examPeriodActive && <DisabledExamOverlay />} */}
                        <div className="text-center">
                          {/*<LinkButton href="https://odos.globish.co.th/guest">*/}
                          {/*    <span className="block sm:hidden">ทดลอง</span>*/}
                          {/*    <span className="hidden sm:block">*/}
                          {/*        Click ทดลองสอบ*/}
                          {/*    </span>*/}
                          {/*</LinkButton>*/}
                        </div>
                      </td>

                      {/* ✅ ระบบสอบจริง */}
                      <td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm relative">
                        {/* {!examPeriodActive && (
                          <DisabledExamOverlay message="ไม่สามารถเข้าสอบได้ในขณะนี้" />
                        )} */}
                        <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2">
                          <div className="text-left space-y-1 w-full max-w-[200px] sm:max-w-[250px]">
                            <div className="flex justify-center mb-1 sm:mb-2">
                              <a
                                href="https://odos.globish.co.th/signin"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#00ac47] text-white px-3 sm:px-6 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium"
                              >
                                <span className="block sm:hidden">สอบ</span>
                                <span className="hidden sm:block">Click</span>
                              </a>
                            </div>
                            <div className="text-xs text-gray-500 text-center sm:text-left">
                              <span className="block sm:hidden">
                                เข้าสอบครั้งเดียว
                              </span>
                              <span className="hidden sm:block"></span>
                            </div>
                            <div className="text-xs text-blue-600 text-center sm:text-left">
                              <span className="block sm:hidden">ติดต่อ:</span>
                              <span className="hidden sm:block">
                                ช่องทางติดต่อสอบถาม/เมื่อมีปัญหาการเข้าสอบ:
                              </span>
                            </div>
                            <a
                              href="https://line.me/R/ti/p/@279cgcdf"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 no-underline hover:underline block text-center sm:text-left"
                            >
                              Line ID: @globish-support
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ตารางสำหรับการสอบดิจิทัล */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#1a365d] mb-3 sm:mb-4 font-sukhumvit px-2 sm:px-0">
              3.ข้อมูลสำหรับการสอบทักษะดิจิทัลระดับพื้นฐาน (28 มิ.ย. - 6 ก.ค.
              68)
            </h3>
            <div className="overflow-x-auto shadow-lg rounded-lg -mx-2 sm:mx-0">
              <div className="min-w-[900px] sm:min-w-0">
                <table className="w-full bg-white border border-gray-200">
                  <thead className="bg-[#4285f4] text-white">
                    <tr>
                      <th className="px-2 sm:px-3 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300 w-[12%]">
                        รหัสผู้สมัคร
                      </th>
                      <th className="px-2 sm:px-3 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300 w-[18%]">
                        รหัสเข้าสอบ
                      </th>
                      <th className="px-2 sm:px-3 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300 w-[15%]">
                        คู่มือการสอบ
                      </th>
                      <th className="px-3 py-3 text-center text-sm font-medium border-r border-gray-300 w-[15%]">
                        ระบบทดลองสอบ
                      </th>
                      <th className="px-3 py-3 text-center text-sm font-bold w-[25%]">
                        ดูคะแนน
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      {/* ✅ รหัสผู้สมัคร */}
                      <td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm text-center text-gray-900 font-medium border-r border-gray-300">
                        {applicantId2}
                      </td>

                      {/* ✅ รหัสเข้าสอบ (ดิจิทัล) */}
                      <td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm text-center align-middle border-r border-gray-300 relative">
                        {/* {!examPeriodActive && <DisabledExamOverlay />} */}
                        <div className="flex items-center justify-center text-center">
                          <span className="text-gray-900 font-medium bg-green-50 px-1 sm:px-2 py-1 rounded text-xs">
                            {examPeriodActive
                              ? showDigitalCode
                                ? digitalPass || `digital55`
                                : maskCode(digitalPass || `digital55`)
                              : "***"}
                          </span>
                          {examPeriodActive && (
                            <button
                              onClick={toggleDigitalCode}
                              className="ml-1 sm:ml-2 text-gray-500 hover:text-gray-700 cursor-pointer transition-colors duration-200 text-sm"
                              title={showDigitalCode ? "ซ่อนรหัส" : "แสดงรหัส"}
                            >
                              {showDigitalCode ? "🔒" : "👁"}
                            </button>
                          )}
                        </div>
                      </td>

                      {/* ✅ คู่มือการสอบ (ดิจิทัล) */}
                      <td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm border-r border-gray-300 relative">
                        {/* {!examPeriodActive && <DisabledExamOverlay />} */}
                        <div className="text-center space-y-1">
                          <div>
                            <a
                              href="https://drive.google.com/file/d/1ovP6uONtncblMwds4UiYZ5_mq6hdC4Gg/view?usp=sharing"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              <span className="block sm:hidden">PDF</span>
                              <span className="hidden sm:block">
                                เอกสาร (PDF)
                              </span>
                            </a>
                          </div>
                          <div>
                            <a
                              href="https://youtu.be/podsZ6BpUTw?si=_HQQV0kaVDb01-bc"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              <span className="block sm:hidden">VDO</span>
                              <span className="hidden sm:block">
                                คลิป (VDO)
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>

                      {/* ✅ ระบบทดลองสอบ (ดิจิทัล) */}
                      <td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm border-r border-gray-300 relative">
                        {/* {!examPeriodActive && <DisabledExamOverlay />} */}
                        <div className="text-center">
                          {/*<LinkButton href="https://bit.ly/ODOSDigitalSampleTest">*/}
                          {/*    <span className="block sm:hidden">ทดลอง</span>*/}
                          {/*    <span className="hidden sm:block">*/}
                          {/*        Click ทดลองสอบ*/}
                          {/*    </span>*/}
                          {/*</LinkButton>*/}
                        </div>
                      </td>

                      {/* ✅ ระบบสอบจริง (ดิจิทัล) */}
                      <td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm relative">
                        {/* {!examPeriodActive && (
                          <DisabledExamOverlay message="ไม่สามารถเข้าสอบได้ในขณะนี้" />
                        )} */}
                        <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2">
                          <div className="text-left space-y-1 w-full max-w-[200px] sm:max-w-[250px]">
                            <div className="flex justify-center mb-1 sm:mb-2">
                              <a
                                //https://bit.ly/ODOSDigitalTest
                                //https://smart.icdl-thailand.com/login/index.php
                                //https://smart.icdl-thailand.com/
                                //https://smart.icdl-thailand.com/course/view.php?id=11
                                href="https://smart.icdl-thailand.com/course/view.php?id=11"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#00ac47] text-white px-3 sm:px-6 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium"
                              >
                                <span className="block sm:hidden">สอบ</span>
                                <span className="hidden sm:block">Click</span>
                              </a>
                            </div>
                            <div className="text-xs text-gray-500 text-center sm:text-left">
                              <span className="block sm:hidden">
                                เข้าสอบครั้งเดียว
                              </span>
                              <span className="hidden sm:block"></span>
                            </div>
                            <div className="text-xs text-blue-600 text-center sm:text-left">
                              <span className="block sm:hidden">ติดต่อ:</span>
                              <span className="hidden sm:block">
                                ช่องทางติดต่อสอบถาม/เมื่อมีปัญหาการเข้าสอบ:
                              </span>
                            </div>
                            <a
                              href="https://lin.ee/JK6lFMu"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-600 no-underline hover:underline block text-center sm:text-left"
                            >
                              Line ID: @icdlbyadeptus
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ตารางสำหรับประกาศคะแนนสอบดิจิทัล */}
          {showRound2Table && (
            <div>
              <br />
              <h3 className="text-lg sm:text-xl font-semibold text-[#1a365d] mb-3 sm:mb-4 font-sukhumvit px-2 sm:px-0">
                ทดสอบครั้งที่ 2
              </h3>

              <h3 className="text-lg sm:text-xl font-semibold text-[#1a365d] mb-3 sm:mb-4 font-sukhumvit px-2 sm:px-0 mt-6 sm:mt-8">
                4.ข้อมูลสำหรับทดสอบทักษะดิจิทัลระดับกลาง (10 ก.ค. - 16 ก.ค. 68)
              </h3>
              <div className="overflow-x-auto shadow-lg rounded-lg -mx-2 sm:mx-0">
                <div className="min-w-[900px] sm:min-w-0">
                  <table className="w-full bg-white border border-gray-200">
                    <thead className="bg-[#9966CC] text-white">
                      <tr>
                        <th className="px-2 sm:px-3 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300 w-[12%]">
                          รหัสผู้สมัคร
                        </th>
                        <th className="px-2 sm:px-3 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300 w-[18%]">
                          รหัสเข้าสอบ
                        </th>
                        <th className="px-2 sm:px-3 py-2 sm:py-3 text-center text-xs sm:text-sm font-medium border-r border-gray-300 w-[15%]">
                          คู่มือการสอบ
                        </th>
                        {/*<th className="px-3 py-3 text-center text-sm font-medium border-r border-gray-300 w-[15%]">*/}
                        {/*    ระบบทดลองสอบ*/}
                        {/*</th>*/}
                        <th className="px-3 py-3 text-center text-sm font-bolds w-[25%]">
                          ดูคะแนน
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm text-center text-gray-900 font-medium border-r border-gray-300">
                          {applicantId2}
                        </td>
                        <td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm text-center align-middle border-r border-gray-300">
                          <div className="flex items-center justify-center text-center">
                            <span className="text-gray-900 font-medium bg-green-50 px-1 sm:px-2 py-1 rounded text-xs">
                              {showTable3Code
                                ? digitalPass || `digital55`
                                : maskCode(digitalPass || `digital55`)}
                            </span>
                            <button
                              onClick={toggleTable3Code}
                              title={showTable3Code ? "ซ่อนรหัส" : "แสดงรหัส"}
                            >
                              {showTable3Code ? "🔒" : "👁"}
                            </button>
                          </div>
                        </td>

                        <td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm border-r border-gray-300">
                          <div className="text-center space-y-1">
                            <div>
                              <a
                                //https://drive.google.com/file/d/1ovP6uONtncblMwds4UiYZ5_mq6hdC4Gg/view?usp=sharing
                                href="https://drive.google.com/file/d/1GatGfXQMGPcHdkB8cgOSz1_toCTCEw48/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                <span className="block sm:hidden">PDF</span>
                                <span className="hidden sm:block">
                                  เอกสาร (PDF)
                                </span>
                              </a>
                            </div>
                            <div>
                              <a
                                //https://youtu.be/podsZ6BpUTw?si=_HQQV0kaVDb01-bc
                                href="https://bit.ly/VDOIntroODOSDigital"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                              >
                                <span className="block sm:hidden">VDO</span>
                                <span className="hidden sm:block">
                                  คลิป (VDO)
                                </span>
                              </a>
                            </div>
                          </div>
                        </td>
                        {/*<td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm border-r border-gray-300">*/}
                        {/*    <div className="text-center text-red-600 font-semibold">*/}
                        {/*        <div>สามารถเริ่มทดลองสอบได้</div>*/}
                        {/*        <div>วันที่ 10 กรกฎาคม 2568</div>*/}
                        {/*    </div>*/}
                        {/*</td>*/}

                        {/*<td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm">*/}
                        {/*    <div className="text-center text-red-600 font-semibold">*/}
                        {/*        <div>สามารถเริ่มสอบได้</div>*/}
                        {/*        <div>วันที่ 10 กรกฎาคม 2568</div>*/}
                        {/*    </div>*/}

                        {/*<a*/}
                        {/*    //https://bit.ly/ODOSDigitalTest*/}
                        {/*    href="https://smart.icdl-thailand.com/"*/}
                        {/*    target="_blank"*/}
                        {/*    rel="noopener noreferrer"*/}
                        {/*    className="bg-[#00ac47] text-white px-3 sm:px-6 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium"*/}
                        {/*>*/}
                        {/*    <span className="block sm:hidden">สอบ</span>*/}
                        {/*    <span className="hidden sm:block">*/}
                        {/*        Click*/}
                        {/*    </span>*/}
                        {/*</a>*/}

                        {/*    <a*/}
                        {/*        href="https://lin.ee/JK6lFMu"*/}
                        {/*        target="_blank"*/}
                        {/*        rel="noopener noreferrer"*/}
                        {/*        className="text-xs text-blue-600 no-underline hover:underline block text-center sm:text-left"*/}
                        {/*    >*/}
                        {/*        Line ID: @icdlbyadeptus*/}
                        {/*    </a>*/}
                        {/*</td>*/}

                        <td className="px-2 sm:px-3 py-2 sm:py-3 text-xs sm:text-sm relative">
                          {/* {!examPeriodActive && (
                          <DisabledExamOverlay message="ไม่สามารถเข้าสอบได้ในขณะนี้" />
                        )} */}
                          <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2">
                            <div className="text-left space-y-1 w-full max-w-[200px] sm:max-w-[250px]">
                              <div className="flex justify-center mb-1 sm:mb-2">
                                {/*เปิดระบบให้สอบ 10 ก.ค. 2568*/}

                                <a
                                  //https://bit.ly/ODOSDigitalTest
                                  href="https://smart.icdl-thailand.com/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-[#00ac47] text-white px-3 sm:px-6 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium"
                                >
                                  <span className="block sm:hidden">สอบ</span>

                                  <span className="hidden sm:block">Click</span>
                                </a>
                              </div>
                              <div className="text-xs text-gray-500 text-center sm:text-left">
                                <span className="block sm:hidden">
                                  เข้าสอบครั้งเดียว
                                </span>
                                <span className="hidden sm:block"></span>
                              </div>
                              <div className="text-xs text-blue-600 text-center sm:text-left">
                                <span className="block sm:hidden">ติดต่อ:</span>
                                <span className="hidden sm:block">
                                  ช่องทางติดต่อสอบถาม/เมื่อมีปัญหาการเข้าสอบ:
                                </span>
                              </div>
                              <a
                                href="https://lin.ee/JK6lFMu"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-blue-600 no-underline hover:underline block text-center sm:text-left"
                              >
                                Line ID: @icdlbyadeptus
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="h-64 sm:h-80" />
    </div>
  );
};

export default ResultTable;
