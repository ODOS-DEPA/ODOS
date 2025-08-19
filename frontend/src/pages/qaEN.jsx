import React from "react";
import { Link } from "react-router-dom";
import Mammoth from "mammoth";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Navbar_info from "../components/NavQA";
import ScrollToTop from "../components/ScrollToTop";

import { Underline } from "lucide-react";
import Footer from "../components/Footer";
import NavbarTH from "../components/NavbarTH";
function QaEN() {
  return (
    <div className="LINESeed">

      <Navbar />
      <ScrollToTop />
      <div>
        <img src="/images/info_sec1_banner_en.png" alt="" />
      </div>
      {/* Details  */}
      <div>
        <div className="id= qualification">
          <div className="h-screen flex flex-col">
            <br></br>
            <h1 className="text-5xl font-bold mb-6 items-center text-center">Frequently Asked Questions</h1>

            <ul className="qualification px-6">
              <li><label htmlFor="#" className="font-bold">Q: Can I apply if I'm over 19 years old?</label></li>
              <li><label htmlFor="#">A: Applicants must not be over 19 years old on the application start date, March 24, 2025. For example, being 19 years and 1 day old on that date would make you ineligible.</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: If I completed Grade 9 and am entering Grade 10 or a vocational program (Year 1), can I apply?</label></li>
              <li><label htmlFor="#">A: Not eligible. Applicants must be currently enrolled in Grade 10 or Year 1 of a vocational certificate program, or have an official admission letter for the academic year 2024.</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: Are there any fees to apply for the program?</label></li>
              <li><label htmlFor="#">A: There is no fee to apply for the program.</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: What expenses are covered by the program?</label></li>
              <li><label htmlFor="#">A: The program covers expenses related to education, travel for studying abroad, and living costs while overseas.</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: If I'm in my first year at university, which transcripts should I submit?</label></li>
              <li><label htmlFor="#">A: You may submit your first semester university grades and the previous term's grades (e.g., Grade 12 Semester 2). If Semester 2 grades are released during the application period (until June 16, 2025), you can wait and submit both semesters together.</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: If I've graduated and am waiting to continue studies, where do I get a certificate of good conduct?</label></li>
              <li><label htmlFor="#">A: You may obtain it from your previous school or ask your homeroom teacher to issue and sign one.</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: If the program overlaps with exams or classes, will it affect my studies?</label></li>
              <li><label htmlFor="#">A: Selected applicants will receive an official letter from the program to their institution to ensure it does not affect their regular academic schedule.</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: What if I can't find the ODOS Summer Camp registration tab?</label></li>
              <li><label htmlFor="#">A: First, go to the "Thang Rat" app and under "Services", type "ODOS" in the search bar. If it doesn't appear, check your app version in the "Settings" menu and ensure it's version 3.3.1. If not, update the application.</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: Can I choose the institution/country/city I want to go to?</label></li>
              <li><label htmlFor="#">A: There will be a lottery to assign countries/programs/institutions, and interviews will be held on July 26, 2025.</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: How should I record the introduction video?</label></li>
              <li><label htmlFor="#">A: Record a video introducing yourself and your reason for applying to the ODOS Summer Camp <strong>in English</strong>. The video must not exceed 2 minutes, must be unedited, with proper attire, a clear view of your face, and clear audio. Upload it to Google Drive or your own social media (ensure it's accessible to the committee) and attach the link.</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: I'm a GED student but have only one semester of high school grades. Can I apply?</label></li>
              <li><label htmlFor="#">A: If you have high school student status during the 2024 academic year, you may apply using your most recent two semesters’ grades (Year 1 Semester 1 and previous high school semester), and attach your GED results.</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: What is the format of the English and digital skills assessments?</label></li>
              <li><label htmlFor="#">A: The assessments are online.<br />- English test: Based on CEFR standard.<br />- Digital skills test: Tests basic understanding and use of digital technology.</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: If I took multiple English courses, which grade should I use?</label></li>
              <li><label htmlFor="#">A: Use the grade from the required core English subject only.</label></li>
              <br />

              <li><label htmlFor="#" className="font-bold">Q: If my current term doesn't include English, what grades should I submit?</label></li>
              <li><label htmlFor="#">A: Submit your most recent 3 semesters: the current year's Semester 1 and 2, along with the previous year’s Semester 2.</label></li>
              <br />
            </ul>
            <div className="flex flex-col"><Footer /></div>
          </div>
          
        </div>
        
      </div>

    </div>
  );
}

export default QaEN;
