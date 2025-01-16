import AboutMeExperience from "../components/about-me/AboutMeExperience";
import AboutMeHero from "../components/about-me/AboutMeHero";
import AboutMeMovingTechStack from "../components/about-me/AboutMeMovingTechStack";
import ComponentBox from "../components/ComponentBox";
// className="min-h-screen text-white"
const Home = () => {
  return (
    <ComponentBox>
      <div>
        <AboutMeHero />
        <AboutMeMovingTechStack />
        <AboutMeExperience />
      </div>
    </ComponentBox>
  );
};

export default Home;
