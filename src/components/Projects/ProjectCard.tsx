import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import Image from "next/image";

export interface ProjectsCardProps {
  name: string;
  img: string;
  description: string;
  technologies: Array<string>;
  link: string;
}
const ProjectCard = ({ item }: { item: ProjectsCardProps }) => {
  return (
    <div className="flex-shrink-0 sm:w-[330px] sm:h-[430px] w-[300px] h-[400px] border border-primary flex flex-col">
      <div className="product_img w-full h-[200px]">
        <Image
          src={item.img}
          alt="Project"
          width={500}
          height={500}
          className="w-full h-full object-cover object-center"
        ></Image>
      </div>
      <div className="project_technologies w-full border text-gray p-[8px]">
        {item.technologies.map((item, idx) => {
          return (
            <span key={idx} className="mr-3">
              {item}
            </span>
          );
        })}
      </div>
      <div className="p-[16px] flex flex-col justify-evenly gap-4 flex-grow ">
        <div className="project_name text-2xl text-white">{item.name}</div>
        <div className="projects_description text-gray">{item.description}</div>
        <PrimaryBtn text="Live" img />
      </div>
    </div>
  );
};

export default ProjectCard;
