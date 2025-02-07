// import ProjectCard from "@/components/Projects/ProjectCard";
import React from "react";
// import data from "@/project.json";

const page = () => {
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
        {/* <div className="projectsContainer py-3">
          <ProjectCard item={} />
        </div> */}
      </div>
    </div>
  );
};

export default page;
