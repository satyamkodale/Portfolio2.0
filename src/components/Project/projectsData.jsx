import projectOne from "../../assets/project1_electro (1).png";
import projectTwo from "../../assets/project2_quiz (2).png";
import projectThree from "../../assets/project3_ecom (1).jpg";

import projectFour from "../../assets/project4_blog application.jpg";
import projectFive from "../../assets/project5_psnm.png";

const projects = {
  1: {
    title: "ElectroEase",
    image: projectOne,
    description: (
      <>
        <p>
          - A platform for electronics retailers, streamlining product
          showcasing and sales interactions.
        </p>
      </>
    ),
    github: "https://github.com/satyamkodale/ElectroEase",
    demo: "https://github.com/satyamkodale/ElectroEase",
  },
  2: {
    title: "QuizQuest",
    image: projectTwo,
    description: (
      <>
        <p>
          - A platform for interactive quizzes, enhancing engagement and
          knowledge retention.
        </p>
      </>
    ),
    github: "https://github.com/satyamkodale/Quiz-Microservices",
    demo: "https://github.com/satyamkodale/Quiz-Microservices",
  },
  3: {
    title: "TrendWave",
    image: projectThree,
    description: (
      <>
        <p>
          - An online hub for fashion enthusiasts, fostering creativity and
          style exploration.
        </p>
      </>
    ),
    github: "https://github.com/satyamkodale/TrendWave",
    demo: "https://github.com/satyamkodale/TrendWave",
  },
  4: {
    title: "BLOG APPLICATION",
    image: projectFour,
    description: (
      <>
        <p>
          - I developed APIs for a blog application to enable uploading posts,
          viewing, engaging, and commenting
        </p>
      </>
    ),
    github: "https://github.com/satyamkodale/blog-app-apis",
    demo: "https://github.com/satyamkodale/blog-app-apis",
  },
  5: {
    title: "PHOTOSTUDIO NEAR ME",
    image: projectFive,
    description: (
      <>
        <p>
          - I created a user-friendly website to help users find nearby photo
          studios that match their needs.
        </p>
      </>
    ),
    github: "https://github.com/satyamkodale/photostudionearme",
    demo: "https://github.com/satyamkodale/photostudionearme",
  },
};

export default projects;
