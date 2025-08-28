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
        {/* {console.log(result)} */}
        {/* loading */}
        {isLoading && <p className="mt-4 text-gray-600">กำลังโหลด...</p>}

        {/* success case */}
        {hasSearched && !isLoading && result && (
          <>
            {/* <ProgressSteps status={result.Status || "รอการพิจารณา"} /> */}
            <ProgressSteps status={"รอการพิจารณา"} />
            <ResultTable result={result} />
          </>
        )}

        {/* not found */}
        {hasSearched && !isLoading && !result && (
          <p className="mt-4 text-gray-600">ไม่พบข้อมูลที่ตรงกัน</p>
        )}
      </div>
    </div>
  );
};

export default Checkstatus;
