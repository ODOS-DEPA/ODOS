import React from "react";
import { Link } from "react-router-dom";
import Mammoth from "mammoth";
import { useState, useEffect } from "react";
import ScrollToTop from "../components/ScrollToTop";
// import Footer from "../components/Footer";
// import NavbarTH from "../components/NavbarTH";
import NavbarUnified from "../components/UnifiedNavbar";
import FooterCombined from "../components/FooterCombined";

const faqDataEN = [
  {
    question: "Can I apply if I'm over 19 years old?",
    answer: "Applicants must not be over 19 years old on the application start date, March 24, 2025. For example, being 19 years and 1 day old on that date would make you ineligible."
  },
  {
    question: "If I completed Grade 9 and am entering Grade 10 or a vocational program (Year 1), can I apply?",
    answer: "Not eligible. Applicants must be currently enrolled in Grade 10 or Year 1 of a vocational certificate program, or have an official admission letter for the academic year 2024."
  },
  {
    question: "Are there any fees to apply for the program?",
    answer: "There is no fee to apply for the program."
  },
  {
    question: "What expenses are covered by the program?",
    answer: "The program covers expenses related to education, travel for studying abroad, and living costs while overseas."
  },
  {
    question: "If I'm in my first year at university, which transcripts should I submit?",
    answer: "You may submit your first semester university grades and the previous term's grades (e.g., Grade 12 Semester 2). If Semester 2 grades are released during the application period (until June 16, 2025), you can wait and submit both semesters together."
  },
  {
    question: "If I've graduated and am waiting to continue studies, where do I get a certificate of good conduct?",
    answer: "You may obtain it from your previous school or ask your homeroom teacher to issue and sign one."
  },
  {
    question: "If the program overlaps with exams or classes, will it affect my studies?",
    answer: "Selected applicants will receive an official letter from the program to their institution to ensure it does not affect their regular academic schedule."
  },
  {
    question: "What if I can't find the ODOS Summer Camp registration tab?",
    answer: "First, go to the 'Thang Rat' app and under 'Services', type 'ODOS' in the search bar. If it doesn't appear, check your app version in the 'Settings' menu and ensure it's version 3.3.1. If not, update the application."
  },
  {
    question: "Can I choose the institution/country/city I want to go to?",
    answer: "There will be a lottery to assign countries/programs/institutions, and interviews will be held on July 26, 2025."
  },
  {
    question: "How should I record the introduction video?",
    answer: "Record a video introducing yourself and your reason for applying to the ODOS Summer Camp in English. The video must not exceed 2 minutes, must be unedited, with proper attire, a clear view of your face, and clear audio. Upload it to Google Drive or your own social media (ensure it's accessible to the committee) and attach the link."
  },
  {
    question: "I'm a GED student but have only one semester of high school grades. Can I apply?",
    answer: "If you have high school student status during the 2024 academic year, you may apply using your most recent two semesters’ grades (Year 1 Semester 1 and previous high school semester), and attach your GED results."
  },
  {
    question: "What is the format of the English and digital skills assessments?",
    answer: "The assessments are online. English test: Based on CEFR standard. Digital skills test: Tests basic understanding and use of digital technology."
  },
  {
    question: "If I took multiple English courses, which grade should I use?",
    answer: "Use the grade from the required core English subject only."
  },
  {
    question: "If my current term doesn't include English, what grades should I submit?",
    answer: "Submit your most recent 3 semesters: the current year's Semester 1 and 2, along with the previous year’s Semester 2."
  }
];

function QaEN() {
  const [language, setLanguage] = useState("EN");

  return (
    <div className="LINESeed">
      <NavbarUnified language={language} setLanguage={setLanguage} />
      <ScrollToTop />

      <div>
        <img src="/images/info_sec1_banner_en.png" alt="FAQ Banner" />
      </div>

      <div className="h-screen flex flex-col">
        <br />
        <h1 className="text-5xl font-bold mb-6 items-center text-center">
          Frequently Asked Questions
        </h1>
        <ul className="space-y-6 px-6">
          {faqDataEN.map((item, index) => (
            <li key={index}>
              <p className="font-bold text-lg pl-4">Q: {item.question}</p>
              <p className="font-normal text-lg pl-4">A: {item.answer}</p>
            </li>
          ))}
          <br />
        </ul>

        <div className="flex flex-col">
          <FooterCombined lang="en" />
        </div>
      </div>
    </div>
  );
}

export default QaEN;
