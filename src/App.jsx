import "./App.css";
import GridLines from "react-gridlines";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MouseTrail from "./components/MouseTrail";
import ProgressBar from "./components/ProgressBar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <div className="App relative min-h-screen overflow-hidden">
        <ProgressBar />
        <div className="absolute inset-0 z-0 opacity-10">
          <GridLines
            cellWidth={10}
            cellHeight={10}
            lineColor="#c0c9c0"
            className="grid-area w-full h-full"
          ></GridLines>
        </div>
        <div className="absolute inset-0 z-0">
          <MouseTrail />
        </div>
        <Navbar />
        <Hero />
      </div> 
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
