import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero.jsx";
import { About } from "./Components/About.jsx";
import { Project } from "./Components/Project.jsx";
import { Skills } from "./Components/Skills.jsx";
import { Contact } from "./Components/Contact.jsx";
function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
