import React from "react";
import Nav from "./components/Nav/Nav.jsx";
import "./App.css";
import Skills from "./components/Skills/Skills.jsx";
import Project from "./components/Project/Project2.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Project />
      <Skills />
      <Contact />
      {/* Assuming you have a Footer component */}
      <Footer />
    </>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav/Nav.jsx";
// import "./App.css";
// import Skills from "./components/Skills/Skills.jsx";
// import Project from "./components/Project/Project2.jsx";
// import Hero from "./components/Hero/Hero.jsx";
// import Contact from "./components/Contact/Contact.jsx";

// const App = () => {
//   return (
//     <Router>
//       <Nav />

//       <Routes>
//         <Route path="/" element={<Hero />} />

//         <Route path="/skills" element={<Skills />} />
//         <Route path="/projects" element={<Project />} />

//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>

//   );
// };

// export default App;

// import { useState } from "react";
// import Hero from "./components/Hero/Hero";
// import "./App.css";
// import Projects from "./components/Projects/Projects";
// import Skills from "./components/Skills/Skills";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import Nav from "./components/Nav/Nav";
// function App() {
//   return (
//     <>
//       <Nav />
//       <Hero />
//       <Projects />
//       <Skills />
//       <Contact />
//       <Footer />
//     </>
//   );
// }

// export default App;
