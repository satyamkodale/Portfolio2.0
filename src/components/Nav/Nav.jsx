import React, { useState, useEffect } from "react";
import styles from "./NavStyles.module.css";
import astronautHelmetLight from "../../assets/astronaut-helmet.png";
import deadEyeLight from "../../assets/dead-eye.png";
import stackLight from "../../assets/stack.png";
import envelopeLight from "../../assets/envelope.png";
import astronautHelmetBlack from "../../assets/astronaut-helmet-black.png";
import deadEyeBlack from "../../assets/dead-eye-black.png";
import stackBlack from "../../assets/stack-black.png";
import envelopeBlack from "../../assets/envelope-black.png";
import { useTheme } from "../../common/ThemeContext";

import emailBlack from "../../assets/mail-black.jpg";
import emailLight from "../../assets/mail-white.jpg";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("ABOUT");
  const { theme, toggleTheme } = useTheme();
  const astronautHelmet =
    theme === "light" ? astronautHelmetBlack : astronautHelmetLight;
  const deadEye = theme === "light" ? deadEyeBlack : deadEyeLight;
  const stack = theme === "light" ? stackBlack : stackLight;
  const envelope = theme === "light" ? envelopeBlack : envelopeLight;
  const email = theme === "light" ? emailBlack : emailLight;

  const handleNavClick = (section) => {
    setActiveSection(section);
    document
      .getElementById(section.toLowerCase())
      .scrollIntoView({ behavior: "smooth" });
  };

  const NavLink = ({ section, imgSrc, altText }) => {
    const isActive = activeSection === section;

    return (
      <button
        className={`${styles.navLink} ${isActive ? styles.current : ""} ${
          theme === "light" ? styles.lightBackground : styles.darkBackground
        }`}
        onClick={() => handleNavClick(section)}
      >
        <img src={imgSrc} alt={altText} className={styles.navImg} />
        {isActive && (
          <h1
            className={styles.pageTitle}
            style={{ color: theme === "light" ? "black" : "white" }} // Apply inline styling based on theme
          >
            {section}
          </h1>
        )}
      </button>
    );
  };

  return (
    <nav className={styles.nav}>
      <NavLink
        section="ABOUT"
        imgSrc={astronautHelmet}
        altText="astronaut helmet icon"
      />
      <NavLink section="SKILLS" imgSrc={deadEye} altText="deadEye icon" />
      <NavLink section="PROJECTS" imgSrc={stack} altText="stack icon" />
      <NavLink section="CONTACT" imgSrc={envelope} altText="envelope icon" />
    </nav>
  );
};

export default Nav;

// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import styles from "./NavStyles.module.css";
// import astronautHelmetLight from "../../assets/astronaut-helmet.png";
// import deadEyeLight from "../../assets/dead-eye.png";
// import stackLight from "../../assets/stack.png";
// import envelopeLight from "../../assets/envelope.png";
// import astronautHelmetBlack from "../../assets/astronaut-helmet-black.png";
// import deadEyeBlack from "../../assets/dead-eye-black.png";
// import stackBlack from "../../assets/stack-black.png";
// import envelopeBlack from "../../assets/envelope-black.png";
// import { useTheme } from "../../common/ThemeContext";

// import emailBlack from "../../assets/mail-black.jpg";
// import emailLight from "../../assets/mail-white.jpg";

// import classNames from "classnames";

// const Nav = () => {
//   // const location = useLocation();
//   const [navPositionClass, setNavPositionClass] = useState("");
//   const { theme, toggleTheme } = useTheme();
//   const astronautHelmet =
//     theme === "light" ? astronautHelmetBlack : astronautHelmetLight;
//   const deadEye = theme === "light" ? deadEyeBlack : deadEyeLight;
//   const stack = theme === "light" ? stackBlack : stackLight;
//   const envelope = theme === "light" ? envelopeBlack : envelopeLight;
//   const email = theme === "light" ? emailBlack : emailLight;

//   const pageTitleClass = classNames(styles.pageTitle, {
//     // [styles.lightTheme]: theme === "light",
//     // [styles.darkTheme]: theme === "dark",
//   });

//   const getPageTitle = () => {
//     switch (location.pathname) {
//       case "/":
//         return "ABOUT";
//       case "/skills":
//         return "SKILLS";
//       case "/projects":
//         return "PROJECTS";
//       case "/contact":
//         return "CONTACT";
//       default:
//         return "";
//     }
//   };

//   const pageTitle = getPageTitle();

//   const isCurrentPage = (path) => {
//     return location.pathname === path;
//   };

//   const NavLink = ({ to, imgSrc, altText, navClass }) => {
//     const isCurrent = isCurrentPage(to);
//     const linkClass = isCurrent
//       ? `${styles.navLink} ${styles.current} ${styles[navClass]}`
//       : styles.navLink;

//     // Update navPositionClass when the current page changes
//     useEffect(() => {
//       if (isCurrent && navPositionClass !== navClass) {
//         setNavPositionClass(navClass);
//       }
//     }, [isCurrent, navClass]);

//     return (
//       <Link to={to} className={linkClass}>
//         <img src={imgSrc} alt={altText} className={styles.navImg} />
//         {isCurrent && (
//           <h1
//             className={styles.pageTitle}
//             style={{ color: theme === "light" ? "black" : "white" }} // Apply inline styling based on theme
//           >
//             {pageTitle}
//           </h1>
//         )}
//       </Link>
//     );
//   };

//   return (
//     <nav className={`${styles.nav} ${styles[navPositionClass]}`}>
//       <NavLink
//         to="/"
//         imgSrc={astronautHelmet}
//         altText="astronaut helmet icon"
//         navClass="nav-about"
//       />
//       <NavLink
//         to="/skills"
//         imgSrc={deadEye}
//         altText="deadEye icon"
//         navClass="nav-skills"
//       />
//       <NavLink
//         to="/projects"
//         imgSrc={stack}
//         altText="stack icon"
//         navClass="nav-projects"
//       />
//       <NavLink
//         to="/contact"
//         imgSrc={envelope}
//         altText="envelope icon"
//         navClass="nav-contact"
//       />
//     </nav>
//   );
// };

// export default Nav;
