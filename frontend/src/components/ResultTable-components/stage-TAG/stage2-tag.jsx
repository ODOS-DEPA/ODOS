import React from "react";

export default function Stage2Tag({headers , rowData, colorTag}){
    const cellClass = "px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-center border-r border-gray-300 text-gray-900";
    return(
        <>
            
        <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#1a365d] mb-3 sm:mb-4 font-sukhumvit px-2 sm:px-0">
                ประกาศผลผู้ผ่านการคัดเลือกรอบที่ 1
            </h3>
            <div className="overflow-x-auto shadow-lg rounded-lg -mx-2 sm:mx-0 mb-6">
                <div className="min-w-[800px] sm:min-w-0">
                    <table className="w-full bg-white border border-gray-200">
                        <thead className={colorTag}>
                        <tr>
                            {headers.map((title, i) => (
                            <th key={i} className={`${cellClass} font-medium`}>
                                {title}
                            </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-100">
                            {rowData.map((cell, i) => (
                            <td key={i} className={`${cellClass} ${cell.bold ? "font-medium" : ""}`}>
                                {cell.value}
                            </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
        </>
    )
}