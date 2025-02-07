"use client";
import React from "react";
// import data from "@/project.json";
import ProjectCard from "./ProjectCard";
import Heading from "../Heading";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow } from "swiper/modules";
import { client } from "@/sanity/lib/client";
import { ProjectType } from "../../../Typing";

const getProjects = async () => {
  const query = `*[_type == "projects"]`;
  const data: ProjectType[] = await client.fetch(query);
  return data;
};

const Projects = () => {
  const [data, setData] = React.useState<ProjectType[] | null>(null);
  React.useEffect(() => {
    getProjects().then((data) => setData(data));
  }, []);
  return (
    <div className="!mt-20 container p-0">
      <Heading props={{ text: "projects" }} />
      <div className="projects_container !p-0 my-10 flex flex-wrap gap-4 w-[80%] mx-auto">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
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
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
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
    </div>
  );
};

export default Projects;
