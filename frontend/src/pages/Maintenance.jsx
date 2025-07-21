import React from "react";
import { Link } from "react-router-dom";
function Maintenance() {
  return (
    <div>
      <div className="bg-gray-900 h-screen flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold ">We’ll Be Back Soon!</h1>
          <p className="text-xl">
            Sorry for the inconvenience but we&rsquo;re performing some
            maintenance at the moment.
          </p>
          <p className="text-xl">
            {/* Coming Soon on <span className="text-[#869bd4]">1 March 2025</span> */}
          </p>

          {/* <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          ⬅ Back to Home
        </button> */}

        <Link to="/">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">
          ⬅ Back to Home
          </button>
        </Link>

        </div>
      </div>
    </div>
  );
}

export default Maintenance;
