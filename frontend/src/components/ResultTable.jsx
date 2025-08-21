import React, { useState, useEffect } from "react";
import RefreshPages from "./ResultTable-components/refreshing-pages";
import ResultStage_1 from "./ResultTable-components/stage1";

const ResultTable = ({ result }) => {

  if (!result) return null;

  return (
    // ปุ่ม refreshing Pages
    <>
    <div className="mt-4 sm:mt-8 space-y-4 sm:space-y-8 px-2 sm:px-0">
      <RefreshPages/>
    </div> 
    {
      console.log(result)
      (() => {
        switch (result.currentStatus) {
          case "1":
            //TODO
            //--
            return (
                      <ResultStage_1
                        result = {result}
                      />
                    )
          default:
            //TODO : SET IDLE
            return (<p>{result ? JSON.stringify(result) : "ไม่มีข้อมูล"}</p>)
        }
      })()
    }   
    </>


  );
};

export default ResultTable;
