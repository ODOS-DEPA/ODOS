import React from "react";
import { useState } from "react";
import SearchForm from "../components/SearchForm";
import ProgressSteps from "../components/ProgressSteps";
import ResultTable from "../components/ResultTable";
import NavbarUnified from "../components/UnifiedNavbar";


const Checkstatus = () => {
  const [language, setLanguage] = useState("EN");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);


  return (
    <div className="Sukhumvit">
      <NavbarUnified language={language} setLanguage={setLanguage} context="main" />
      <div className="container mx-auto py-8 px-4 text-[#003366] mb-4 font-sukhumvit">
        <h2 className="font-serif text-2xl font-sukhumvit">
          ระบบตรวจสอบสถานะการพิจารณาโครงการ ODOS
        </h2>

        <SearchForm
          setResult={setResult}
          setError={setError}
          setIsLoading={setIsLoading}
          setHasSearched={setHasSearched}
          
        />

        {/* error message */}
        {error && <p className="mt-4 text-red-600">{error}</p>}
    
        {/* loading */}
        {isLoading && <p className="mt-4 text-gray-600">กำลังโหลด...</p>}

        {/* success case */}
        {hasSearched && !isLoading && result && (
          <>
            {/* <ProgressSteps status={result.Status || "รอการพิจารณา"} /> */}
            <ProgressSteps result={result} />
            <ResultTable result={result} />
          </>
        )}

        {/* not found */}
              {hasSearched && !isLoading && !result && (
                error === "รหัสตรวจสอบไม่ถูกต้อง" ? 
                  <p></p>
                 : 
                  error === "กรุณากรอกรหัสผู้สมัครที่ถูกต้อง (ตัว S ตามด้วยตัวเลข)" ?
                  <p></p>
                 :
                  error ==="กรุณากรอกรหัสยืนยัน 11 หลักให้ถูกต้อง" ?
                  <p></p>
                 :
                 <p className="mt-4 text-gray-600">
                    หากท่านยังไม่ได้ทำการสมัคร กรุณาสมัครผ่าน แอปพลิเคชั่น ทางรัฐ
                 </p>                
              )}
      </div>
    </div>
  );
};

export default Checkstatus;
