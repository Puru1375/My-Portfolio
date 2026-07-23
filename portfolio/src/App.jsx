import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import CommandPalette from "./components/CommandPalette";

import AmbientBackground from "./components/AmbientBackground";

function App() {
  return (
    <div className="portfolio-app">
      <AmbientBackground />

      <div className="page-content">
        <Navbar />

        <main>
          <Hero />

          <About />

          <Stats />

          <Projects />

          <Skills />

          <Timeline />

          <Achievements />

          <Contact />
        </main>

        <Footer />

        <CommandPalette />
      </div>
    </div>
  );
}

export default App;