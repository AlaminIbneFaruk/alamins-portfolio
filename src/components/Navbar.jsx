import { Link } from "react-scroll";
import ThemeSelector from "./ThemeController";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-10 w-full">
      <nav className="navbar rounded-b-box border-b-2 justify-between items-center backdrop-blur-md">
        <div>
          <Link
            to="home"
            smooth={true}
            duration={800}
            offset={-70} // adjust for navbar height
            className="cursor-pointer hover:text-blue-800 text-lg"
          >
            My Portfolio
          </Link>
        </div>
        <div className=" lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg bg-base-100/30 rounded-2xl font-semibold">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={800}
                offset={-70} // adjust for navbar height
                className="cursor-pointer hover:text-blue-800"
              >
                {" "}
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                offset={-40} // adjust for navbar height
                className="cursor-pointer hover:text-blue-800"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={400}
                offset={-80} // adjust for navbar height
                className="cursor-pointer hover:text-blue-800"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                offset={-80} // adjust for navbar height
                className="cursor-pointer hover:text-blue-800"
              >
                {" "}
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                smooth={true}
                duration={800}
                offset={-80} // adjust for navbar height
                className="cursor-pointer hover:text-blue-800"
              >
                {" "}
                Resume
              </Link>
            </li>
            <ThemeSelector />     
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
