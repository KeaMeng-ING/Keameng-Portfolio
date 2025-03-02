import "./App.css";
import LandingPage from "./components/LandingPage.jsx";
import AboutMe from "./components/AboutMe.jsx";
import MySkills from "./components/MySkills.jsx";
import ExperienceAndEducation from "./components/ExperienceAndEducation.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <LandingPage />
      <AboutMe />
      <MySkills />
      <ExperienceAndEducation />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
