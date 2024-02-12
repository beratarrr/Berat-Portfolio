export const completedProjects = [
  {
    title: "DataVis, a dashboard for the 2022 Worldcup 📊",
    descr:
      "Datavis dashboard is a data dashboad where users can access data about the 2022 world cup in Qatar. The user is able to adjust the charts to their liking and scroll through various graphs and plots to get a better understanding of the data.",
    features: [
      "Graphs and plots about the 2022 worldcup",
      "User adjustable charts",
      "Responsive design",
      "Vue3, Pinia, TailwindCSS, Sport API's",
    ],
    stack: ["Vue3", "Pinia", "ChartJs", "TailwindCSS"],
    img: "/projectImages/datavis.png",
    links: [
      {
        name: "Github",
        url: "https://github.com/beratarrr/datavis-dashboard",
      },
    ],
    route: "/projects/datavis",
  },
  {
    title: "Examo, the ultimate exam platform 📚",
    descr:
      "Free platform for last year exam students in the Netherlands, where they can easily access exams from previous years and all the information they need to prepare for their exams (like exam tips, exam dates, etc). Furthermore I am working on adding authentication to personalize the exam preparation for the students. With the help of AI, quizzes, and flashcards which they can track their progress on. ",
    features: [
      "Nuxt3, Supabase, TailwindCSS",
      "Exam-viewer",
      "Examtips",
      "Authentication",
      "Personalized exam preparation",
      "RAG-model based on exams",
    ],
    stack: ["Vue3", "Pinia", "ChartJs", "TailwindCSS"],
    img: "/projectImages/examo.png",
    links: [
      {
        name: "Examo",
        url: "https://examo.nl",
      },
    ],
    route: "/projects/examo",
  },
];

export const projectIdeas = [
  {
    title: "ML model for recognizing camouflaged military jets. 🪖",
  },
  {
    title: "ML model for predicting the outcome of a football match. ⚽️",
  },
];

export const inprogressProjects = [
  {
    title: "Examo V2 📚",
  },
];
