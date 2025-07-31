import './App.css';
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="container">
      <h1>Hi, I'm Sarang 👋</h1>
      <p>Aspiring Full Stack Developer | B.Tech CSE (2026)</p>

      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}
export default App;
