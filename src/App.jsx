import "./App.css";
import LandingPage from "./components/LandingPage.jsx";
import AboutMe from "./components/AboutMe.jsx";
import MySkills from "./components/MySkills.jsx";
import ExperienceAndEducation from "./components/ExperienceAndEducation.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <>
      <LandingPage />
      <AboutMe />
      <MySkills />
      <ExperienceAndEducation />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
