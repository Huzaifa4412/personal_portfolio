"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { motion, Variants } from "framer-motion";
import PrimaryBtn from "./PrimaryBtn";

const LandingPage: React.FC = () => {
  // Minimalistic Repeating Animations
  const subtleFloatVariants: Variants = {
    initial: {
      y: 0,
      rotate: 0,
    },
    animate: {
      y: [0, -10, 0], // Subtle vertical float
      rotate: [0, 1, -1, 0], // Minimal rotation
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  const slowPulseVariants: Variants = {
    initial: {
      scale: 1,
      opacity: 1,
    },
    animate: {
      scale: [1, 1.02, 1],
      opacity: [1, 0.9, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  const gentleRotateVariants: Variants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="container flex h-max lg:h-[430] lg:flex-row flex-col gap-8 items-center !justify-center"
    >
      <div className="part1 lg:w-1/2 w-full flex flex-col !justify-center gap-4">
        <motion.h2
          variants={subtleFloatVariants}
          className="text-3xl font-semibold"
        >
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

        <motion.p variants={slowPulseVariants} className="w-[70%]">
          He crafts responsive websites where technologies meet creativity
        </motion.p>

        <motion.div variants={gentleRotateVariants}>
          <PrimaryBtn text="Contact me !!" />
        </motion.div>
      </div>

      <motion.div
        variants={subtleFloatVariants}
        className="relative lg:w-1/2 w-full h-full flex flex-col items-center"
      >
        <motion.div variants={slowPulseVariants} className="lg:relative z-[5]">
          <Image
            src={"/images/heroImg.png"}
            alt="My Pic"
            width={500}
            height={500}
            className="lg:h-full lg:w-[470px] w-[400px] lg:relative z-[5]"
          />
        </motion.div>

        <motion.div
          variants={gentleRotateVariants}
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
          variants={gentleRotateVariants}
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
          variants={slowPulseVariants}
          className="border border-primary px-10 absolute top-full left-1/2 -translate-x-1/2 text-[16px] w-max text-center"
        >
          Currently working on Portfolio
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
