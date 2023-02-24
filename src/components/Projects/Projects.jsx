import React, { useState, useRef } from "react";
import { useInView } from "framer-motion";
import "./project.css";
import { Link } from "react-router-dom";
import { ReactProjects } from "../ProjectArrays/ReactProjectsArray";
import { TypeScriptProjectsArray } from "../ProjectArrays/TypescriptProjectArray";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeSection, setActiveSection] = useState("react");

  const handleReactClick = () => {
    setActiveSection("react");
  };
  const handleTypescriptClick = () => {
    setActiveSection("typescript");
  };

  return (
    <div className="projects" id="projects">
      <div className="project_title">
        <h1>My Projects</h1>
      </div>
      <div className="project_links">
        <li onClick={handleReactClick}>ReactJS</li>
        <li>
          <a
            href="https://github.com/evanthomas132?tab=repositories"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li onClick={handleTypescriptClick}>TypeScript</li>
      </div>
      <div className="project_header">
        {activeSection === "react" && (
          <p>
            The projects listed below are only a few of the projects built with
            ReactJS and involve the use of various APIs and other technologies.
            These projects likely utilize different data sources and external
            services to provide users with interactive and dynamic experiences.
            The technologies and APIs used may vary from project to project, but
            ReactJS is likely used as the foundation for building the user
            interface and managing application state.
          </p>
        )}
        {activeSection === "typescript" && (
          <p>
            As I am currently learning Typescript, I have only completed a few
            projects in this language so far. However, I am continuously working
            to expand my knowledge and build more complex applications using
            this technology. However, I'm always working on improving my skills
            and building new projects, so stay tuned for more exciting projects
            coming soon!
          </p>
        )}
      </div>
      <div className="project_items">
        {activeSection === "react" && (
          <div
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            {ReactProjects}
            <div className="project_button">
              <Link to={"/projects"}>
                <button onClick={() => window.scrollTo(0, 0)}>
                  See All Projects Here!
                </button>
              </Link>
            </div>
          </div>
        )}
        {activeSection === "typescript" && <div>{TypeScriptProjectsArray}</div>}
      </div>
    </div>
  );
};

export default Projects;
