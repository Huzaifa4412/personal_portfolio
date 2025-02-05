"use client";
import React from "react";
import PrimaryBtn from "./PrimaryBtn";
import Image from "next/image";
import Typewriter from "typewriter-effect";

const LandingPage = () => {
  return (
    <div className="container flex h-max lg:h-[430] lg:flex-row flex-col gap-8 items-center !justify-center">
      <div className="part1 lg:w-1/2 w-full flex flex-col !justify-center gap-4">
        <h2 className="text-3xl font-semibold">
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
        </h2>

        <p className="w-[70%]">
          He crafts responsive websites where technologies meet creativity
        </p>
        <PrimaryBtn text="Contact me !!" />
      </div>
      <div className="relative lg:w-1/2 w-full  h-full flex flex-col items-center">
        <Image
          src={"/images/heroImg.png"}
          alt="My Pic"
          width={500}
          height={500}
          className="lg:!h-full lg:!w-auto !w-[400px] lg:absolute z-[5]"
        />
        <Image
          src={"/images/vectors/heroBg.svg"}
          className="vector sm:w-[155px] sm:h-[155px] w-[75px] h-[75px] absolute top-[40%] left-0 z-[4]"
          alt="vector"
          width={155}
          height={155}
        />

        <Image
          src={"/images/vectors/dots.svg"}
          className="vector w-[84px] h-[84px] absolute top-[52%] right-[30%] z-[6]"
          alt="vector"
          width={84}
          height={84}
        />

        <div className="border border-primary px-10 absolute top-full left-1/2 -translate-x-1/2 text-[16px]  w-max text-center">
          Currently working on Portfolio
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
