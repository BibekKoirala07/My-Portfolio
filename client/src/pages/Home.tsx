import Main from "../components/Main";
import SkillsExperiences from "../components/Skills&Experience";
import ContactMe from "../components/ContactMe";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";

const Home: React.FC = () => {
  return (
    <div>
      <div className="min-h-[calc(100vh-64px)] flex flex-col">
        <Main />
      </div>
      <AboutMe />
      <SkillsExperiences />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Home;
