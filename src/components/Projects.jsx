import { FaGithub } from "react-icons/fa";
import { ImGift } from "react-icons/im";

export default function Projects() {
  const projects = [
    {
      title: "Visa Bridge || Visa Navigator Platform",
      tech: [
        "React.JS",
        "REST",
        "Node.JS",
        "HTML",
        "Tailwind CSS",
        "JavaScript",
        "Express",
        "MongoDB",
        "DaisyUI",
      ],
      github_link: "https://github.com/AlaminIbneFaruk/visa-bridge-client",
      image: "https://visabridge2.netlify.app",
      link: "https://visabridge2.netlify.app",
      description:
        "A platform for managing visa applications with secure payments and admin analytics.",
    },
    {
      title: "Artifacts Bazzar || Artifact Management System",
      tech: [
        "React.JS",
        "Express.JS",
        "MongoDB",
        "HTML",
        "Tailwind CSS",
        "JavaScript",
        "DaisyUI",
        "Framer Motion",
      ],
      github_link: "https://github.com/AlaminIbneFaruk/Assignment_11",
      image: "https://assignment-11-62e47.web.app/",
      link: "https://assignment-11-62e47.web.app/",
      description:
        "Digital artifact cataloging system with admin control and clean UI animations.",
    },
    {
      title: "AI-powered Blog For Tech || Blog Platform",
      tech: ["Django", "FastAPI", "HTML", "CSS", "Bootstrap", "Backend Only"],
      github_link: "https://github.com/AlaminIbneFaruk/blog-final",
      link: "https://blog-final-swart.vercel.app/",
      description:
        "Engineered a full-stack blogging platform empowering users to create, publish, and explore tech articles effortlessly.",
    },
    {
      title: "Shomvob Travels || Travel Management System",
      tech: [
        "Express.JS",
        "REST APIs",
        "React.JS",
        "PostgreSQL",
        "Tailwind CSS",
        "JavaScript",
        "Tailwind CSS",
        "JavaScript",
        "DaisyUI",
        "Framer Motion",
      ],
      github_link: "https://github.com/AlaminIbneFaruk/shomvob-travels",
      image: "https://shomvobtravels.netlify.app/",
      link: "https://shomvobtravels.netlify.app/",
      description:
        "Designed and deployed a full-stack travel management system for showcasing tourist destinations.",
    },
  ];

  return (
    <section id="projects" className="mb-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-10">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="card shadow-white/20 shadow-xl hover:scale-105 transition"
            >
              {project.image?<iframe
                src={project?.image}
                title={project.title}
                className="w-full h-96 object-cover rounded-t-lg "
              ></iframe>:<img src={"/Blog.png"} alt={project.title} className="h-96" />}
              <div className="card-body">
                <h3 className="card-title text-3xl">{project.title}</h3>
                <p>{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((t, idx) => (
                    <div key={idx} className="badge badge-outline">
                      {t}
                    </div>
                  ))}
                </div>
                <div
                  className={`flex mt-4 ${
                    project.link ? ` items-center gap-4` : ``
                  }`}
                >
                  <a
                    href={project.github_link}
                    className={`btn btn-primary ${
                      project.link ? `w-[50%]` : `btn-block`
                    }`}
                  >
                    <FaGithub /> Link
                  </a>
                  {project.link ? (
                    <a href={project.link} className="btn btn-primary w-[50%]">
                      View Link
                    </a>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
