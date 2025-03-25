"use client";
import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const LandingPage = () => {
  // Precise animation variants to maintain original positioning
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    initial: {
      scale: 0.9,
      opacity: 0,
      position: "relative", // Ensure original positioning
      top: "auto",
      left: "auto",
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  const vectorVariants = {
    initial: {
      rotate: 0,
      scale: 0.5,
      opacity: 0,
      position: "absolute", // Maintain absolute positioning
    },
    animate: {
      rotate: 360,
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container flex h-max lg:h-[430] lg:flex-row flex-col gap-8 items-center !justify-center"
    >
      <motion.div
        variants={itemVariants}
        className="part1 lg:w-1/2 w-full flex flex-col !justify-center gap-4"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-semibold">
          <span className="text-white font-bold">Huzaifa</span> is a{" "}
          <span className="text-primary">
            <Typewriter
              options={{
                strings: [
                  "Web Developer 🚀",
                  "Next.js Enthusiast 💙",
                  "TypeScript Fanatic 🦕",
                  "React.js Specialist ⚛️",
                  "UI/UX Explorer 🧑‍🎨",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>{" "}
          and a{" "}
          <span className="text-white">
            <Typewriter
              options={{
                strings: [
                  "Frontend Alchemist 🎨🔮",
                  "Full Stack Developer 🌍",
                  "Tailwind CSS Stylist 🎨",
                  "Code Artist 👨‍💻",
                  "Bug Slayer 🐞🔨",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </motion.h2>

        <motion.p variants={itemVariants} className="w-[70%]">
          He crafts responsive websites where technologies meet creativity
        </motion.p>

        <motion.div variants={itemVariants}>
          <PrimaryBtn text="Contact me !!" />
        </motion.div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="relative lg:w-1/2 w-full h-full flex flex-col items-center"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={imageVariants}
          className="lg:relative z-[5]"
        >
          <Image
            src={"/images/heroImg.png"}
            alt="My Pic"
            width={500}
            height={500}
            className="lg:h-full lg:w-[470px] w-[400px] lg:relative z-[5]"
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={vectorVariants}
          className="vector sm:w-[155px] sm:h-[155px] w-[75px] h-[75px] absolute top-[40%] left-0 z-[4]"
        >
          <Image
            src={"/images/vectors/heroBg.svg"}
            alt="vector"
            width={155}
            height={155}
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={vectorVariants}
          className="vector w-[84px] h-[84px] absolute top-[52%] right-[30%] z-[6]"
        >
          <Image
            src={"/images/vectors/dots.svg"}
            alt="vector"
            width={84}
            height={84}
            className="w-full h-full"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="border border-primary px-10 absolute top-full left-1/2 -translate-x-1/2 text-[16px] w-max text-center"
        >
          Currently working on Portfolio
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
