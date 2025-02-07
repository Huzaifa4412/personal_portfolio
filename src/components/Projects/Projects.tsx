"use client";
import React, { useContext } from "react";
import Styles from "./project_section.module.css";
// import data from "@/project.json";
import ProjectCard from "./ProjectCard";
import Heading from "../Heading";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import required modules
import { EffectCube, Pagination } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css";

import "swiper/css/effect-cards";

import { EffectCoverflow } from "swiper/modules";
// import { EffectCards } from "swiper/modules";s
import "swiper/css/effect-cube";
import "swiper/css/pagination";
// import { client } from "@/sanity/lib/client";
import { ProjectType } from "../../../Typing";
import { ProjectsContext } from "@/context/projectsContext";

// const getProjects = async () => {
//   const query = `*[_type == "projects"]`;
//   const data: ProjectType[] = await client.fetch(query);
//   return data;
// };

const Projects = () => {
  const context = useContext(ProjectsContext);
  const [data, setData] = React.useState<ProjectType[] | null>(null);

  React.useEffect(() => {
    setData(context);
  }, [context]);
  return (
    <div className="!mt-20 container p-0">
      <Heading props={{ text: "projects" }} />
      <div className="projects_container sm:flex hidden !p-0 my-10 w-full  xl-1440:w-[75%] mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          pagination={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          // spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {data
            ? data.map((item: ProjectType, idx) => (
                <SwiperSlide key={idx}>
                  <ProjectCard item={item} />
                </SwiperSlide>
              ))
            : "Loading..."}
        </Swiper>
      </div>
      <div
        className={`${Styles.cubeEffect} sm:hidden block py-8 sm:mx-auto mx-0 sm:w-max`}
      >
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          pagination={true}
          modules={[EffectCube, Pagination]}
          className="flex items-center justify-center"
        >
          {data
            ? data.map((item: ProjectType, idx) => (
                <SwiperSlide key={idx}>
                  <ProjectCard item={item} />
                </SwiperSlide>
              ))
            : "Loading..."}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
