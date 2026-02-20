import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Navigation from "./components/Navigation";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const { theme } = useTheme();

  return (
    <>
      <main style={theme}>
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
