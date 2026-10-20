import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <main className="p-2">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Contacts />
      </main>
    </>
  );
}

export default App;
