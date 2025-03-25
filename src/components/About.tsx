"use client";
import React from "react";

import Heading from "./Heading";
import PrimaryBtn from "./PrimaryBtn";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative !my-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <motion.div variants={fadeInUp}>
          <Heading props={{ text: "about" }} />
        </motion.div>
        <div className="flex justify-between md:flex-row flex-col items-center md:items-start">
          <motion.div className="md:w-1/2 w-full py-10" variants={fadeInUp}>
            <motion.p
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Hello, i&apos;m Huzaifa!
              <br />
              <br />
              I&apos;m a self-taught front-end developer based in Karachi,
              Pakistan. I can develop responsive websites from scratch and raise
              them into modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </motion.p>
            <motion.div
              className="my-8"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <PrimaryBtn text="Read more" img />
            </motion.div>
          </motion.div>
          <motion.div
            className="md:w-1/2 w-full relative flex items-center justify-center"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={"/images/aboutMe.png"}
                alt="My Pic"
                width={400}
                height={500}
                className="rounded-3xl shadow-md object-cover object-center !w-[350px] h-full"
                quality={100}
              />
            </motion.div>
            <motion.div animate={floatingAnimation.animate} initial={{ y: 0 }}>
              <Image
                src={"/images/vectors/dots.svg"}
                alt="Dots"
                width={84}
                height={84}
                className="absolute top-1/2 left-[30%]"
              />
            </motion.div>
            <motion.div animate={floatingAnimation.animate} initial={{ y: 0 }}>
              <Image
                src={"/images/vectors/dots.svg"}
                alt="Dots"
                width={84}
                height={54}
                className="absolute w-[84px] h-[54px] top-[70%] left-[80%]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Vector div */}
      <motion.div
        className="box border w-[75px] h-[75px] xl:w-[155px] xl:h-[155px] absolute !bottom-[0%] left-0 -translate-x-[20%]"
        whileHover={{ scale: 1.1, rotate: 45 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
      <motion.div animate={floatingAnimation.animate} initial={{ y: 0 }}>
        <Image
          src={"/images/vectors/dots.svg"}
          alt="Dots"
          width={103}
          height={103}
          className="xl:w-[103px] xl:h-[103px] w-[60px] h-[60px] absolute xl:right-[-40px] right-[-20px]"
        />
      </motion.div>
    </motion.div>
  );
};

export default About;
