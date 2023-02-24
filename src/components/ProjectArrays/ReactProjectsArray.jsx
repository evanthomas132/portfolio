import { reactProjects } from "./ProjectsArray";
import { motion } from "framer-motion";
import { projectAnimation } from "../Framer_Motion/framer_motion";
import { AiOutlineCode } from "react-icons/ai";
import { MdComputer } from "react-icons/md";

export const ReactProjects = (
  <div>
    {reactProjects.slice(0, 3).map((react_project, i) => (
      <motion.div
        className="project_item"
        key={react_project.title}
        variants={projectAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, delay: i * 1 }}
      >
        <div className="project_image">
          <img src={react_project.img} alt={react_project.title} />
        </div>
        <div className="project_info">
          <h2>{react_project.title}</h2>
          <div className="project_link">
            <a href={react_project.seeCode} target="_blank" rel="noreferrer">
              See Code:
              <AiOutlineCode className="icon" />
            </a>
            <a href={react_project.seeLive} target="_blank" rel="noreferrer">
              See Live:
              <MdComputer className="icon" />
            </a>
          </div>
          <p>{react_project.description}</p>
          <div className="tech_stack">
            <h3>Tech Stack:</h3>
            <ul>
              {react_project.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);
