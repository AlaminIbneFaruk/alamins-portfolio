import Blob1 from "./blob1";
import { Typewriter } from "react-simple-typewriter";
import Wavify from "./Wavify";
import ProjectsButton from "./ProjectsButton";
const Hero = () => {

  return (
    <div>
      <div id="home" className="hero min-h-screen">
        <Blob1 />
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <div className="max-w-1/4 min-h-1/4 rounded-full outline-2 outline-offset-4 overflow-hidden shadow-2xl">
            <img
              src="/public/AlaminProfile.png"
              className=" rounded-lg shadow-2xl w-full h-full object-cover"
            />
          </div>
          <div className=" bg-black/40 p-8 rounded-2xl shadow-2xl">
            <h1
              className="tooltip text-5xl font-bold cursor-pointer"
              data-tip="Peace be Upon You ( Islamic Greeting )"
            >
              Assalamu Alaikum
            </h1>
            <div>
              <h2 className="text-5xl mt-4 mb-6">
                I'm Al Amin Ibne Faruk Ayon,
              </h2>
              <div className="font-semibold text-4xl my-8 text-info">
                <Typewriter
                  words={["a web developer", "a MERN stack developer"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </div>
            </div>
            <button className="btn btn-primary btn-outline">Get Started</button>
          </div>
        </div>
      </div>
      <div className="relative -mt-20">
        <Wavify />
        <div className="absolute w-full flex top-5 justify-center z-10">
          <ProjectsButton/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
