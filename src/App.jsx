import "./App.css";
import GridLines from "react-gridlines";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactUS from "./components/ContactUS";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <div className="App relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <GridLines
            cellWidth={10}
            cellHeight={10}
            lineColor="#c0c9c0"
            className="grid-area w-full h-full"
          ></GridLines>
        </div>

        <Navbar />
        <Hero />
      </div> 
      <Skills/>
      <Projects/>
      <ContactUS/>
      <Resume/>
    </div>
  );
}

export default App;
