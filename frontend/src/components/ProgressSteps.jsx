import React from "react";

const steps = [
  "ยื่นสมัครแล้ว",
  "การคัดเลือก\nรอบที่ 1",
  "สอบทักษะ\nภาษาอังกฤษ และ\nดิจิทัล",
  "การคัดเลือก\nรอบที่  2",
  "จับฉลากเลือกหลักสูตร\nและ\nสอบสัมภาษณ์",
  "ประกาศผลผู้ผ่านการคัดเลือก",
  "รายงานตัว\nและ\nทำสัญญา",
  //"-",
];

const dates = [
  "1 ก.ย. - 16 พ.ย. 68",
  "4 ธ.ค. 68",
  "5 - 14 ธ.ค. 68",
  "25 ธ.ค.",
  "10 ม.ค. 69",
  "18ุ ม.ค. 69",
  "18 - 23 ม.ค. 69",
  //"-",
];

export default function ProgressSteps({ result }) {
  const data = {
    stage1: result.stage1,
    stage2: result.stage2,
    stage3: result.stage3,
    stage4: result.stage4,
    stage5: result.stage5,
    stage6: result.stage6,
    stage7: result.stage7,
    //stage8: result.stage8,
  };

  const stages = steps.map((label, idx) => ({
    id: idx + 1,
    label,
    date: dates[idx],
    status: data[`stage${idx + 1}`] || null,
  }));

  const getColor = (status) => {
    switch (status) {
      case "ผ่าน":
        return "bg-green-500";
      case "รอดำเนินการ":
        return "bg-yellow-500";
      case "ไม่ผ่าน":
        return "bg-red-500";
      case "ติดเงื่อนไข":
        return "bg-orange-500";
      default: 
        return "bg-gray-300";
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-6">
      <div className="flex w-full max-w-5xl justify-between relative">
        {stages.map((stage, index) => {
        const circleColor = getColor(stage.status);
        const showLine = index < stages.length - 1; // ไม่วาดเส้นหลังวงกลมสุดท้าย

        // สีเส้นอิงจากวงกลมถัดไป
        const nextStage = stages[index + 1];
        const lineColor = nextStage ? getColor(nextStage.status) : "bg-gray-300";

        return (
            <div key={stage.id} className="flex flex-col items-center w-full relative z-10">
            {/* วงกลม */}
            <div
                className={`w-16 h-16 rounded-full border-2 flex items-center justify-center ${circleColor} text-white font-bold`}
            >
                {stage.status === "ผ่าน" ? "✔" : stage.id}
            </div>

            {/* Label */}
            <div className="text-center mt-2 text-[12px] sm:text-[14px] md:text-[16px] whitespace-pre-line">
                {stage.label}
            </div>

            {/* Date */}
            <div className="text-center mt-1 text-[10px] sm:text-[12px] text-gray-600">
                {stage.date}
            </div>

            {/* Line */}
            {showLine && (
                <div
                className={`h-2 ${lineColor} absolute -z-10`}
                style={{
                    top: "20%",           // กึ่งกลางวงกลม
                    transform: "translateY(-50%)",
                    left: "73%",          // เริ่มเส้นหลังวงกลม
                    width: "100px",         // ปรับความยาวเส้นตามต้องการ
                }}
                ></div>
            )}
            </div>
        );
        })}


      </div>
    </div>
  );
}
