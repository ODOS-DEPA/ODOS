import { Link } from "react-router-dom";

const SearchForm = ({ searchId, setSearchId, verifyCode, setVerifyCode, handleSearch, isLoading }) => (
  <form onSubmit={handleSearch} className="mb-3 mt-6 space-y-2">
    <label htmlFor="search_id" className="block text-gray-700 font-sukhumvit">
      รหัสผู้สมัคร:
      <input
        type="text"
        id="search_id"
        name="search_id"
        className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 font-sukhumvit"
        placeholder="กรุณากรอกรหัสการสมัครของท่าน"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
    </label>

    <label htmlFor="verify_code" className="block text-gray-700 font-sukhumvit">
      รหัสตรวจสอบ:
      <input
        type="text"
        id="verify_code"
        name="verify_code"
        className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 font-sukhumvit"
        placeholder="กรุณากรอกรหัสตรวจสอบ 10 หลัก"
        value={verifyCode}
        onChange={(e) => setVerifyCode(e.target.value)}
      />
    </label>

    <button
      type="submit"
      className="w-16 md:w-[100px] px-2 py-2 bg-[#0e131a] text-white font-sukhumvit rounded-lg shadow-sm hover:bg-[#444444] focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-200"
      disabled={isLoading}
    >
      {isLoading ? "loading" : "ค้นหา"}
    </button>
  </form>
);

export default SearchForm;