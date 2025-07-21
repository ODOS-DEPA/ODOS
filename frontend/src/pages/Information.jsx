import React from "react";
import { Link } from "react-router-dom";
import Mammoth from "mammoth";
import { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
import Navbar_info from "../components/Nav_info";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
import NavbarTH from "../components/NavbarTH";

function InfoEN() {
  return (
    <div className="LINESeed">

      <NavbarTH />
      <ScrollToTop />
      <div>
        <img src="/images/Section1.png" alt="" />
      </div>

{/* Test Preparation Section */}
      <div className="bg-yellow-50 p-6 border-l-4 border-yellow-400 shadow-md m-4 rounded-lg">
        <h2 className="text-2xl font-bold text-yellow-800 mb-2">
          Test Preparation Details
        </h2>
        <p className="mb-2">
                  The English Proficiency and Basic Digital Skills Assessment will be available from 28 June to 6 July 2025 and the Intermediate Digital Skills Assessment will be available from 10 - 16 July 2025. You may take the test on any day and time that is convenient for you within this period.Please refer to the application status check system at <Link to="/check-status" style={{ fontWeight: "bold", textDecoration: "underline" }}>https://odos.thaigov.go.th/check-status </Link>  for detailed instructions on how to access and complete the assessment. Please carefully follow all test guidelines. The system will record your video and audio during the test, and by taking the test, you consent to this recording for assessment purposes.
        </p>
        <p className="font-semibold">
          Preparing for the Test and Practice Session
        </p>
        <p className="mb-2">
                  Before taking the test, please read the user guides for both the English and digital skills assessments carefully to understand the system and process.
        </p>
        <p className="mb-2">
          To help you feel confident and prepared, you can log in to the system to try a practice test for both the English and digital skills assessments.
        </p>

        <p className="font-semibold">Checklist Before the Test</p>
        <ul className="list-disc list-inside mb-2">
          <li>1. Prepare a computer, laptop, tablet, or smartphone with a working camera and microphone.</li>
          <li>2. Ensure your device is connected to a stable internet connection.</li>
          <li>3. Enable camera and microphone access on your device during the test.</li>
          <li>4. Find a quiet, private space where you will not be disturbed during the test.</li>
          <li>5. Have your national ID card ready for identity verification. By taking the test, you agree to the recording of your information for this purpose.</li>
        </ul>

        <p className="font-semibold">Test Rules During the Assessment</p>
        <p className="mb-2">
          You must complete the test in one sitting. The timer will not pause during the test, and the system will monitor for any irregular activities through video, audio, and screen tracking throughout the assessment.
        </p>
        <ul className="list-disc list-inside">
          <li>1. Dress appropriately in neat, respectful clothing.</li>
          <li>2. Close all communication apps (e.g., Line, Facebook) on your device before starting the test.</li>
          <li>3. Do not leave your seat until you have finished the test or the time has ended.</li>
          <li>4. Do not use any communication devices to interact with individuals not involved in the examination.</li>
          <li>5. Video and audio will be recorded to ensure the integrity of the test.</li>
          <li>6. Do not open or switch to other programs during the test, as the system will detect any screen changes.</li>
        </ul>
      </div>

      <div>
        <div className="id= qualifications">
          <div className="h-screen flex flex-col">
            <br />
            <h1 className="text-5xl font-bold mb-6 items-center text-center">
              Qualifications for Applicants
            </h1>
            <p className="px-4">As of March 24, 2025, applicants must meet the following qualifications:</p>
            <ul className="qualifications px-6">
              <li><label htmlFor="#">1.1 Must be of Thai nationality</label></li>
              <li><label htmlFor="#">1.2 Must be no older than 19 years</label></li>
              <li>
                <label htmlFor="#">
                  1.3 Must have had a registered residence in any district of Thailand for at least 1 continuous year. If relocated within the past year, the previous residence must have been maintained for at least 1 continuous year.
                </label>
              </li>
              <li>
                <label htmlFor="#">
                  1.4 Must be a student currently enrolled in an educational institution in Thailand in the 2024 academic year, at the high school level, vocational certificate, higher vocational certificate (first-year), or first-year bachelor's degree or equivalent.
                </label>
              </li>
              <li>
                <label htmlFor="#">
                  1.5 Must have a cumulative GPA for the last two semesters of at least 2.50 (based on a grading system where A=4, B=3, C=2, D=1, E/F=0) or at least 62.5%.
                </label>
              </li>
              <li>
                <label htmlFor="#">
                  1.6 Must have a cumulative English GPA for the last two semesters of at least 3.00 (based on a grading system where A=4, B=3, C=2, D=1, E/F=0) or at least 75%.
                </label>
              </li>
              <li>
                <label htmlFor="#">
                  1.7 Must have good behavior, verified by a recommendation letter from the educational institution, advisor, or homeroom teacher.
                </label>
              </li>
              <li>
                <label htmlFor="#">
                  1.8 Must be in good physical and mental health, free from diseases that hinder education or contagious diseases that interfere with work, and must not be legally incapacitated.
                </label>
              </li>
            </ul>
            <br />
            <h1 className="text-5xl font-bold mb-6 items-center text-center">
              Required Documents for Applicant Selection
            </h1>
            <ul className="documents px-6">
              <li><label htmlFor="">2.1 A recent front-facing photograph without a hat or glasses, plain background, taken within the last year from the application date.</label></li>
              <li><label htmlFor="">2.2 A copy of the applicant's national ID card and house registration.</label></li>
              <li><label htmlFor="">2.3 A copy of the national ID card and house registration of the parents or legal guardian.</label></li>
              <li><label htmlFor="">2.4 A consent letter from parents or legal guardian.&nbsp;&nbsp;</label><a className="underline" href="/pdf/GuardianConsentForm.pdf" >(download)</a></li>
              <li><label htmlFor="">2.5 A copy of the latest two-semester academic transcript.</label></li>
              <li><label htmlFor="">2.6 A certificate verifying student status or graduation.</label></li>
              <li><label htmlFor="">2.7 A recommendation letter on behavior from the educational institution, advisor, or homeroom teacher.</label></li>
              <li><label htmlFor="">2.8 A certificate or document proving achievement in digital technology-related activities (if any).</label></li>
              <li>
                <label htmlFor="">
                  2.9 A self-introduction video in English, sharing experiences, knowledge, abilities, goals, and expectations for the program, lasting no more than 2 minutes, with clear speech and no background noise, and a clearly visible face.
                </label>
              </li>
              <li><label htmlFor="">2.10 Other relevant documents (if any), such as name change records, English or foreign language test results.</label></li>
            </ul>
            <br />
            <h1 className="text-5xl font-bold mb-6 items-center text-center">
              Selection Criteria
            </h1>


            <div style={{ width: "80%", margin: "0px", padding: "20px", textAlign: "left" }}>
              {/* <h1 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}>
        Selection Criteria
      </h1> */}
              <ul style={{ listStyleType: "none", padding: "0", width: "100%" }}>
                <li><label>3.1 Evaluation criteria for Round 1:</label></li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>1) Cumulative GPA</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>10%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>2) English GPA</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>20%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>3) Digital experience and achievements</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>30%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>4) Video presentation skills and attitude</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>40%</span>
                </li>

                <li><label>3.2 Evaluation criteria for Round 2:</label></li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>1) English proficiency test</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>50%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>2) Basic digital skills test</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>50%</span>
                </li>

                <li><label>3.3 Evaluation criteria for Round 3:</label></li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>1) Intermediate digital skills test</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>100%</span>
                </li>

                <li><label>3.4 Evaluation criteria for final selection:</label></li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>1) Attitude</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>20%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>2) Problem-solving ability</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>20%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>3) Communication skills</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>20%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>4) Analytical thinking</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>20%</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", padding: "8px 0" }}>
                  <span style={{ flex: "1" }}>5) Personality</span>
                  <span style={{ width: "80px", textAlign: "right", fontWeight: "bold" }}>20%</span>
                </li>
              </ul>
            </div>



            <br />
            <h1 className="text-5xl font-bold mb-6 items-center text-center">
              Applicant Selection Process
            </h1>
            <ul className="selection px-6">
              <li>
                <label htmlFor="">
                  4.1 Applicants must meet all announced qualifications. The committee will review and announce the results of Round 1 based on supporting documents and self-introduction videos.
                </label>
              </li>
              <li>
                <label htmlFor="">
                  4.2 Applicants who pass Round 1 must take an English and basic digital skills test via the platform specified by the committee. The top three scorers from each district will proceed to Round 2.
                </label>
              </li>
              <li>
                <label htmlFor="">
                  4.3 Applicants who pass Round 2 must take an intermediate digital skills test via the platform specified by the committee. The highest scorer in each district will advance to Round 3, while the second and third highest scorers will be designated as alternates.
                </label>
              </li>
              <li>
                <label htmlFor="">
                  4.4 Applicants who pass Round 3 must participate in a lottery-based country/region assignment process, which will take place at a date, time, and location determined by the committee.
                </label>
              </li>
              <li>
                <label htmlFor="">
                  4.5 Applicants must undergo an interview process with the selection committee, categorized by country/region as assigned in the lottery process. If multiple courses are available for a particular country/region, the selection committee will assign courses based on applicant suitability.
                </label>
              </li>
              <li>
                <label htmlFor="">
                  4.6 If any selected applicant withdraws or fails the interview process, the right to selection will be transferred to the next alternate candidate from the respective district.
                </label>
              </li>
              <li>
                <label htmlFor="">
                  4.7 If no applicants are available from a certain district, selection rights will be granted to alternate candidates from other districts based on digital skills test scores (as per Section 4.3).
                </label>
              </li>
              <li>
                <label htmlFor="">
                  4.8 If a tie occurs in the ranking process or in any other unforeseen circumstances, the committee will determine additional selection criteria to ensure transparency and fairness. The committee's decision will be final.
                </label>
              </li>
              <br />
              <li>&nbsp;&nbsp;&nbsp;&nbsp;<a className="underline" href="/pdf/odos_consent_form.pdf">Privacy Notice (download)</a></li>
            </ul>
            <br />
            <h1 className="text-5xl font-bold mb-6 items-center text-center">
              Terms and Conditions for Participants
            </h1>
            <ul className="terms px-6">
              <li><label htmlFor="">5.1 Participants must sign a contract to be part of the youth program throughout its duration.</label></li>
              <li><label htmlFor="">5.2 Participants will receive full financial support to participate in program activities in the designated country/region, covering necessary living expenses.</label></li>
              <li><label htmlFor="">5.3 Participants must comply with all conditions and obligations set by the program.</label></li>
              <li><label htmlFor="">5.4 If a participant fails to adhere to the program’s terms, the committee has the right to suspend or terminate their participation.</label></li>
            </ul>
            <br />
            <h1 className="text-5xl font-bold mb-6 items-center text-center">
              Rules for Program Participation
            </h1>
            <ul className="rules px-6">
              <li><label htmlFor="">6.1 Participants must conduct themselves appropriately as representatives of Thailand and uphold the country's reputation.</label></li>
              <li><label htmlFor="">6.2 Participants must refrain from actions or statements that could damage the program, the office, or international relations.</label></li>
              <li><label htmlFor="">6.3 Participants must attend all program activities and follow all rules and regulations of the office and the educational institution.</label></li>
              <li><label htmlFor="">6.4 Participants must create a video report summarizing their activities within the program, following the details and deadlines specified by the committee.</label></li>
              <li><label htmlFor="">6.5 Participants must share their video reports (as per Section 6.4) to inspire youth and the public to enhance their skills.</label></li>
            </ul>
            <br />
            <h1 className="text-5xl font-bold mb-6 items-center text-center">
              Suspension or Termination of Participation
            </h1>
            <ul className="suspension px-6">
              <li><label htmlFor="">Participants may have their program status suspended or terminated under the following conditions:</label></li>
              <li><label htmlFor="">7.1 Disciplinary action due to violation of educational institution rules or legal infractions.</label></li>
              <li><label htmlFor="">7.2 Inappropriate behavior inconsistent with the values of the program, including failure to adhere to moral and cultural norms before or during the program.</label></li>
              <li><label htmlFor="">7.3 Failure to comply with program terms.</label></li>
              <li><label htmlFor="">7.4 Avoidance or negligence in attending mandatory program activities, orientations, training, or contract signings.</label></li>
              <li><label htmlFor="">7.5 Loss of contact with mentors during skill development sessions for over one day, or as determined by the office.</label></li>
              <li><label htmlFor="">7.6 Submission of false information or documentation, either before or during the program.</label></li>
              <li className="pl-10 px">
                <label htmlFor="">The committee has the authority to suspend or terminate program participation and disqualify the participant from future program cycles.</label>
              </li>
            </ul>
            <br />
            <div className="flex flex-col">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default InfoEN;