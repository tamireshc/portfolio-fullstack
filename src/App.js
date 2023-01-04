import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}

export default App;
