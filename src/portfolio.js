/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Lucky Shah",
  title: "Hi all, I'm Lucky",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Laravel and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Lucky0786/",
  linkedin: "https://www.linkedin.com/in/lucky-shah-b47489204/",
  gmail: "luckyshah544@gmail.com",
  gitlab: "https://gitlab.com/luckyshah544",
  facebook: "https://www.facebook.com/luckyshah786/about/",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackexchange.com/users/35915527/lucky-shah",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY BACKEND DEVELOPER 🚀 who wants to explore every tech stack! Passionate about building robust and scalable applications using Laravel and PHP.",
  skills: [
    emoji("⚡ Develop robust RESTful APIs and backend services for web and mobile applications."),
    emoji("⚡ Implement secure authentication and authorization mechanisms."),
    emoji("⚡ Integration of third-party services such as Firebase, AWS, and Digital Ocean."),
    emoji("⚡ Optimize database performance and manage data effectively.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    // {
    //   skillName: "python",
    //   fontAwesomeClassname: "fab fa-python"
    // },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    // {
    //   schoolName: "Chandigarh University",
    //   logo: require("./assets/images/harvardLogo.png"),
    //   subHeader: "Master of Science in Computer Science",
    //   duration: "September 2017 - April 2019",
    //   desc: "Participated in the research of XXX and published 3 papers.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
    {
      schoolName: "Chandigarh University",
      logo: require("./assets/images/cu.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2017 - April 2021",
      desc: "Ranked in the top 10% of the program. Completed courses in Software Engineering, Web Security, and Operating Systems, gaining a solid foundation in developing secure and efficient applications, understanding complex system architectures, and applying best practices in software development",
      // descBullets: [
      //   "Chandigarh University is a premier institution located in Punjab, India, renowned for its commitment to excellence in education and research.",
      //   " Established in 2012, it has quickly become one of the leading universities in the country, offering a wide range of undergraduate, postgraduate, and doctoral programs across various fields such as engineering, management, law, and liberal arts."
      // ]

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mysql",
      progressPercentage: "80%"
    },
    {
      Stack: "Php",
      progressPercentage: "80%"
    },
    {
      Stack: "Laravel",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "PHP Developer",
      company: "NetScape Labs Infotech",
      companylogo: require("./assets/images/com.png"),
      date: "July 2023 – Present",
      desc: "As a PHP Developer at NetScape Labs Infotech, I build and maintain robust web applications, develop APIs for mobile applications, and ensure seamless integration with various services.",
      descBullets: [
        "Implemented RESTful APIs to support mobile and web applications.",
        "Collaborated with mobile development teams to integrate backend services.",
        "Enhanced website performance and optimized database queries.",
        "Worked on user authentication, authorization, and data syncing for mobile apps.",
        "Utilized Laravel frameworks for backend development."
      ]
    },
    {
      role: "PHP Developer",
      company: "Kodion Softwares Pvt. Ltd.",
      companylogo: require("./assets/images/kod.jpeg"),
      date: "June 2022 – July 2023",
      desc: "As a PHP Developer at Kodion Softwares Pvt. Ltd., I was involved in developing and maintaining web applications, creating APIs, and optimizing backend processes for a seamless user experience.",
      descBullets: [
        "Developed dynamic and responsive web applications using PHP and MySQL.",
        "Created RESTful APIs for mobile and web app integrations.",
        "Collaborated with frontend teams to ensure consistent application performance.",
        "Improved database interactions and reduced query execution time.",
        "Implemented caching strategies to enhance application speed and performance."
      ]
    },
    {
      role: "PHP Developer Intern",
      company: "PPN Solutions Private Limited",
      companylogo: require("./assets/images/ppn.png"),
      date: "January 2022 – June 2022",
      desc: "As a PHP Developer Intern at PPN Solutions Private Limited, I gained hands-on experience in web development by contributing to various projects and learning industry best practices. I collaborated with senior developers to support backend development and integrate new features.",
      descBullets: [
        "Assisted in developing and maintaining PHP-based applications.",
        "Supported the integration of front-end and back-end components.",
        "Debugged and resolved minor issues in existing projects.",
        "Worked with MySQL databases to manage and retrieve data.",
        "Collaborated with the team to learn Agile methodologies and project management."
      ]
    }

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/hito.png"),
      projectName: "HitoMatch",
      projectDesc: "HitoMatch is a revolutionary dating app that connects users through Quantum Matches, profile videos, and text chats. The platform features advanced filters and premium options to enhance user experience. Surveys refine match suggestions for better compatibility. An innovative Ghost Thermometer shows the engagement level of potential matches, helping users gauge compatibility effectively. Personality assessments match users with compatible partners based on traits for deeper connections. Premium memberships provide advanced algorithms and access to exclusive features and events. The app employs a sophisticated Quantum Matching Algorithm to suggest compatible matches based on user preferences.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://Hitomatch.com/"
        }
      ]
    },
    {
      image: require("./assets/images/jobifi.png"),
      projectName: "Jobfii",
      projectDesc: "Jobfii is an innovative job search platform that connects job seekers with employers. It simplifies the hiring process by offering advanced search filters, personalized job recommendations, and an intuitive user interface. The platform provides job alerts, company reviews, and the ability to apply for jobs directly through the website, helping users find the perfect job opportunities with ease.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://jobfii.com/"
        }
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9878315426",
  email_address: "luckyshah544@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "luckyshah544", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
