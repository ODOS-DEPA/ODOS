import React from "react";
    
const handleRefresh = () => {
    window.location.reload();
  };

export default function RefreshPages(){
    return(
        <>
        <p className="text-red-600 text-sm sm:text-base font-semibold mt-4 sm:mt-6 pl-[60%]">
        ⭐ เพื่อแสดงสถานะข้อมูลการสอบอย่างถูกต้อง โปรดกด Refresh หรือ กด Ctrl +
        F5 ทุกครั้ง
        </p>
        <div className="flex justify-end mb-4">
            <button
            onClick={handleRefresh}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 shadow-sm hover:shadow-md"
            title="รีเฟรสหน้า"
            >
            <svg
                className="w-3 h-3 sm:w-4 sm:h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
            </svg>
            <span className="hidden sm:inline">รีเฟรส</span>
            </button>
        </div>
        </>
    )
}
