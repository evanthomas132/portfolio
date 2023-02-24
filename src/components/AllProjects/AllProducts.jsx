import React, { useState } from "react";
import "../Projects/project.css";
import { reactProjects } from "../ProjectArrays/ProjectsArray";
import { typeScriptProjects } from "../ProjectArrays/ProjectsArray";
import { AiOutlineCode } from "react-icons/ai";
import { MdComputer } from "react-icons/md";

const AllProducts = () => {
  const [activeSection, setActiveSection] = useState("react");

  const handleReactClick = () => {
    setActiveSection("react");
  };
  const handleTypescriptClick = () => {
    setActiveSection("typescript");
  };

  return (
    <div className="projects">
      <div className="project_title">
        <h1>All Projects</h1>
        <div className="project_links">
          <li onClick={handleReactClick}>ReactJS</li>
          <li onClick={handleTypescriptClick}>TypeScript</li>
        </div>
        {activeSection === "react" &&
          reactProjects.map((react_project, i) => (
            <div className="project_item" key={react_project.title}>
              <div className="project_image">
                <img src={react_project.img} alt={react_project.title} />
              </div>
              <div className="project_info">
                <h2>{react_project.title}</h2>
                <div className="project_link">
                  <a
                    href={react_project.seeCode}
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Code:
                    <AiOutlineCode className="icon" />
                  </a>
                  <a
                    href={react_project.seeLive}
                    target="_blank"
                    rel="noreferrer"
                  >
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
            </div>
          ))}
        {activeSection === "typescript" &&
          typeScriptProjects.map((typescript_projects) => (
            <div className="project_item" key={typescript_projects.title}>
              <div className="project_image">
                <img
                  src={typescript_projects.img}
                  alt={typescript_projects.title}
                />
              </div>
              <div className="project_info">
                <h2>{typescript_projects.title}</h2>
                <div className="project_link">
                  <a
                    href={typescript_projects.seeCode}
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Code:
                    <AiOutlineCode className="icon" />
                  </a>
                  <a
                    href={typescript_projects.seeLive}
                    target="_blank"
                    rel="noreferrer"
                  >
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
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllProducts;
