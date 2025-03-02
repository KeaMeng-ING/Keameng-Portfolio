import "./App.css";
import LandingPage from "./components/LandingPage.jsx";
import AboutMe from "./components/AboutMe.jsx";
import MySkills from "./components/MySkills.jsx";
import ExperienceAndEducation from "./components/ExperienceAndEducation.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import CircularNavigation from "./components/CircularNavigation.jsx";

function App() {
  return (
    <>
      <CircularNavigation />
      <section id="landing">
        <LandingPage />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="skills">
        <MySkills />
      </section>
      <section id="experience">
        <ExperienceAndEducation />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
