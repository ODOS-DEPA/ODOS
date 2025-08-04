import { Toaster, toast } from "react-hot-toast";
import { ArrowLeft, Copy } from "lucide-react";
import { Link } from "react-router-dom";

const List = () => {
  const applications = [
    { id: "S120006575", status: "รอการพิจารณา" },
    { id: "S120006622", status: "ผ่านการคัดเลือกครั้งที่ 1" },
    { id: "S110006432", status: "สอบทักษะภาษาอังกฤษ" },
    { id: "S100006833", status: "ผ่านการคัดเลือกครั้งที่ 2" },
    { id: "S120006966", status: "สอบทักษะด้านดิจิทัลระดับกลาง" },
    { id: "S120007063", status: "ผ่านการคัดเลือกครั้งที่ 3" },
    { id: "S120007168", status: "สอบสัมภาษณ์" },
    { id: "S520007262", status: "ผ่านสอบสัมภาษณ์" },
    { id: "S990007664", status: "ไม่ผ่าน" },
  ];

  // ใช้ Object เพื่อจับคู่สถานะกับสี
  const statusColors = {
    "รอการพิจารณา": "bg-orange-100 text-orange-800 hover:bg-orange-100",  // สีส้ม
    "สอบทักษะภาษาอังกฤษ": "bg-orange-100 text-orange-800 hover:bg-orange-100",  // สีส้ม
    "สอบทักษะด้านดิจิทัลระดับกลาง": "bg-orange-100 text-orange-800 hover:bg-orange-100",  // สีส้ม
    "สอบสัมภาษณ์": "bg-orange-100 text-orange-800 hover:bg-orange-100",  // สีส้ม
    "ผ่านการคัดเลือกครั้งที่ 1": "bg-green-100 text-green-800 hover:bg-green-100",  // สีเขียว
    "ผ่านการคัดเลือกครั้งที่ 2": "bg-green-100 text-green-800 hover:bg-green-100",  // สีเขียว
    "ผ่านการคัดเลือกครั้งที่ 3": "bg-green-100 text-green-800 hover:bg-green-100",  // สีเขียว
    "ผ่านสอบสัมภาษณ์": "bg-green-100 text-green-800 hover:bg-green-100",  // สีเขียว
    "ไม่ผ่าน": "bg-red-100 text-red-800 hover:bg-red-100",  // สีแดง
  };

  // ฟังก์ชันใช้เพื่อดึงสีจาก status
  const getStatusColor = (status) => statusColors[status] || "bg-gray-100 text-gray-800 hover:bg-gray-100";

  const handleCopy = (id) => {
    navigator.clipboard.writeText(id);
    toast.success("คัดลอกรหัสเรียบร้อยแล้ว!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <Toaster />
      <div className="max-w-4xl mx-auto mt-10">
        <Link
          to="/check-status"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
          กลับไปยังหน้าเช็คสถานะ
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">สถานะการสมัคร</h1>

        <div className="grid gap-4">
          {applications.map((app) => (
            <div
              key={app.id}
              onClick={() => handleCopy(app.id)} // เพิ่มฟังก์ชันคัดลอกรหัสที่นี่
              className="rounded-lg border bg-white text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg cursor-pointer"
            >
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-gray-700">
                      {app.id}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // ป้องกันไม่ให้คลิกปุ่มแล้วคัดลอกซ้ำ
                        handleCopy(app.id);
                      }}
                      className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                  <div
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-ls font-semibold ${getStatusColor(app.status)}`}
                  >
                    {app.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
