import { typeScriptProjects } from "./ProjectsArray";
import {motion} from 'framer-motion'
import { projectAnimation } from "../Framer_Motion/framer_motion";
import { AiOutlineCode } from "react-icons/ai";
import { MdComputer } from "react-icons/md";

export const TypeScriptProjectsArray = (
  <div>
    {typeScriptProjects.slice(0, 3).map((typescript_projects, i) => (
      <motion.div
        className="project_item"
        key={typescript_projects.title}
        variants={projectAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 1, delay: i * 1 }}
      >
        <div className="project_image">
          <img src={typescript_projects.img} alt={typescript_projects.title} />
        </div>
        <div className="project_info">
          <h2>{typescript_projects.title}</h2>
          <div className="project_link">
            <a href={typescript_projects.seeCode} target="_blank" rel="noreferrer">
              See Code:
              <AiOutlineCode className="icon" />
            </a>
            <a href={typescript_projects.seeLive} target="_blank" rel="noreferrer">
              See Live:
              <MdComputer className="icon" />
            </a>
          </div>
          <p>{typescript_projects.description}</p>
          <div className="tech_stack">
            <h3>Tech Stack:</h3>
            <ul>
              {typescript_projects.techStack.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);
