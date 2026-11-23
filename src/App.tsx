import Skills from "./components/skills/Skills";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";
import Projects from "./components/projects/Projects";
import HeroToAbout from "./components/HeroToAbout";
import { ViewProvider } from "./contexts/ViewContext";

function App() {
  return (
    <>
      <main className="p-2">
        <ViewProvider>
          <Navigation />
          <HeroToAbout />
        </ViewProvider>
        <Projects />
        <Skills />
        <Contacts />
      </main>
    </>
  );
}

export default App;
