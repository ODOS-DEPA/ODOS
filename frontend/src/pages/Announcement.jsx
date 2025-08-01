import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import NavbarDashboard from "../components/NavbarDashboard";
import NavbarTH from "../components/NavbarTH";
function Announcement() {
    return (
        <div className="LINESeed">
            <NavbarTH />
            <br />
            <br />
            <div>
                <label htmlFor="" className="flex justify-center text-3xl font-bold">ประกาศ</label>
                <br />
                <label htmlFor="" className="flex justify-center text-2xl font-bold">รายชื่อผู้ผ่านการสัมภาษณ์</label>
                <br />
                
                <label htmlFor="" className="flex justify-center font-medium">โดยต้องทำการยืนยันสิทธิ์ภายในวันอาทิตย์ที่   <label className="font-bold">&nbsp; 3 สิงหาคม 2568</label></label>
                <br />
                <label className="flex justify-center font-bold text-red-500">*หากไม่ยืนยันสิทธ์ในเวลาที่กำหนด โครงการฯจะให้สิทธิ์ให้รายชื่อสำรองลำดับถัดไป`*</label>
            </div>

            <div className="h-screen flex items-center justify-center p-10">
                <iframe src="https://app.powerbi.com/view?r=eyJrIjoiMzhjNzA3NWEtZGQ3Yy00ZjU0LTgxYTItZmQ3YmQxMTBjNjI2IiwidCI6IjRhNGY3YjUyLTBlMDUtNDQxNS04NDU0LTc2ODliMDBhODdiMiIsImMiOjEwfQ%3D%3D"
                    width={1000}
                    height={660}

                />
            </div>
            <br />
            <ScrollToTop />
            <div className="flex flex-col">
                <Footer />
            </div>
        </div>
    );
}

export default Announcement;