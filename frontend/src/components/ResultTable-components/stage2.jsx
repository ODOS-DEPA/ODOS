import React from "react";

import Stage2Tag from "./stage-TAG/stage2-tag";
import Stage3Tag_ENG_TEST from "./stage-TAG/stage3-tag-ENG-TEST";
import Stage3Tag_TECH_TEST from "./stage-TAG/stage3-tag-TECH-TEST";
function getRowData(result, stageNumber) {
  const stageKey = "stage" + stageNumber;
  return [
    { value: result.StudentID },
    { value: result.Name },
    { value: result.Surname },
    { value: result[stageKey] || "ไม่ระบุ" }
  ];
}


export default function ResultStage_2({ result }) {
  const headers_tag2 = ["รหัสผู้สมัคร", "ชื่อ", "นามสกุล", "สถานะ"];
  const headers_tag3_ENG_TEST = ["รหัสผู้สมัคร","รหัสเข้าสอบ", "คู่มือการสอบ", "ระบบการสอบ","คะแนน", "สถานะ"]
  const headers_tag3_TECHNICAL_TEST = ["รหัสผู้สมัคร","รหัสเข้าสอบ", "คู่มือการสอบ", "ระบบการสอบ","คะแนน", "สถานะ"]
  const rowData_Stage2 = getRowData(result, 2);
  //const rowData_Stage3 = getRowData(result, 3);   //ต้องแก้ เรื่อง รายละเอียดต่อ

  const renderTag = () => {
    let colorTags = {
        "pass" : "bg-green-600 text-white text-center text-xs sm:text-sm font-medium" ,
        "fail" : "bg-red-600 text-white text-center text-xs sm:text-sm font-medium" ,
        "condition" : "bg-orange-600 text-white text-center text-xs sm:text-sm font-medium" ,
        "onProcess" : "bg-yellow-600 text-white text-center text-xs sm:text-sm font-medium" ,

    }
    switch (result['stage1']) {
      case "ผ่าน":
        return(
            <>
            <Stage2Tag headers={headers_tag2} rowData={rowData_Stage2} colorTag={colorTags["pass"]}/>
            <Stage3Tag_ENG_TEST StudentID={result.StudentID} headers={headers_tag3_ENG_TEST} colorTag={colorTags["onProcess"]}/>
            <Stage3Tag_TECH_TEST StudentID={result.StudentID} headers={headers_tag3_TECHNICAL_TEST} colorTag={colorTags["onProcess"]}/>
            </>
        )
      case "ไม่ผ่าน":
        return(
            <Stage2Tag headers={headers_tag2} rowData={rowData_Stage2} colorTag={colorTags["fail"]} />
        )
      case "ติดเงื่อนไข":
        return(
            <>
            <Stage2Tag headers={headers_tag2} rowData={rowData_Stage2} colorTag={colorTags["condition"]}/>
            <Stage3Tag_ENG_TEST StudentID={result.StudentID} headers={headers_tag3_ENG_TEST} colorTag={colorTags["onProcess"]}/>
            <Stage3Tag_TECH_TEST StudentID={result.StudentID} headers={headers_tag3_TECHNICAL_TEST} colorTag={colorTags["onProcess"]}/>
            <Stage3Tag_TECH_TEST/>
            </>
        )
      default:
        return <p>ไม่มี stage 1 จ้า</p>;
    }
  };

  return <>{renderTag()}</>;
}
