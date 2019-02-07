const initialState = {
  name: " FENG-CHIN WU",
  personalInfo: {
    mobile: "+886 933941061",
    email: "nikeorz+offer@gmail.com",
    linkedin: "linkedin.com/in/gino-feng-chin-wu-077151b6",
    github: "github.com/Ginioo",
  },
  summary: {
    title: "Summary",
    items: [
      "6+ years experiences in web development.",
      "Capable of resolving problems in systematic yet creative way.",
      "Capable of communicating with two languages, Mandarin (Native) and English (Fair).",
    ],
  },
  employmentHistory: {
    title: "Employment History",
    jobs: [
      {
        companyName: "Taiwan Mobile Co Ltd",
        jobTitle: "Engineer",
        date: "JUNE 2017 - PRESENT",
        projects: [
          {
            name: "Myfone Shopping",
            achievements: [
              "Designed and developed the routing module, which is responsible for mapping urls to their corresponding controllers, for the Myfone shopping website.",
              "Refactored the category pages of the Myfone shopping website, as makes it 10% faster.",
              "Refactored the product pages of the Myfone shopping website, as makes it 15% faster.",
            ]
          }
        ]
      },
      {
        companyName: "Bloomon",
        jobTitle: "Full stack web developer",
        date: "MAY 2016 - SEP 2016",
        projects: [
          {
            name: "The MailChimp Project",
            achievements: [
              "To synchronize inactive users’ information of Bloomon platform with MailChimp (an Email Marketing Platform), using Laravel with MailChimp api.",
              "This project increased the rate of users sticking to Bloomon platform.",
            ]
          },
          {
            name: "Login page 2.0 Project",
            achievements: [
              "Developed the login page, using React components, React containers, action creators, Redux reducers, mock api.",
            ]
          },
          {
            name: "Fix Issues",
            achievements: [
              "To fix issues related to the purchasing page of Bloomon platform. which was developed using AnglularJS.",
            ]
          }
        ]
      },
      {
        companyName: "Taiwan Mobile Co Ltd",
        jobTitle: "Engineer",
        date: "FEB 2012 - APR 2016",
        projects: [
          {
            name: "Myfone Shopping",
            achievements: [
              "Developed new features for both Myfone shopping website and its admin panel.",
              "Developed and optimized scattered business logic into reusable modules.",
            ]
          }
        ]
      }
    ]
  },
  education: {
    title: "Education",
    schools: [
      "BS, Computer Science and Information Engineering, Tamkang University — 2010",
    ]
  },
  skillsAndTools: {
    title: "Skills and Tools",
    skillSet: [
      "PHP, LARAVEL, PHALCON, COMPOSER",
      "MSSQL, MYSQL",
      "REACT, REDUX, JAVASCRIPT ES6, WEBPACK, NPM",
      "JAVASCRIPT, JQUERY",
      "CSS, BOOTSTRAP, SEMANTIC UI",
      "GIT",
      "TRELLO",
      "JAVA, SPRING, MAVEN, APACHE-ANT",
      "LINUX(CENTOS, REDHAT 6), DOCKER"
    ]
  }

};

const CVReducer = (state = initialState) => {
  return state;
};

export default CVReducer;