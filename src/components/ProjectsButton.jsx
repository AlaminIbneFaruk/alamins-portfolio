import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

const ProjectsButton = () => {
  return (
    <div>
      <Link to="skills" smooth={true} duration={500} className=" btn btn-primary btn-outline btn-circle animate-bounce">
        <FaArrowDown />
      </Link>
    </div>
  );
};

export default ProjectsButton;