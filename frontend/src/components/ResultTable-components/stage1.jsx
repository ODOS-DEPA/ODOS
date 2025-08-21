import React from "react";
import Stage1Tag from "./stage-TAG/stage1-tag";
import Stage2Tag from "./stage-TAG/stage2-tag";

function getRowData(result, stageNumber) {
  const stageKey = "stage" + stageNumber;
  return [
    { value: result.StudentID },
    { value: result.Name },
    { value: result.Surname },
    { value: result[stageKey] || "ไม่ระบุ" }
  ];
}


export default function ResultStage_1({ result }) {
  const headers = ["รหัสผู้สมัคร", "ชื่อ", "นามสกุล", "สถานะ"];
  
  const rowData_Stage1 = getRowData(result, 1);
  const rowData_Stage2 = getRowData(result, 2);

  const renderTag = () => {
    let colorTags = {
        "pass" : "bg-green-600 text-white text-center text-xs sm:text-sm font-medium" ,
        "fail" : "bg-red-600 text-white text-center text-xs sm:text-sm font-medium" ,
        "condition" : "bg-orange-600 text-white text-center text-xs sm:text-sm font-medium" ,
        "onProcess" : "bg-yellow-600 text-white text-center text-xs sm:text-sm font-medium" ,

    }
    switch (result[currentstage]) {
      case "ผ่าน":
        return(
            <>
            <Stage1Tag headers={headers} rowData={rowData_Stage1} colorTag={colorTags["pass"]}/>
            <Stage2Tag headers={headers} rowData={rowData_Stage2} colorTag={colorTags["onProcess"]}/>
            </>
        )
      case "ไม่ผ่าน":
        return(
            <Stage1Tag headers={headers} rowData={rowData_Stage1} colorTag={colorTags["fail"]} />
        )
      case "ติดเงื่อนไข":
        return(
            <>
            <Stage1Tag headers={headers} rowData={rowData_Stage1} colorTag={colorTags["condition"]}/>
            <Stage2Tag headers={headers} rowData={rowData_Stage2} colorTag={colorTags["onProcess"]}/>
            </>
        )
      default:
        return <p>ไม่มี stage 1 จ้า</p>;
    }
  };

  return <>{renderTag()}</>;
}
