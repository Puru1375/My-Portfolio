import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Contact from "./components/Contact"; 
import Footer from "./components/Footer"; 
import TechMarquee from "./components/TechMarquee"; // NEW
import About from "./components/About";
import Achievements from "./components/Achievements";
import BackgroundParticles from "./components/BackgroundParticles"; 

function App() {
  return (
    <div className="font-sans text-dark bg-light">
      <BackgroundParticles /> {/* Subtle animated background */}
      {/* Navbar */}
      <Navbar />

      {/* 1. The 3D Intro */}
      <Hero />


      <About /> 
      
      {/* 2. The Student "Power" Bar */}
      <Stats />
      
      {/* 4. Your Path */}
      {/* <Timeline /> */}

      {/* 3. Your Work */}
      <Projects />
      
      {/* 5. Your Skills */}
      <Skills />

      {/* 4. Your Achievements */}
      <Achievements />

      {/* 6. Contact Form */}
      <Contact />

      {/* <TechMarquee /> */}
      {/* 7. Footer */}
      <Footer />
      
    </div>
  );
}

export default App;