import React from "react";
import data from "@/project.json";
import ProjectCard, { ProjectsCardProps } from "./ProjectCard";
import Heading from "../Heading";

const Projects = () => {
  return (
    <div className="!mt-20 container">
      <Heading props={{ text: "projects" }} />
      <div className="projects_container my-10 flex flex-wrap gap-4">
        {data.map((item: ProjectsCardProps, idx) => (
          <ProjectCard item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
