import Skills from "./components/skills/Skills";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";
import Projects from "./components/projects/Projects";
import HeroToAbout from "./components/HeroToAbout";

function App() {
  return (
    <>
      <main className="p-2">
        <Navigation />
        <HeroToAbout />
        <Projects />
        <Skills />
        <Contacts />
      </main>
    </>
  );
}

export default App;
