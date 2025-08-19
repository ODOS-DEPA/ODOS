import React, { useState, useEffect } from "react";
import RefreshPages from "./ResultTable-components/refreshing-pages";
import ResultStage_1 from "./ResultTable-components/stage1";

const ResultTable = ({ result }) => {
  const [CurrentStatus, setCurrentStatus] = useState(0);

  useEffect(() => {
    if (result) {
      setCurrentStatus(1);
    }
  }, [result]);
  if (!result) return null;

  return (
    // ปุ่ม refreshing Pages
    <>
    <div className="mt-4 sm:mt-8 space-y-4 sm:space-y-8 px-2 sm:px-0">
      <RefreshPages/>
    </div> 
    {
      (() => {
        switch (CurrentStatus) {
          case 1:
            //TODO
            //check state from DB
            let stage_1 = "ติดเงื่อนไข";
            //--
            return (
                      <ResultStage_1
                        STD_ID={result["Application_id"]}
                        firstName={result["ชื่อ (ภาษาไทย)"]}
                        lastName={result["นามสกุล (ภาษาไทย)"]}
                        status={stage_1}
                      />
                    )
          default:
            //TODO : SET IDLE
            return (<p> ไม่มีจ้า </p>)
        }
      })()
    }   
    </>


  );
};

export default ResultTable;
