"use client";
import ProjectCard from "@/components/Projects/ProjectCard";
import { ProjectsContext } from "@/context/projectsContext";
// import ProjectCard from "@/components/Projects/ProjectCard";
import React, { useContext } from "react";
// import data from "@/project.json";

const Page = () => {
  const data = useContext(ProjectsContext);
  return (
    <div className="container !mt-5">
      <div>
        <h2 className="text-4xl text-white font-semibold mb-3">
          <span className="text-primary">/</span>projects
        </h2>
        <p>List of my projects</p>
      </div>
      <div id="complete_app" className="my-10">
        <h2 className="text-4xl text-white font-semibold mb-3">
          <span className="text-primary">#</span>complete-apps
        </h2>
        <div className="projectsContainer py-3 flex gap-4 flex-wrap justify-center lg:justify-start">
          {data
            ?.filter((item) => item.isCompleted)
            .map((item, idx) => <ProjectCard item={item} key={idx} />)}
        </div>
      </div>
    </div>
  );
};

export default Page;
