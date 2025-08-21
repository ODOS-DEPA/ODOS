import React from "react";
import Stage1Tag from "./stage-TAG/stage1-tag";
import Stage2Tag from "./stage-TAG/stage2-tag";
export default function ResultStage_1({ result }) {
  const headers = ["รหัสผู้สมัคร", "ชื่อ", "นามสกุล", "สถานะ"];
  let currentstage;
  switch(result.currentStatus){
  case "1": currentstage = "stage1"; break;
  case "2": currentstage = "stage2"; break;
  case "3": currentstage = "stage3"; break;
  case "4": currentstage = "stage4"; break;
  case "5": currentstage = "stage5"; break;
  case "6": currentstage = "stage6"; break;
  case "7": currentstage = "stage7"; break;
  case "8": currentstage = "stage8"; break;
  default: currentstage = null;
}
  const rowData_Stage1 = [
    { value: result.StudentID },
    { value: result.Name },
    { value: result.Surname },
    { value: result[currentstage] }
  ];
  const rowData_Stage2 = [
    { value: result.StudentID },
    { value: result.Name },
    { value: result.Surname },
    { value: result[currentstage+1] }
  ];

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
