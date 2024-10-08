import { useState, useEffect } from "react";
import axios from "axios";
// import { EXPO_PUBLIC_RAPID_API_KEY } from "@env";

export const sampleResponse = [
  {
    job_id: "fwy5VH19brSfJ9UMAAAAAA==",
    employer_name: "Data Wave Technologies Inc",
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR614xfDrGSY7gJr0CN-A8w2iqnDHMhqioUEC_4&s=0",
    employer_website: "http://www.datawavetechnologies.com",
    employer_company_type: null,
    employer_linkedin: null,
    job_publisher: "Dice.com",
    job_employment_type: "CONTRACTOR",
    job_title: "Sr React Native Developer",
    job_apply_link:
      "https://www.dice.com/job-detail/7ac55481-92fd-4518-8405-4bc004f83f7a?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    job_apply_is_direct: true,
    job_apply_quality_score: 0.5707,
    apply_options: [
      {
        publisher: "Dice.com",
        apply_link:
          "https://www.dice.com/job-detail/7ac55481-92fd-4518-8405-4bc004f83f7a?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: true,
      },
      {
        publisher: "Talent.com",
        apply_link:
          "https://www.talent.com/view?id=4b3fad936032&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "JavaScript Jobs",
        apply_link:
          "https://javascriptjob.xyz/job/2mepIDgD8hXHBdydjmck0NwXYCt/React%20Native%20Developer?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "RemoteAmbition",
        apply_link:
          "https://remoteambition.com/jobs/c8f838c6-6c3c-4009-ac21-72d8dd2c4ae3?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
    ],
    job_description:
      'Job Title: Sr React Native Developer\n\nLocation: Memphis TN, Austin TX, St. Louis MO, Morris Plains NJ, Hartford CT,\n\nDuration: Long term\n\nTax Term: W2\n\nJob Description:\n\nKey Technology: React Native, HTML, CSS, REST, JavaScript\n\nJob Responsibilities:\n• Design, deploy, and manage web and mobile applications that can run on multiple platforms.\n• Use React Native to design and develop UI components for web and mobile apps based on JavaScript.\n• Write effective, scalable, and reusable JavaScript code can help create interchangeable front-end modules.\n• Improve front-end performance by diagnosing and fixing all system errors and bugs.\n• Use other JavaScript libraries (like "Redux") to make asynchronous API calls and enhance website/mobile app performance.\n• Create plans to transition React-based web and mobile apps to React Native.\n• Plan the data and presentation layer for the front end of all applications.\n• Collaborate with design, development, and customer service teams to properly understand client requirements and build top-notch apps within the stipulated time and budget.\n\nSkills and Experience Required:\n\nRequired\n• 8 years of hands-on experience as a React Native Engineer or in a similar role.\n• Good working knowledge of HTML and CSS.\n• Well-versed in all aspects of JavaScript.\n• In-depth knowledge of UI/UX designs and wireframes.\n• Possess an expert-level understanding of React.js and its fundamentals.\n• Familiar with Gradle, XCode, and other native build tools.\n• Experience working with automated testing suites like Mocha, Jest, etc.\n• Deep understanding of REST APIs, offline storage, and the document request model.\n\nEducation:\n• Bachelor\'s degree in Computer Science, Computer/Management Information Systems, Information Technology, Software Engineering, or an associated field',
    job_is_remote: false,
    job_posted_at_timestamp: 1728335719,
    job_posted_at_datetime_utc: "2024-10-07T21:15:19.000Z",
    job_city: "Memphis",
    job_state: "TN",
    job_country: "US",
    job_latitude: 35.149536,
    job_longitude: -90.04898,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&udm=8#vhid=vt%3D20/docid%3Dfwy5VH19brSfJ9UMAAAAAA%3D%3D&vssid=jobs-detail-viewer",
    job_offer_expiration_datetime_utc: "2024-11-07T22:15:19.000Z",
    job_offer_expiration_timestamp: 1731017719,
    job_required_experience: {
      no_experience_required: "false",
      required_experience_in_months: "96",
      experience_mentioned: "true",
      experience_preferred: "false",
    },
    job_required_skills: ["javascript", "React Native", "TypeScript"],
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: false,
      degree_mentioned: "true",
      degree_preferred: "true",
      professional_certification_mentioned: "false",
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {
      Qualifications: [
        "8 years of hands-on experience as a React Native Engineer or in a similar role",
        "Good working knowledge of HTML and CSS",
        "Well-versed in all aspects of JavaScript",
        "In-depth knowledge of UI/UX designs and wireframes",
        "Possess an expert-level understanding of React.js and its fundamentals",
        "Familiar with Gradle, XCode, and other native build tools",
        "Experience working with automated testing suites like Mocha, Jest, etc",
        "Deep understanding of REST APIs, offline storage, and the document request model",
        "Bachelor's degree in Computer Science, Computer/Management Information Systems, Information Technology, Software Engineering, or an associated field",
      ],
      Responsibilities: [
        "Design, deploy, and manage web and mobile applications that can run on multiple platforms",
        "Use React Native to design and develop UI components for web and mobile apps based on JavaScript",
        "Write effective, scalable, and reusable JavaScript code can help create interchangeable front-end modules",
        "Improve front-end performance by diagnosing and fixing all system errors and bugs",
        'Use other JavaScript libraries (like "Redux") to make asynchronous API calls and enhance website/mobile app performance',
        "Create plans to transition React-based web and mobile apps to React Native",
        "Plan the data and presentation layer for the front end of all applications",
        "Collaborate with design, development, and customer service teams to properly understand client requirements and build top-notch apps within the stipulated time and budget",
      ],
    },
    job_job_title: null,
    job_posting_language: "en",
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
  {
    job_id: "QIJsduIbApAYArkzAAAAAA==",
    employer_name: "Smart IT Frame LLC",
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCEBwMxKuwXeCV7wXcN2fJwznwXUZHxKwz2wnq&s=0",
    employer_website: null,
    employer_company_type: null,
    employer_linkedin: null,
    job_publisher: "LinkedIn",
    job_employment_type: "CONTRACTOR",
    job_title: "Mobile Developer with React Native",
    job_apply_link:
      "https://www.linkedin.com/jobs/view/mobile-developer-with-react-native-at-smart-it-frame-llc-4043508015?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.6271,
    apply_options: [
      {
        publisher: "LinkedIn",
        apply_link:
          "https://www.linkedin.com/jobs/view/mobile-developer-with-react-native-at-smart-it-frame-llc-4043508015?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
    ],
    job_description:
      "Role: React Native Developer\n\nLocation: Minneapolis, MN (Remote)\n\nDuration: Long Term\n\nJob Description:\n\nBachelor’s degree in Computer Science, Engineering, or related field, or equivalent practical experience\n\n6+ years of professional experience in software development\n\nProven experience with React Native development for web and mobile (iOS and Android) platforms\n\nStrong proficiency in JavaScript, TypeScript, and ES6+ features\n\nExperience with state management libraries such as Redux or MobX\n\nFamiliarity with RESTful APIs, GraphQL, and third-party libraries and APIs\n\nSolid understanding of mobile development lifecycle and best practices\n\nExperience with version control systems, such as Git\n\nKnowledge of modern front-end build pipelines and tools\n\nUnderstanding of mobile-specific UI/UX design principles and guidelines for both iOS and Android\n\nExperience with native build tools, like XCode, Android Studio, Gradle (Android), and CocoaPods (iOS)\n\nStrong problem-solving skills and ability to troubleshoot issues across platforms\n\nExcellent communication and teamwork skills\n\nAbility to work independently and manage multiple tasks effectively.",
    job_is_remote: false,
    job_posted_at_timestamp: 1728339190,
    job_posted_at_datetime_utc: "2024-10-07T22:13:10.000Z",
    job_city: "Minneapolis",
    job_state: "MN",
    job_country: "US",
    job_latitude: 44.977753,
    job_longitude: -93.26501,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&udm=8#vhid=vt%3D20/docid%3DQIJsduIbApAYArkzAAAAAA%3D%3D&vssid=jobs-detail-viewer",
    job_offer_expiration_datetime_utc: "2024-11-06T22:13:10.000Z",
    job_offer_expiration_timestamp: 1730931190,
    job_required_experience: {
      no_experience_required: "false",
      required_experience_in_months: "72",
      experience_mentioned: "true",
      experience_preferred: "false",
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: "false",
      professional_certification: "false",
      high_school: "false",
      associates_degree: "false",
      bachelors_degree: "true",
      degree_mentioned: "true",
      degree_preferred: "true",
      professional_certification_mentioned: "false",
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {
      Qualifications: [
        "Bachelor’s degree in Computer Science, Engineering, or related field, or equivalent practical experience",
        "6+ years of professional experience in software development",
        "Proven experience with React Native development for web and mobile (iOS and Android) platforms",
        "Strong proficiency in JavaScript, TypeScript, and ES6+ features",
        "Experience with state management libraries such as Redux or MobX",
        "Familiarity with RESTful APIs, GraphQL, and third-party libraries and APIs",
        "Solid understanding of mobile development lifecycle and best practices",
        "Experience with version control systems, such as Git",
        "Knowledge of modern front-end build pipelines and tools",
        "Understanding of mobile-specific UI/UX design principles and guidelines for both iOS and Android",
        "Experience with native build tools, like XCode, Android Studio, Gradle (Android), and CocoaPods (iOS)",
        "Strong problem-solving skills and ability to troubleshoot issues across platforms",
        "Excellent communication and teamwork skills",
        "Ability to work independently and manage multiple tasks effectively",
      ],
    },
    job_job_title: null,
    job_posting_language: "en",
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
  {
    job_id: "UU2wpTNVwX62GuwBAAAAAA==",
    employer_name: "EliteHire Solutions",
    employer_logo: null,
    employer_website: null,
    employer_company_type: null,
    employer_linkedin: null,
    job_publisher: "Glassdoor",
    job_employment_type: "FULLTIME",
    job_title: "React Native Developer (Arizona)",
    job_apply_link:
      "https://www.glassdoor.com/job-listing/react-native-developer-arizona-elitehire-solutions-JV_IC1133911_KO0,30_KE31,50.htm?jl=1009477223618&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    job_apply_is_direct: true,
    job_apply_quality_score: 0.5641,
    apply_options: [
      {
        publisher: "Glassdoor",
        apply_link:
          "https://www.glassdoor.com/job-listing/react-native-developer-arizona-elitehire-solutions-JV_IC1133911_KO0,30_KE31,50.htm?jl=1009477223618&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: true,
      },
      {
        publisher: "SimplyHired",
        apply_link:
          "https://www.simplyhired.com/job/FeaGu7aiuLn-ueuzOhngWO8vfRLn7ZvbyVLpuN5rFCZqABT4e1P2HQ?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "Salary.com",
        apply_link:
          "https://www.salary.com/job/elitehire-solutions/react-native-developer/j202410070403349152003?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "Impressive Hiring",
        apply_link:
          "https://impressivehiring.com/viewlistings/av7y5smw0dzi-033888e8-f8fed5b-4e9164f479-fcb0a2d?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
    ],
    job_description:
      "Job Title: React Native Developer\n\nJob Description: EliteHire Solutions is recruiting on behalf of our client, an innovative automotive start-up dedicated to revolutionizing the way car enthusiasts connect with their vehicles. Their mission is to make the process of customizing and modifying cars more accessible, enjoyable, and personalized. This is an exciting opportunity for a developer looking to join a fast-growing startup and make a significant impact.\n\nYou will be part of a dynamic team, helping to build a mobile app that mirrors the functionality of a complex web application. You will collaborate closely with the development team to ensure seamless integration and feature parity between the mobile app and the web platform.\n\nResponsibilities:\n• Develop and maintain a React Native mobile app that mirrors the features of an existing NextJS web application.\n• Collaborate with the web development team to ensure consistency between the web and mobile experiences.\n• Integrate third-party APIs and services, ensuring smooth performance across both iOS and Android platforms.\n• Build reusable components and front-end libraries for future use.\n• Optimize the app for maximum performance, speed, and scalability.\n• Work closely with UX/UI designers to implement intuitive and user-friendly interfaces.\n• Ensure the app adheres to mobile development best practices, including accessibility, security, and responsiveness.\n\nTechnical Requirements:\n• React Native Experience: 3+ years of professional experience building production-level applications using React Native.\n• JavaScript/TypeScript: Strong proficiency in JavaScript and TypeScript for building scalable and maintainable apps.\n• Mobile Development: Experience with mobile app development for both iOS and Android, including knowledge of platform-specific requirements.\n• API Integration: Proven experience integrating RESTful APIs, GraphQL, and third-party services.\n• State Management: Expertise in state management libraries like Redux, MobX, or Context API.\n• Performance Optimization: Familiarity with mobile performance optimization techniques, including memory management, animations, and load time reduction.\n• Testing: Experience with mobile app testing frameworks (e.g., Jest, Detox, or Appium).\n• Version Control: Proficiency with Git, including working with branches and pull requests in a collaborative team environment.\n• Deployment: Experience with app store submission processes for both Apple App Store and Google Play Store.\n\nPreferred Qualifications:\n• NextJS Experience: Familiarity with NextJS or other React-based web frameworks, particularly for ensuring feature parity with the web app.\n• Native Modules: Experience developing or integrating custom native modules for React Native.\n• Push Notifications: Hands-on experience with integrating push notifications and background processing.\n• Continuous Integration: Familiarity with CI/CD tools (e.g., Fastlane, Bitrise) for mobile app deployment.\n• Mobile Design Guidelines: Knowledge of mobile design principles and platform-specific UI patterns (e.g., Material Design for Android, Human Interface Guidelines for iOS).\n\nJoin our client in building something special, working on an app that will help car enthusiasts customize and modify their vehicles like never before!\n\nEEO Statement:\n\nIt is the policy of EliteHire not to discriminate against any applicant for employment, or any employee because of age, color, sex, disability, national origin, race, religion, or veteran status.\n\nJob Type: Full-time\n\nPay: $98,394.00 - $104,748.00 per year\n\nBenefits:\n• Dental insurance\n• Health insurance\n• Paid time off\n\nSchedule:\n• 8 hour shift\n\nExperience:\n• React Native: 3 years (Required)\n• API Integration: RESTful APIs, GraphQL: 1 year (Required)\n• JavaScript: 2 years (Required)\n• Mobile applications: 2 years (Required)\n\nAbility to Relocate:\n• Scottsdale, AZ: Relocate before starting work (Required)\n\nWork Location: In person",
    job_is_remote: false,
    job_posted_at_timestamp: 1728259200,
    job_posted_at_datetime_utc: "2024-10-07T00:00:00.000Z",
    job_city: "Scottsdale",
    job_state: "AZ",
    job_country: "US",
    job_latitude: 33.494877,
    job_longitude: -111.92168,
    job_benefits: ["paid_time_off", "health_insurance", "dental_coverage"],
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&udm=8#vhid=vt%3D20/docid%3DUU2wpTNVwX62GuwBAAAAAA%3D%3D&vssid=jobs-detail-viewer",
    job_offer_expiration_datetime_utc: "2025-02-04T00:00:00.000Z",
    job_offer_expiration_timestamp: 1738627200,
    job_required_experience: {
      no_experience_required: "false",
      required_experience_in_months: "36",
      experience_mentioned: "true",
      experience_preferred: "false",
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: false,
      degree_mentioned: "false",
      degree_preferred: "false",
      professional_certification_mentioned: "false",
    },
    job_experience_in_place_of_education: "false",
    job_min_salary: 98394,
    job_max_salary: 104748,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {
      Qualifications: [
        "React Native Experience: 3+ years of professional experience building production-level applications using React Native",
        "JavaScript/TypeScript: Strong proficiency in JavaScript and TypeScript for building scalable and maintainable apps",
        "Mobile Development: Experience with mobile app development for both iOS and Android, including knowledge of platform-specific requirements",
        "API Integration: Proven experience integrating RESTful APIs, GraphQL, and third-party services",
        "State Management: Expertise in state management libraries like Redux, MobX, or Context API",
        "Performance Optimization: Familiarity with mobile performance optimization techniques, including memory management, animations, and load time reduction",
        "Testing: Experience with mobile app testing frameworks (e.g., Jest, Detox, or Appium)",
        "Version Control: Proficiency with Git, including working with branches and pull requests in a collaborative team environment",
        "Deployment: Experience with app store submission processes for both Apple App Store and Google Play Store",
        "API Integration: RESTful APIs, GraphQL: 1 year (Required)",
        "JavaScript: 2 years (Required)",
        "Mobile applications: 2 years (Required)",
        "Scottsdale, AZ: Relocate before starting work (Required)",
      ],
      Responsibilities: [
        "You will be part of a dynamic team, helping to build a mobile app that mirrors the functionality of a complex web application",
        "You will collaborate closely with the development team to ensure seamless integration and feature parity between the mobile app and the web platform",
        "Develop and maintain a React Native mobile app that mirrors the features of an existing NextJS web application",
        "Collaborate with the web development team to ensure consistency between the web and mobile experiences",
        "Integrate third-party APIs and services, ensuring smooth performance across both iOS and Android platforms",
        "Build reusable components and front-end libraries for future use",
        "Optimize the app for maximum performance, speed, and scalability",
        "Work closely with UX/UI designers to implement intuitive and user-friendly interfaces",
        "Ensure the app adheres to mobile development best practices, including accessibility, security, and responsiveness",
      ],
      Benefits: [
        "Pay: $98,394.00 - $104,748.00 per year",
        "Dental insurance",
        "Health insurance",
        "Paid time off",
      ],
    },
    job_job_title: null,
    job_posting_language: "en",
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
  {
    job_id: "Y88Siup3g2PjipoCAAAAAA==",
    employer_name: "Info Way Solutions",
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dnYZKFN7akNCaoFuUvfm4GNTxS3wtOltpTeQ&s=0",
    employer_website: null,
    employer_company_type: null,
    employer_linkedin: null,
    job_publisher: "LinkedIn",
    job_employment_type: "CONTRACTOR",
    job_title: "React Native Developer",
    job_apply_link:
      "https://www.linkedin.com/jobs/view/react%C2%A0native%C2%A0developer%C2%A0%C2%A0%C2%A0-at-info-way-solutions-4041402080?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.7197,
    apply_options: [
      {
        publisher: "LinkedIn",
        apply_link:
          "https://www.linkedin.com/jobs/view/react%C2%A0native%C2%A0developer%C2%A0%C2%A0%C2%A0-at-info-way-solutions-4041402080?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "Iitjobs",
        apply_link:
          "https://www.iitjobs.com/job/react-native-developer-bentonville-ar-usa-the-titan-organization-53456?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "ZipRecruiter",
        apply_link:
          "https://www.ziprecruiter.com/c/Info-Way-Solutions/Job/React-Native-developer/-in-Bentonville,AR?jid=0e7c20b1899854d6&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "Indeed",
        apply_link:
          "https://www.indeed.com/viewjob?jk=0212a6d2b7eda618&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "SaluteMyJob",
        apply_link:
          "https://salutemyjob.com/jobs/react-native-developer-bentonville-arkansas/1462235571-2/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "Jobs",
        apply_link:
          "https://jobs.forces.net/jobs/react-native-developer-bentonville-arkansas/1462235590-2/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "KHON2 Jobs",
        apply_link:
          "https://jobs.khon2.com/jobs/react-native-developer-bentonville-arkansas/1462235590-2/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "Ladders",
        apply_link:
          "https://www.theladders.com/job-listing/react-native-developer-info-way-solutions-bentonville-ar-_v2_-7-401800181.html?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
    ],
    job_description:
      "Job Title: React Native Developer\n\nLocation: Bentonville, AR(Onsite)\n\nMandatory Skill: Need strong experience in React native\n\nResponsibilities\n\nDeveloping new user experiences using React.js\n\nBuilding reusable components and front-end libraries for future use\n\nManaging complexity in the face of a sophisticated set of business requirements\n\nEnsuring that code is well-tested and in line with best practices\n\nSkills\n\nProficiency in JavaScript and browser APIs\n\nStrong grasp of React fundamentals\n\nExperience with unit and integration testing React codebases. Experience with RTL, Jest, and testCafe is a plus\n\nFamiliarity with integrating React UIs with backend APIs; experience\n\nAbility to understand business requirements and translate them into technical requirements.",
    job_is_remote: false,
    job_posted_at_timestamp: 1727903785,
    job_posted_at_datetime_utc: "2024-10-02T21:16:25.000Z",
    job_city: "Bentonville",
    job_state: "AR",
    job_country: "US",
    job_latitude: 36.372356,
    job_longitude: -94.21021,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&udm=8#vhid=vt%3D20/docid%3DY88Siup3g2PjipoCAAAAAA%3D%3D&vssid=jobs-detail-viewer",
    job_offer_expiration_datetime_utc: "2024-11-01T21:16:25.000Z",
    job_offer_expiration_timestamp: 1730495785,
    job_required_experience: {
      no_experience_required: "false",
      required_experience_in_months: null,
      experience_mentioned: "true",
      experience_preferred: "true",
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: "false",
      professional_certification: "false",
      high_school: "false",
      associates_degree: "false",
      bachelors_degree: "true",
      degree_mentioned: "false",
      degree_preferred: "false",
      professional_certification_mentioned: "false",
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {
      Qualifications: [
        "Mandatory Skill: Need strong experience in React native",
        "Proficiency in JavaScript and browser APIs",
        "Strong grasp of React fundamentals",
        "Experience with unit and integration testing React codebases",
        "Familiarity with integrating React UIs with backend APIs; experience",
        "Ability to understand business requirements and translate them into technical requirements",
      ],
      Responsibilities: [
        "Developing new user experiences using React.js",
        "Building reusable components and front-end libraries for future use",
        "Managing complexity in the face of a sophisticated set of business requirements",
      ],
    },
    job_job_title: null,
    job_posting_language: "en",
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
  {
    job_id: "sA-Fww5g_8KxLEn4AAAAAA==",
    employer_name: "Upwork",
    employer_logo: null,
    employer_website: null,
    employer_company_type: null,
    employer_linkedin: null,
    job_publisher: "Upwork",
    job_employment_type: "CONTRACTOR",
    job_title: "React Native Developer -  Receipt Print-Out Format",
    job_apply_link:
      "https://www.upwork.com/freelance-jobs/apply/React-Native-Developer-Receipt-Print-Out-Format_~021843293746151292551/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    job_apply_is_direct: true,
    job_apply_quality_score: 0.6852,
    apply_options: [
      {
        publisher: "Upwork",
        apply_link:
          "https://www.upwork.com/freelance-jobs/apply/React-Native-Developer-Receipt-Print-Out-Format_~021843293746151292551/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: true,
      },
    ],
    job_description:
      "We have an online ordering platform consisting of a website and a mobile App that works in tandem to serve our clients business to receive orders from their customers. We provide our clients with an Android app allowing them to retrieve their orders, print them out and update their status.\n\nAfter a recent update, the print-out format has changed with increased font size, additional zeroes and curly brackets appearing. We are unsure if this is just a formatting issue that requires a change in the code or if an incorrect piece of syntax is causing the issue. We are looking for a developer well experienced in react-native to find and clear this issue or update the layout of the print-outs to be the same as before",
    job_is_remote: true,
    job_posted_at_timestamp: 1728310450,
    job_posted_at_datetime_utc: "2024-10-07T14:14:10.000Z",
    job_city: null,
    job_state: null,
    job_country: "US",
    job_latitude: 38.794594,
    job_longitude: -106.534836,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&udm=8#vhid=vt%3D20/docid%3DsA-Fww5g_8KxLEn4AAAAAA%3D%3D&vssid=jobs-detail-viewer",
    job_offer_expiration_datetime_utc: null,
    job_offer_expiration_timestamp: null,
    job_required_experience: {
      no_experience_required: "false",
      required_experience_in_months: null,
      experience_mentioned: "true",
      experience_preferred: "false",
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: false,
      degree_mentioned: "false",
      degree_preferred: "false",
      professional_certification_mentioned: "false",
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {},
    job_job_title: null,
    job_posting_language: "en",
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
  {
    job_id: "LOKjri3f9KiAv0hNAAAAAA==",
    employer_name: "Ursus, Inc.",
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmV8n6iPSVOgWogWi3snVTnwoYsax-8pio1xms&s=0",
    employer_website: null,
    employer_company_type: null,
    employer_linkedin: null,
    job_publisher: "LinkedIn",
    job_employment_type: "CONTRACTOR",
    job_title: "React Native Developer",
    job_apply_link:
      "https://www.linkedin.com/jobs/view/react-native-developer-at-ursus-inc-4039704694?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.6409,
    apply_options: [
      {
        publisher: "LinkedIn",
        apply_link:
          "https://www.linkedin.com/jobs/view/react-native-developer-at-ursus-inc-4039704694?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "ZipRecruiter",
        apply_link:
          "https://www.ziprecruiter.com/c/Ursus,-Inc./Job/React-Native-Developer/-in-Pleasanton,CA?jid=df6b518c79d133b7&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: true,
      },
      {
        publisher: "Talentify",
        apply_link:
          "https://www.talentify.io/job/react-native-developer-pleasanton-california-us-ursus-24-02218?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "Talent.com",
        apply_link:
          "https://www.talent.com/view?id=55569f7baa17&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "Advertising Jobs",
        apply_link:
          "https://advertisingjobs.info/job/react-native-developer-tampa-creative-financial-s-4-j3v4pk5v-united-states/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "Entrepreneurship Jobs",
        apply_link:
          "https://entrepreneurshipjobs.info/job/react-native-developer-atlanta-georgia-diverse-lynx-201916251-united-states/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "Locum Jobs",
        apply_link:
          "https://locumjobs.info/job/react-native-developer--bentonville-info-way-solutions-10440-4041-united-states/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "Jobilize",
        apply_link:
          "https://www.jobilize.com/job/us-ca-pleasanton-react-native-developer-ursus-hiring-now-job-immediately?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
    ],
    job_description:
      "JOB TITLE: React Native Developer\nLOCATION: Pleasanton, CA\nDURATION: 4-6 week contract to hire\nRATE RANGE: 85-95/hr\n\nSUMMARY:\n\nWe are looking for a senior React Native Developer to join our team. In this role, you will lead the development of high-quality mobile applications for both iOS and Android platforms, mentor junior developers, and contribute to architectural decisions.\n\nRESPONSIBILITIES:\n• Develop and maintain mobile applications using React Native.\n• Mentor junior developers, providing guidance on best practices and code quality.\n• Collaborate with cross-functional teams to define, design, and ship new features.\n• Optimize application performance and ensure the high-quality standards of code\n• Write clean and maintainable code with a focus on testing and documentation.\n• Ensure the performance, quality, and responsiveness of applications.\n• Troubleshoot and resolve issues in a timely manner.\n• Stay updated with the latest industry trends, tools, and technologies to keep the team ahead of the curve.\n\nQUALIFICATIONS:\n• Bachelor's degree in computer science, Engineering, or related field\n• 10+ years' experience as a React Native Developer\n• Launched at least 2 mobile apps on iOS and Android platforms\n• Strong hands-on development skills with Typescript or Javascript\n• Deep understanding of enterprise mobile application architecture\n• Experience with Redux or other state management libraries\n• Familiarity with RESTful APIs, GraphQL and third-party libraries.\n• Hands on experience using Client Kit and other related libraries\n• Good experience with build tools: Xcode\n• Experience with testing frameworks (e.g., Jest, Detox)\n• Understanding of enterprise app deployment and distribution process\n\nIND123",
    job_is_remote: false,
    job_posted_at_timestamp: 1727908813,
    job_posted_at_datetime_utc: "2024-10-02T22:40:13.000Z",
    job_city: "Pleasanton",
    job_state: "CA",
    job_country: "US",
    job_latitude: 37.66045,
    job_longitude: -121.87579,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&udm=8#vhid=vt%3D20/docid%3DLOKjri3f9KiAv0hNAAAAAA%3D%3D&vssid=jobs-detail-viewer",
    job_offer_expiration_datetime_utc: "2025-04-04T20:20:05.000Z",
    job_offer_expiration_timestamp: 1743798005,
    job_required_experience: {
      no_experience_required: "false",
      required_experience_in_months: "120",
      experience_mentioned: "true",
      experience_preferred: "false",
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: "false",
      professional_certification: "false",
      high_school: "false",
      associates_degree: "false",
      bachelors_degree: "true",
      degree_mentioned: "true",
      degree_preferred: "true",
      professional_certification_mentioned: "false",
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {
      Qualifications: [
        "Bachelor's degree in computer science, Engineering, or related field",
        "10+ years' experience as a React Native Developer",
        "Launched at least 2 mobile apps on iOS and Android platforms",
        "Strong hands-on development skills with Typescript or Javascript",
        "Deep understanding of enterprise mobile application architecture",
        "Experience with Redux or other state management libraries",
        "Familiarity with RESTful APIs, GraphQL and third-party libraries",
        "Hands on experience using Client Kit and other related libraries",
        "Good experience with build tools: Xcode",
        "Experience with testing frameworks (e.g., Jest, Detox)",
        "Understanding of enterprise app deployment and distribution process",
      ],
      Responsibilities: [
        "In this role, you will lead the development of high-quality mobile applications for both iOS and Android platforms, mentor junior developers, and contribute to architectural decisions",
        "Develop and maintain mobile applications using React Native",
        "Mentor junior developers, providing guidance on best practices and code quality",
        "Collaborate with cross-functional teams to define, design, and ship new features",
        "Optimize application performance and ensure the high-quality standards of code",
        "Write clean and maintainable code with a focus on testing and documentation",
        "Ensure the performance, quality, and responsiveness of applications",
        "Troubleshoot and resolve issues in a timely manner",
        "Stay updated with the latest industry trends, tools, and technologies to keep the team ahead of the curve",
      ],
    },
    job_job_title: null,
    job_posting_language: "en",
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
  {
    job_id: "hNyw166Zt5hNXnc1AAAAAA==",
    employer_name: "OTR Solutions",
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp2Yn-4osjvaRHR9Z2LPFLWEvl7Yyn-ErP-x8g&s=0",
    employer_website: "http://otrcapital.com",
    employer_company_type: null,
    employer_linkedin: null,
    job_publisher: "SitePoint",
    job_employment_type: "FULLTIME",
    job_title: "Senior React Native Developer",
    job_apply_link:
      "https://www.sitepoint.com/jobs-for-developers/otr-solutions/senior-react-native-developer-306339/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.5734,
    apply_options: [
      {
        publisher: "SitePoint",
        apply_link:
          "https://www.sitepoint.com/jobs-for-developers/otr-solutions/senior-react-native-developer-306339/?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
    ],
    job_description:
      "OTR Solutions is an innovator in the transportation industry providing a suite of factoring, fuel, and business management focused solutions. We help new and established companies get fast access to the funds they need for daily operations. As a Private Equity backed FinTech company, we are looking to grow our best-in-class financial organization. We are at the beginning of the development of a new Cloud-Native platform that will drive the next wave of innovation in the industry and fuel OTRs growth. We are looking for growth minded, collaborative technologist who loves to create, innovate, and learn cutting-edge solutions on the latest and greatest technology. OTR has been recognized as a Top Workplace by the Atlanta Journal-Constitution since 2016 The Senior React Native Developer will take ownership of the design and development of mobile applications our clients rely on daily. The Senior React Native Developer position will be a member of a growing technology team working with developers on the architecture, design, development, and deployment of our mobile product. This is an exciting role and opportunity to be part of a fast-growing business, grow with a team and have a direct impact on technology direction and growth of the business. Please note: We do not sponsor work-related visas. Responsibilities: Work with a team of mobile developers to design and develop mobile application features Contribute to the architecture design of a mobile application and associated services Perform requirements analysis, detail design, troubleshooting, source code construction, system testing, integration testing and implementation for reports. Designing and writing software technical specifications, writing software code and performing unit testing Applying current technology to solve technical problems and ensuring system and application performance is optimized Working with business units to improve efficiency and remove barriers in applications Working with product teams on new product ideas, designs, prototypes and estimates Maintaining coding standards to facilitate code maintenance and enhancement Contribute to Mobile App deployments to the Apple and Google Play App Stores What we look for: BS in Computer Science or other related field of study and applicable work experience Minimum 3 years of experience on a team developing in C# preferred Experience with Node.js, React Native and .NET Experience as a software developer on production project Strong understanding of OOD and APIs The ability to identify and write appropriate tests leveraging mocking/spying frameworks for isolation of the subject component Familiarity with SCRUM as a development method for Agile Development Strong teamwork orientation and the ability to foster collaboration within and across teams Perks and Benefits: OTR provides a competitive, comprehensive compensation package for our full-time employees: Eligibility for Individual and Company bonus programs Medical, Dental, Vision, Life/ AD&D Insurance, Short-Term Disability Pet Insurance, Paid Family Leave, Employee Assistance Program Fully Paid Maternity Leave 401(k) with Company Matching Generous PTO, Sick/Mental Health Days, Flex Holidays Company Paid Holidays Travel Stipend to support Work Life Balance Leadership Development and Training Continuous Learning Professional enhancements Weekly Catered Lunches Casual Dress Code Company Paid Fitness Membership Volunteer Days and Opportunities with Company-Partnered Charities Internal Inclusion programs OTRs mission is to create exceptional value for our clients by providing industry leading financing and back-office solutions. Three pillars that are crucial to supporting that mission are outstanding customer service, technology that creates efficiency for ourselves and our customers, and a culture that provides the opportunity for employees to achieve greatness. OTR Solutions is an Equal Opportunity Employer",
    job_is_remote: false,
    job_posted_at_timestamp: 1728172800,
    job_posted_at_datetime_utc: "2024-10-06T00:00:00.000Z",
    job_city: "Sandy Plains",
    job_state: "GA",
    job_country: "US",
    job_latitude: 34.013157,
    job_longitude: -84.49548,
    job_benefits: ["paid_time_off", "dental_coverage", "retirement_savings"],
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&udm=8#vhid=vt%3D20/docid%3DhNyw166Zt5hNXnc1AAAAAA%3D%3D&vssid=jobs-detail-viewer",
    job_offer_expiration_datetime_utc: "2024-11-05T00:00:00.000Z",
    job_offer_expiration_timestamp: 1730764800,
    job_required_experience: {
      no_experience_required: "false",
      required_experience_in_months: "36",
      experience_mentioned: "true",
      experience_preferred: "true",
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: false,
      professional_certification: false,
      high_school: false,
      associates_degree: false,
      bachelors_degree: false,
      degree_mentioned: "true",
      degree_preferred: "true",
      professional_certification_mentioned: "false",
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {},
    job_job_title: "Senior",
    job_posting_language: "en",
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
  {
    job_id: "uuy4jWaF3fL7rE4aAAAAAA==",
    employer_name: "Cynet Systems",
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgklzUjF7tTJZ_EbFAABfI0LYU-lRwZlQIXll&s=0",
    employer_website: "http://www.cynetsystems.com",
    employer_company_type: null,
    employer_linkedin: null,
    job_publisher: "LinkedIn",
    job_employment_type: "CONTRACTOR",
    job_title: "React Native Developer - Remote / Telecommute",
    job_apply_link:
      "https://www.linkedin.com/jobs/view/react-native-developer-remote-telecommute-at-cynet-systems-3998884609?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.6287,
    apply_options: [
      {
        publisher: "LinkedIn",
        apply_link:
          "https://www.linkedin.com/jobs/view/react-native-developer-remote-telecommute-at-cynet-systems-3998884609?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "Talentify",
        apply_link:
          "https://www.talentify.io/job/ux-designer-remote-telecommute-bentonville-arkansas-us-cynet-systems-inc-24-18483?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
      {
        publisher: "Jobilize",
        apply_link:
          "https://www.jobilize.com/job/us-ar-bentonville-netezza-database-administration-remote-telecommute?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
    ],
    job_description:
      "Job Description: Requirement:\n• 6+ years of experience in IT with 3+ years of experience in React Native frame work and preferable experience with iOS and Android native coding.\n• Solid experience in large scale distributed systems and event-driven architectures.\n• Experience working on React library with latest concepts like hooks.\n• Experience working on React Native frame work and preferable experience with iOS and Android native coding.\n• Experience with Redux architecture.\n• Experience working with Java script, CSS/SCSS.\n• Experience writing unit tests with jest, enzyme/react-native testing library.",
    job_is_remote: false,
    job_posted_at_timestamp: 1723585620,
    job_posted_at_datetime_utc: "2024-08-13T21:47:00.000Z",
    job_city: "Bentonville",
    job_state: "AR",
    job_country: "US",
    job_latitude: 36.372356,
    job_longitude: -94.21021,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&udm=8#vhid=vt%3D20/docid%3Duuy4jWaF3fL7rE4aAAAAAA%3D%3D&vssid=jobs-detail-viewer",
    job_offer_expiration_datetime_utc: "2025-02-10T08:23:55.000Z",
    job_offer_expiration_timestamp: 1739175835,
    job_required_experience: {
      no_experience_required: "false",
      required_experience_in_months: "72",
      experience_mentioned: "true",
      experience_preferred: "false",
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: "false",
      professional_certification: "false",
      high_school: "false",
      associates_degree: "false",
      bachelors_degree: "true",
      degree_mentioned: "false",
      degree_preferred: "false",
      professional_certification_mentioned: "false",
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {
      Qualifications: [
        "6+ years of experience in IT with 3+ years of experience in React Native frame work and preferable experience with iOS and Android native coding",
        "Solid experience in large scale distributed systems and event-driven architectures",
        "Experience working on React library with latest concepts like hooks",
        "Experience with Redux architecture",
        "Experience working with Java script, CSS/SCSS",
        "Experience writing unit tests with jest, enzyme/react-native testing library",
      ],
    },
    job_job_title: null,
    job_posting_language: "en",
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
  {
    job_id: "1PHX9g7nZoxOJvTcAAAAAA==",
    employer_name: "Software Technology Inc.",
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuWsGLi3yMAg5FyBcrnbDvEtvAFR1MXUk5jKSQ&s=0",
    employer_website: "http://www.stiorg.com",
    employer_company_type: null,
    employer_linkedin: null,
    job_publisher: "LinkedIn",
    job_employment_type: "FULLTIME",
    job_title: "React Native Developer",
    job_apply_link:
      "https://www.linkedin.com/jobs/view/react-native-developer-at-software-technology-inc-3941629556?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.6308,
    apply_options: [
      {
        publisher: "LinkedIn",
        apply_link:
          "https://www.linkedin.com/jobs/view/react-native-developer-at-software-technology-inc-3941629556?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
    ],
    job_description:
      "Hello,This is Tejaswini from Software Technologies Inc. We have a job opening with our client for position of React Native Developer if you are available and looking for any new opportunities, please send me your updated resume for below position ASAP\n\nReact Native Developer\n\nLocation: Cincinnati, OH\n\nJob Description\n\nMINIMUM KNOWLEDGE, SKILLS AND ABILITIES REQUIRED:\n\nBachelor's degree in Computer Science/Information Systems or comparable with 2 - 3 years of software development experience.\n\nStrong problem-solving skills\n\nKnowledge of object-oriented design and development experience with one or more of the following programing languages:\n\nTypeScript / HTML / CSS\n\nFamiliarity with testing tools: Karma / Jasmine / Jest / Cypress\n\nAngular web development framework 10+\n\nStrong communication and collaboration skills\n\nAccessibility best practices\n\nExperience with version control solutions, preferably Git/GitHub\n\nAbility to work independently and as part of a team\n\nExperience With Any Of The Following, a Plus\n\nGradle\n\nNode.js\n\nJava (8 or above)\n\nSpring Framework\n\nSpring Boot\n\nMicroservice design principles\n\nExperience with OAuth-based authentication and authorization\n\nFamiliarity with relational databases and SQL\n\nThanks,\n\nN.TEJASWINI NAIDU\n\nTechnical recruiter\n\nDirect:404-777-9838 | Fax: 866-608-6686\n\nEmail: tejaswini.n@stiorg.com | Web: www.stiorg.com\n\n100 Overlook Center, Suite 200\n\nPrinceton, NJ 08540.",
    job_is_remote: false,
    job_posted_at_timestamp: 1715326812,
    job_posted_at_datetime_utc: "2024-05-10T07:40:12.000Z",
    job_city: "Cincinnati",
    job_state: "OH",
    job_country: "US",
    job_latitude: 39.10312,
    job_longitude: -84.51202,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&udm=8#vhid=vt%3D20/docid%3D1PHX9g7nZoxOJvTcAAAAAA%3D%3D&vssid=jobs-detail-viewer",
    job_offer_expiration_datetime_utc: "2024-12-01T07:39:58.000Z",
    job_offer_expiration_timestamp: 1733038798,
    job_required_experience: {
      no_experience_required: "false",
      required_experience_in_months: "24",
      experience_mentioned: "true",
      experience_preferred: "true",
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: "false",
      professional_certification: "false",
      high_school: "false",
      associates_degree: "false",
      bachelors_degree: "true",
      degree_mentioned: "true",
      degree_preferred: "true",
      professional_certification_mentioned: "false",
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {
      Qualifications: [
        "Bachelor's degree in Computer Science/Information Systems or comparable with 2 - 3 years of software development experience",
        "Strong problem-solving skills",
        "Knowledge of object-oriented design and development experience with one or more of the following programing languages:",
        "TypeScript / HTML / CSS",
        "Familiarity with testing tools: Karma / Jasmine / Jest / Cypress",
        "Angular web development framework 10+",
        "Strong communication and collaboration skills",
        "Accessibility best practices",
        "Experience with version control solutions, preferably Git/GitHub",
        "Ability to work independently and as part of a team",
        "Gradle",
        "Node.js",
        "Java (8 or above)",
        "Experience with OAuth-based authentication and authorization",
        "Familiarity with relational databases and SQL",
      ],
    },
    job_job_title: null,
    job_posting_language: "en",
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
  {
    job_id: "koVA_bv0WKHjLfeiAAAAAA==",
    employer_name: "Resource Informatics Group, Inc",
    employer_logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYJmt1FqFz0obtRXud3qhJicIz308kx55ZWu1&s=0",
    employer_website: "http://www.rigusinc.com",
    employer_company_type: null,
    employer_linkedin: null,
    job_publisher: "LinkedIn",
    job_employment_type: "CONTRACTOR",
    job_title: " React Native Developer - Remote",
    job_apply_link:
      "https://www.linkedin.com/jobs/view/%EF%BF%BDreact-native-developer-remote-at-resource-informatics-group-inc-3819937863?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    job_apply_is_direct: false,
    job_apply_quality_score: 0.7192,
    apply_options: [
      {
        publisher: "LinkedIn",
        apply_link:
          "https://www.linkedin.com/jobs/view/%EF%BF%BDreact-native-developer-remote-at-resource-informatics-group-inc-3819937863?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
        is_direct: false,
      },
    ],
    job_description:
      "React Native Developer - Remote -\n\nOne of my direct clients is looking for React Native developer. We are looking for candidates with strong exp in react native, Java script, XML and\n\nCandidates should have good experience in writing quality codes, employing suitable algorithms, data structures, and software engineering practices for various features and products.\n\nThis is a long term project and 100% Remote role\n\nRole - React Native Developer\n\nSkills - React native, Java Script, CSS, XML, HTML\n\n100%REMOTE",
    job_is_remote: true,
    job_posted_at_timestamp: 1707299455,
    job_posted_at_datetime_utc: "2024-02-07T09:50:55.000Z",
    job_city: null,
    job_state: null,
    job_country: "US",
    job_latitude: 38.794594,
    job_longitude: -106.534836,
    job_benefits: null,
    job_google_link:
      "https://www.google.com/search?gl=us&hl=en&rciv=jb&q=react+native+developer&start=0&udm=8#vhid=vt%3D20/docid%3DkoVA_bv0WKHjLfeiAAAAAA%3D%3D&vssid=jobs-detail-viewer",
    job_offer_expiration_datetime_utc: "2025-01-19T01:08:38.000Z",
    job_offer_expiration_timestamp: 1737248918,
    job_required_experience: {
      no_experience_required: "false",
      required_experience_in_months: null,
      experience_mentioned: "true",
      experience_preferred: "false",
    },
    job_required_skills: null,
    job_required_education: {
      postgraduate_degree: "false",
      professional_certification: "false",
      high_school: "false",
      associates_degree: "false",
      bachelors_degree: "true",
      degree_mentioned: "false",
      degree_preferred: "false",
      professional_certification_mentioned: "false",
    },
    job_experience_in_place_of_education: false,
    job_min_salary: null,
    job_max_salary: null,
    job_salary_currency: null,
    job_salary_period: null,
    job_highlights: {
      Qualifications: [
        "We are looking for candidates with strong exp in react native, Java script, XML and",
        "Candidates should have good experience in writing quality codes, employing suitable algorithms, data structures, and software engineering practices for various features and products",
        "Skills - React native, Java Script, CSS, XML, HTML",
      ],
    },
    job_job_title: null,
    job_posting_language: "en",
    job_onet_soc: "15113200",
    job_onet_job_zone: "4",
    job_occupational_categories: null,
    job_naics_code: null,
    job_naics_name: null,
  },
];

const rapidApiKey = process.env.EXPO_PUBLIC_API_URL;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      console.log(options);
      // const response = await axios.request(options);
      // console.log(JSON.stringify(response.data.data));
      // setData(response.data.data);
      setData(sampleResponse)
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error.toString());
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
