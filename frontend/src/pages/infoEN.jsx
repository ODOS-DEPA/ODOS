import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
import NavbarUnified from "../components/UnifiedNavbar";
import {useState} from "react";


/**
 * Renders the "Test Preparation" section with its unique layout.
 */
const TestPrepSection = () => (
  <div className="bg-yellow-50 p-6 border-l-4 border-yellow-400 shadow-md m-4 rounded-lg">
    <h2 className="text-2xl font-bold text-yellow-800 mb-2">
      Test Preparation Details
    </h2>
    <p className="mb-2">
      The English Proficiency and Basic Digital Skills Assessment will be available from 28 June to 6 July 2025 and the Intermediate Digital Skills Assessment will be available from 10 - 16 July 2025. You may take the test on any day and time that is convenient for you within this period. Please refer to the application status check system at <Link to="/check-status" className="font-bold underline">https://odos.thaigov.go.th/check-status</Link> for detailed instructions on how to access and complete the assessment. Please carefully follow all test guidelines. The system will record your video and audio during the test, and by taking the test, you consent to this recording for assessment purposes.
    </p>
    <p className="font-semibold mt-4">
      Preparing for the Test and Practice Session
    </p>
    <p className="mb-2">
      Before taking the test, please read the user guides for both the English and digital skills assessments carefully to understand the system and process.
    </p>
    <p className="mb-2">
      To help you feel confident and prepared, you can log in to the system to try a practice test for both the English and digital skills assessments.
    </p>

    <p className="font-semibold mt-4">Checklist Before the Test</p>
    <ul className="list-disc list-inside mb-2">
      <li>Prepare a computer, laptop, tablet, or smartphone with a working camera and microphone.</li>
      <li>Ensure your device is connected to a stable internet connection.</li>
      <li>Enable camera and microphone access on your device during the test.</li>
      <li>Find a quiet, private space where you will not be disturbed during the test.</li>
      <li>Have your national ID card ready for identity verification. By taking the test, you agree to the recording of your information for this purpose.</li>
    </ul>

    <p className="font-semibold mt-4">Test Rules During the Assessment</p>
    <p className="mb-2">
      You must complete the test in one sitting. The timer will not pause during the test, and the system will monitor for any irregular activities through video, audio, and screen tracking throughout the assessment.
    </p>
    <ul className="list-disc list-inside">
      <li>Dress appropriately in neat, respectful clothing.</li>
      <li>Close all communication apps (e.g., Line, Facebook) on your device before starting the test.</li>
      <li>Do not leave your seat until you have finished the test or the time has ended.</li>
      <li>Do not use any communication devices to interact with individuals not involved in the examination.</li>
      <li>Video and audio will be recorded to ensure the integrity of the test.</li>
      <li>Do not open or switch to other programs during the test, as the system will detect any screen changes.</li>
    </ul>
  </div>
);


/**
 * Renders a generic section with a title and a list of items.
 */
const InfoSection = ({ title, intro, items, className }) => (
  <>
    <br />
    <h1 className="text-5xl font-bold mb-6 items-center text-center">{title}</h1>
    {intro && <p className="px-4">{intro}</p>}
    <ul className={`${className} px-6`}>
      {items.map((item, index) => (
        <li key={index}>
          {typeof item === 'string' ? <label>{item}</label> : item}
        </li>
      ))}
    </ul>
  </>
);

/**
 * Renders the "Selection Criteria" section with its special flex layout.
 */
const CriteriaSection = ({ title, criteriaGroups }) => (
  <>
    <br />
    <h1 className="text-5xl font-bold mb-6 items-center text-center">{title}</h1>
    <div className="w-full md:w-4/5 mx-auto px-4">
      <ul className="list-none p-0 w-full">
        {criteriaGroups.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <li className="font-bold mt-4">{group.title}</li>
            {group.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-center py-2 border-b border-gray-200">
                <span className="flex-1">{item.name}</span>
                <span className="w-20 text-right font-bold">{item.value}</span>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
    </div>
  </>
);


// --- Data Structures ---
// All text content is stored here, separated from the component logic.

const qualificationsData = {
  title: "Qualifications for Applicants",
  intro: "As of March 24, 2025, applicants must meet the following qualifications:",
  className: "qualifications",
  items: [
    "1.1 Must be of Thai nationality",
    "1.2 Must be no older than 19 years",
    "1.3 Must have had a registered residence in any district of Thailand for at least 1 continuous year. If relocated within the past year, the previous residence must have been maintained for at least 1 continuous year.",
    "1.4 Must be a student currently enrolled in an educational institution in Thailand in the 2024 academic year, at the high school level, vocational certificate, higher vocational certificate (first-year), or first-year bachelor's degree or equivalent.",
    "1.5 Must have a cumulative GPA for the last two semesters of at least 2.50 (based on a grading system where A=4, B=3, C=2, D=1, E/F=0) or at least 62.5%.",
    "1.6 Must have a cumulative English GPA for the last two semesters of at least 3.00 (based on a grading system where A=4, B=3, C=2, D=1, E/F=0) or at least 75%.",
    "1.7 Must have good behavior, verified by a recommendation letter from the educational institution, advisor, or homeroom teacher.",
    "1.8 Must be in good physical and mental health, free from diseases that hinder education or contagious diseases that interfere with work, and must not be legally incapacitated.",
  ],
};

const documentsData = {
  title: "Required Documents for Applicant Selection",
  className: "documents",
  items: [
    "2.1 A recent front-facing photograph without a hat or glasses, plain background, taken within the last year from the application date.",
    "2.2 A copy of the applicant's national ID card and house registration.",
    "2.3 A copy of the national ID card and house registration of the parents or legal guardian.",
    // We can embed JSX directly for items with links
    <label>2.4 A consent letter from parents or legal guardian.&nbsp;&nbsp;<a className="underline" href="/pdf/GuardianConsentForm.pdf">(download)</a></label>,
    "2.5 A copy of the latest two-semester academic transcript.",
    "2.6 A certificate verifying student status or graduation.",
    "2.7 A recommendation letter on behavior from the educational institution, advisor, or homeroom teacher.",
    "2.8 A certificate or document proving achievement in digital technology-related activities (if any).",
    "2.9 A self-introduction video in English, sharing experiences, knowledge, abilities, goals, and expectations for the program, lasting no more than 2 minutes, with clear speech and no background noise, and a clearly visible face.",
    "2.10 Other relevant documents (if any), such as name change records, English or foreign language test results.",
  ],
};

const criteriaData = {
  title: "Selection Criteria",
  groups: [
    { title: "3.1 Evaluation criteria for Round 1:", items: [
      { name: "1) Cumulative GPA", value: "10%" },
      { name: "2) English GPA", value: "20%" },
      { name: "3) Digital experience and achievements", value: "30%" },
      { name: "4) Video presentation skills and attitude", value: "40%" },
    ]},
    { title: "3.2 Evaluation criteria for Round 2:", items: [
      { name: "1) English proficiency test", value: "50%" },
      { name: "2) Basic digital skills test", value: "50%" },
    ]},
    { title: "3.3 Evaluation criteria for Round 3:", items: [
      { name: "1) Intermediate digital skills test", value: "100%" },
    ]},
    { title: "3.4 Evaluation criteria for final selection:", items: [
      { name: "1) Attitude", value: "20%" },
      { name: "2) Problem-solving ability", value: "20%" },
      { name: "3) Communication skills", value: "20%" },
      { name: "4) Analytical thinking", value: "20%" },
      { name: "5) Personality", value: "20%" },
    ]},
  ],
};

const otherSectionsData = [
  {
    title: "Applicant Selection Process",
    className: "selection",
    items: [
      "4.1 Applicants must meet all announced qualifications. The committee will review and announce the results of Round 1 based on supporting documents and self-introduction videos.",
      "4.2 Applicants who pass Round 1 must take an English and basic digital skills test via the platform specified by the committee. The top three scorers from each district will proceed to Round 2.",
      "4.3 Applicants who pass Round 2 must take an intermediate digital skills test via the platform specified by the committee. The highest scorer in each district will advance to Round 3, while the second and third highest scorers will be designated as alternates.",
      "4.4 Applicants who pass Round 3 must participate in a lottery-based country/region assignment process, which will take place at a date, time, and location determined by the committee.",
      "4.5 Applicants must undergo an interview process with the selection committee, categorized by country/region as assigned in the lottery process. If multiple courses are available for a particular country/region, the selection committee will assign courses based on applicant suitability.",
      "4.6 If any selected applicant withdraws or fails the interview process, the right to selection will be transferred to the next alternate candidate from the respective district.",
      "4.7 If no applicants are available from a certain district, selection rights will be granted to alternate candidates from other districts based on digital skills test scores (as per Section 4.3).",
      "4.8 If a tie occurs in the ranking process or in any other unforeseen circumstances, the committee will determine additional selection criteria to ensure transparency and fairness. The committee's decision will be final.",
      <li key="privacy-link">&nbsp;&nbsp;&nbsp;&nbsp;<a className="underline" href="/pdf/odos_consent_form.pdf">Privacy Notice (download)</a></li>
    ]
  },
  {
    title: "Terms and Conditions for Participants",
    className: "terms",
    items: [
      "5.1 Participants must sign a contract to be part of the youth program throughout its duration.",
      "5.2 Participants will receive full financial support to participate in program activities in the designated country/region, covering necessary living expenses.",
      "5.3 Participants must comply with all conditions and obligations set by the program.",
      "5.4 If a participant fails to adhere to the program’s terms, the committee has the right to suspend or terminate their participation."
    ]
  },
  {
    title: "Rules for Program Participation",
    className: "rules",
    items: [
      "6.1 Participants must conduct themselves appropriately as representatives of Thailand and uphold the country's reputation.",
      "6.2 Participants must refrain from actions or statements that could damage the program, the office, or international relations.",
      "6.3 Participants must attend all program activities and follow all rules and regulations of the office and the educational institution.",
      "6.4 Participants must create a video report summarizing their activities within the program, following the details and deadlines specified by the committee.",
      "6.5 Participants must share their video reports (as per Section 6.4) to inspire youth and the public to enhance their skills."
    ]
  },
  {
    title: "Suspension or Termination of Participation",
    className: "suspension",
    items: [
      "Participants may have their program status suspended or terminated under the following conditions:",
      "7.1 Disciplinary action due to violation of educational institution rules or legal infractions.",
      "7.2 Inappropriate behavior inconsistent with the values of the program, including failure to adhere to moral and cultural norms before or during the program.",
      "7.3 Failure to comply with program terms.",
      "7.4 Avoidance or negligence in attending mandatory program activities, orientations, training, or contract signings.",
      "7.5 Loss of contact with mentors during skill development sessions for over one day, or as determined by the office.",
      "7.6 Submission of false information or documentation, either before or during the program.",
      <li key="final-clause" className="pl-10"><label>The committee has the authority to suspend or terminate program participation and disqualify the participant from future program cycles.</label></li>
    ]
  }
];


// --- Main Component ---
function InfoEN() {
  const [language, setLanguage] = useState("EN");

  return (
    <div className="LINESeed">
      {/* <Navbar /> */}
      <NavbarUnified language={language} setLanguage={setLanguage} />
      <ScrollToTop />
      
      <div>
        <img src="/images/info_sec1_banner_en.png" alt="Program Banner" />
      </div>

      <TestPrepSection />

      {/* Main content area */}
      <div id="qualifications"> {/* The id should be on a container */}
        <div className="flex flex-col">
          
          <InfoSection 
            title={qualificationsData.title}
            intro={qualificationsData.intro}
            items={qualificationsData.items}
            className={qualificationsData.className}
          />
          
          <InfoSection
            title={documentsData.title}
            items={documentsData.items}
            className={documentsData.className}
          />
          
          <CriteriaSection
            title={criteriaData.title}
            criteriaGroups={criteriaData.groups}
          />

          {/* Map over the remaining standard sections */}
          {otherSectionsData.map((section) => (
            <InfoSection
              key={section.title}
              title={section.title}
              items={section.items}
              className={section.className}
            />
          ))}

          <br />
          <div className="flex flex-col">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoEN;