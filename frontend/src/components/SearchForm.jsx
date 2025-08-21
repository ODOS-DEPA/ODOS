import { useState } from "react";

const SearchForm = ({ setResult, setError, setIsLoading, setHasSearched, isLoading }) => {
  const [searchId, setSearchId] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    
    const trimmedId = searchId.trim();
    const trimmedVerifyCode = verifyCode.trim();
    // validate searchId
    if (!/^S\d+$/.test(trimmedId)) {
      setError("กรุณากรอกรหัสผู้สมัครที่ถูกต้อง (ตัว S ตามด้วยตัวเลข)");
      setResult(null);
      setHasSearched(true);
      setIsLoading(false);
      return;
    }

    // validate verifyCode
    if (!/^.{11}$/.test(trimmedVerifyCode)) {
      setError("กรุณากรอกรหัสยืนยัน 11 หลักให้ถูกต้อง");
      setResult(null);
      setHasSearched(true);
      setIsLoading(false);
      return;
    }

    // start fetching
    setIsLoading(true);
    setError("");
    setHasSearched(true);

    try {
      const response = await fetch(
        `https://${import.meta.env.VITE_DOMAIN_NAME || "nodomain.space"}:8443/students/${trimmedId}`
      );

      if (!response.ok) throw new Error("ไม่พบข้อมูล หรือเกิดข้อผิดพลาด");

      const data = await response.json();
      //console.log(data);
      if (data.error) {
        setError(data.error);
        setResult(null);
      } else if (data.KeyToken === trimmedVerifyCode) {
        setResult(data);
        setError(""); // เคลียร์ error ถ้าถูกต้อง
      } else {
        setError("รหัสตรวจสอบไม่ถูกต้อง");
        setResult(null);
      }
    } catch (err) {
      setError("ข้อมูลที่ใส่ไม่ถูกต้อง โปรดตรวจสอบและลองใหม่อีกครั้ง");
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="mb-3 mt-6 space-y-2">
      {/* Search ID */}
      <label htmlFor="search_id" className="block text-gray-700 font-sukhumvit">
        รหัสผู้สมัคร:
        <input
          type="text"
          id="search_id"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 
                     font-sukhumvit"
          placeholder="กรุณากรอกรหัสการสมัครของท่าน"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)} //setSearchId(target.value)

        />
      </label>

      {/* Verify Code */}
      <label htmlFor="verify_code" className="block text-gray-700 font-sukhumvit">
        รหัสตรวจสอบ:
        <input
          type="text"
          id="verify_code"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm 
                     focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 
                     font-sukhumvit"
          placeholder="กรุณากรอกรหัสตรวจสอบ 10 หลัก"
          value={verifyCode}
          onChange={(e) => setVerifyCode(e.target.value)}
        />
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isLoading}  // ✅ ใช้ boolean จาก parent
        className="w-16 md:w-[100px] px-2 py-2 bg-[#0e131a] text-white font-sukhumvit 
                   rounded-lg shadow-sm hover:bg-[#444444] 
                   focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
      >
        {isLoading ? "กำลังโหลด..." : "ค้นหา"}
      </button>
    </form>
  );
};

export default SearchForm;
