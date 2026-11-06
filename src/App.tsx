import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <>
      <main className="p-2">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contacts />
      </main>
    </>
  );
}

export default App;
