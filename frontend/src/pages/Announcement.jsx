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
                <label htmlFor="" className="flex justify-center text-2xl font-bold">รายชื่อผู้ที่ผ่านการคัดเลือกครั้งที่ 3</label>
                <br />
                <label htmlFor="" className="flex justify-center font-medium">ผู้ที่ผ่านการคัดเลือกครั้งที่ 3 ต้องเข้าร่วมการจับสลากเลือกหลักสูตร/ประเทศ และสอบสัมภาษณ์</label>
                
                <div className="flex justify-center font-medium">
                    <label className="flex justify-center font-medium">ในวันเสาร์ที่ </label> <label className="flex justify-center font-bold tracking-tighter">&nbsp; 26 กรกฎาคม 2568</label>
           
                </div>
                
                <label className="flex justify-center font-medium">ณ บางกอก คอนเวนชั่นเซ็นเตอร์ ชั้น 22 เซ็นทาราแกรนด์ แอท เซ็นทรัลเวิลด์</label>
                <br />
                <label htmlFor="" className="flex justify-center font-medium">โดยต้องทำการยืนยันสิทธิ์เข้าร่วมภายในวันจันทร์ที่  <label className="font-bold">&nbsp; 21 กรกฎาคม 2568</label></label>
                <br />
                <label className="flex justify-center font-bold text-red-500">*หากไม่ยืนยันสิทธ์ในเวลาที่กำหนด โครงการฯจะทำให้สิทธิ์ให้รายชื่อสำรองลำดับถัดไป`*</label>
            </div>
             <br />
            <br />
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