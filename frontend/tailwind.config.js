/** @type {import('tailwindcss').Config} */


// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        weird: ['"Noto Sans"', 'sans-serif'], // ตั้งชื่อ class ว่า font-weird
      },
    },
  },
  plugins: [],
};


// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"], // ครอบคลุมทุกไฟล์
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
