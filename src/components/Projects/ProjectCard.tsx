import React from "react";
import PrimaryBtn from "../PrimaryBtn";
import Image from "next/image";
import { ProjectType } from "../../../Typing";
import { urlFor } from "@/sanity/lib/image";

const ProjectCard = ({ item }: { item: ProjectType }) => {
  return (
    <div className="flex-shrink-0 sm:w-[330px] sm:h-[430px] w-[280px] h-[420px] border border-primary flex flex-col">
      <div className="product_img w-full h-[200px]">
        <Image
          src={urlFor(item.project_image).url()}
          alt="Project"
          width={500}
          height={500}
          className="w-full h-full object-cover object-center"
        ></Image>
      </div>
      <div className="project_technologies w-full border text-gray p-[8px]">
        {item.technologies.slice(0, 2).map((item, idx) => {
          return (
            <span key={idx} className="mr-3">
              {item}
            </span>
          );
        })}
      </div>
      <div className="p-[16px] flex flex-col justify-evenly gap-4 flex-grow ">
        <div className="project_name text-2xl text-white">{item.name}</div>
        <div className="projects_description text-gray">
          {item.description.split(" ").length > 3
            ? item.description.split(" ").slice(0, 5).join(" ") + "..."
            : item.description}
        </div>
        <div>
          {item.project_link ? (
            <a href={item.project_link} target="_blank">
              <PrimaryBtn text="Live" img />
            </a>
          ) : (
            <PrimaryBtn text="Live" img />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
