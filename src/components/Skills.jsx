import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaHtml5, FaJs, FaCss3, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { DiBootstrap, DiGithubBadge } from "react-icons/di";
import "react-tabs/style/react-tabs.css";
const About = () => {
  // Languages
  const Languages = [
    {
      name: "JavaScript",
      icon: <FaJs />,
      expertise: "90%",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      expertise: "90%",
    },
  ];

  // Frontend
  const Frontend = [
    {
      name: "React",
      icon: <FaReact />,
      expertise: "90%",
    },
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      expertise: "90%",
    },
    {
      name: "CSS3",
      icon: <FaCss3 />,
      expertise: "90%",
    },
    {
      name: "Bootstrap",
      icon: <DiBootstrap />,
      expertise: "90%",
    },
    {
      name: "Tailwind",
      icon: <SiTailwindcss />,
      expertise: "90%",
    },
  ];

  // Backend
  const Backend = [
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      expertise: "90%",
    },
    {
      name: "Express",
      icon: <SiExpress />,
      expertise: "90%",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      expertise: "90%",
    },
  ];

  // Databases
  const Databases = [
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      expertise: "90%",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      expertise: "90%",
    },
  ];

  // Tools
  const Tools = [
    {
      name: "GitHub",
      icon: <DiGithubBadge />,
      expertise: "90%",
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
      expertise: "90%",
    },
  ];

  const All = [...Languages, ...Frontend, ...Backend, ...Databases, ...Tools];
  return (
    <div className="p-8" id="skills">
      <h1 className="text-5xl font-bold my-5 text-center">Skills</h1>
      <Tabs>
        <TabList>
          <Tab>All</Tab>
          <Tab>Languages</Tab>
          <Tab>Frontend</Tab>
          <Tab>Backend</Tab>
          <Tab>Databases</Tab>
          <Tab>Tools</Tab>
        </TabList>
        <TabPanel>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-4 mb-16">
              {All.map((other, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition duration-300 hover:shadow-primary hover:scale-y-105`}
                >
                  <div className="tooltip" data-tip={other.expertise}>
                    <div className="text-6xl mb-2">{other.icon}</div>
                    <span className="mt-2 font-semibold">{other.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-16">
              {Languages.map((language, index) => (
                <li
                  key={index}
                  className={`flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition duration-300 hover:shadow-primary hover:scale-y-105`}
                >
                  <div className="text-6xl mb-2">{language.icon}</div>
                  <span className="mt-2 font-semibold">{language.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-16">
              {Frontend.map((frontend, index) => (
                <li
                  key={index}
                  className={`flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition duration-300 hover:shadow-primary hover:scale-y-105`}
                >
                  <div className="text-6xl mb-2">{frontend.icon}</div>
                  <span className="mt-2 font-semibold">{frontend.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-16">
              {Backend.map((backend, index) => (
                <li
                  key={index}
                  className={`flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition duration-300 hover:shadow-primary hover:scale-y-105`}
                >
                  <div className="text-6xl mb-2">{backend.icon}</div>
                  <span className="mt-2 font-semibold">{backend.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-16">
              {Databases.map((database, index) => (
                <li
                  key={index}
                  className={`flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition duration-300 hover:shadow-primary hover:scale-y-105`}
                >
                  <div className="text-6xl mb-2">{database.icon}</div>
                  <span className="mt-2 font-semibold">{database.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 mb-16">
              {Tools.map((tool, index) => (
                <li
                  key={index}
                  className={`flex flex-col items-center p-4 border rounded-lg hover:shadow-lg transition duration-300 hover:shadow-primary hover:scale-y-105`}
                >
                  <div className="text-6xl mb-2">{tool.icon}</div>
                  <span className="mt-2 font-semibold">{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default About;
