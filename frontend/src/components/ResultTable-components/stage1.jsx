import React from "react";
import Stage1Tag from "./stage-TAG/stage1-tag";
import Stage2Tag from "./stage-TAG/stage2-tag";
export default function ResultStage_1({ STD_ID, firstName, lastName, status }) {
  const headers = ["รหัสผู้สมัคร", "ชื่อ", "นามสกุล", "สถานะ"];
  const rowData = [
    { value: STD_ID },
    { value: firstName },
    { value: lastName },
    { value: status }
  ];

  const renderTag = () => {
    let colorTags = {
        "pass" : "bg-green-600 text-white text-center text-xs sm:text-sm font-medium" ,
        "fail" : "bg-red-600 text-white text-center text-xs sm:text-sm font-medium" ,
        "condition" : "bg-orange-600 text-white text-center text-xs sm:text-sm font-medium" ,
        "onProcess" : "bg-yellow-600 text-white text-center text-xs sm:text-sm font-medium" ,

    }
    switch (status) {
      case "ผ่าน":
        return(
            <>
            <Stage1Tag headers={headers} rowData={rowData} colorTag={colorTags["pass"]}/>
            <Stage2Tag headers={headers} rowData={rowData} colorTag={colorTags["onProcess"]}/>
            </>
        )
      case "ไม่ผ่าน":
        return(
            <Stage1Tag headers={headers} rowData={rowData} colorTag={colorTags["fail"]} />
        )
      case "ติดเงื่อนไข":
        return(
            <>
            <Stage1Tag headers={headers} rowData={rowData} colorTag={colorTags["condition"]}/>
            <Stage2Tag headers={headers} rowData={rowData} colorTag={colorTags["onProcess"]}/>
            </>
        )
      default:
        return <p>ไม่มี stage 1 จ้า</p>;
    }
  };

  return <>{renderTag()}</>;
}
