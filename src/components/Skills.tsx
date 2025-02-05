"use client";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import CircularProgressBar from "./ProgressBar";

const Skills = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Function to update state on resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Set initial size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container !my-20">
      <Heading props={{ text: "skills" }} />
      <div className="w-full flex md:flex-row flex-col items-center justify-between">
        {windowSize.width > 780 && (
          <div className="relative w-[30%]">
            <Image
              src={"/images/vectors/dots.svg"}
              className="relative top-[20%] my-8 w-[63px] h-[63px]"
              alt="Vector"
              width={63}
              height={63}
            />
            <Image
              src={"/images/vectors/dots.svg"}
              className="relative top-[50%] left-1/2 my-8 w-[63px] h-[63px]"
              alt="Vector"
              width={63}
              height={63}
            />
            <div className="box border w-[86px] h-[86px] relative left-5 top-12"></div>
            <div className="box border w-[56px] h-[56px] relative left-2/3 top-0 -translate-y-16"></div>
            <Image
              src={"/images/vectors/heroBg.svg"}
              className="relative bottom-0 my-8 w-[83px] h-[83px]"
              alt="Vector"
              width={83}
              height={83}
            />
          </div>
        )}
        <div className="w-[70%]  mt-5">
          <div className="skillsContainer w-full flex flex-wrap gap-14 items-center justify-evenly grid-flow-col">
            <CircularProgressBar progress={90} label="HTML" />
            <CircularProgressBar progress={85} label="CSS" />
            <CircularProgressBar progress={70} label="TYPESCRIPT" />
            <CircularProgressBar progress={80} label="REACT JS" />
            {windowSize.width > 1024 && (
              <>
                <CircularProgressBar progress={75} label="NEXT JS" />
                <CircularProgressBar progress={95} label="SANITY" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
