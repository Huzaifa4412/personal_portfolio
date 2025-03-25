"use client";
import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Image from "next/image";
import CircularProgressBar from "./ProgressBar";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="container !my-20"
    >
      <motion.div variants={itemVariants}>
        <Heading props={{ text: "skills" }} />
      </motion.div>
      <div className="w-full flex md:flex-row flex-col items-center justify-between">
        {windowSize.width > 780 && (
          <motion.div
            className="relative w-[30%]"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={"/images/vectors/dots.svg"}
                className="relative top-[20%] my-8 w-[63px] h-[63px]"
                alt="Vector"
                width={63}
                height={63}
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ rotate: -180 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={"/images/vectors/dots.svg"}
                className="relative top-[50%] left-1/2 my-8 w-[63px] h-[63px]"
                alt="Vector"
                width={63}
                height={63}
              />
            </motion.div>
            <motion.div
              className="box border w-[86px] h-[86px] relative left-5 top-12"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            ></motion.div>
            <motion.div
              className="box border w-[56px] h-[56px] relative left-2/3 top-0 -translate-y-16"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            ></motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={"/images/vectors/heroBg.svg"}
                className="relative bottom-0 my-8 w-[83px] h-[83px]"
                alt="Vector"
                width={83}
                height={83}
              />
            </motion.div>
          </motion.div>
        )}
        <motion.div
          className="w-[70%] mt-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="skillsContainer w-full flex flex-wrap gap-14 items-center justify-evenly grid-flow-col">
            <motion.div variants={itemVariants}>
              <CircularProgressBar progress={90} label="HTML" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CircularProgressBar progress={85} label="CSS" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CircularProgressBar progress={70} label="TYPESCRIPT" />
            </motion.div>
            <motion.div variants={itemVariants}>
              <CircularProgressBar progress={80} label="REACT JS" />
            </motion.div>
            {windowSize.width > 1024 && (
              <>
                <motion.div variants={itemVariants}>
                  <CircularProgressBar progress={75} label="NEXT JS" />
                </motion.div>
                <motion.div variants={itemVariants}>
                  <CircularProgressBar progress={95} label="SANITY" />
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
