import React from "react";
import Heading from "./Heading";
import PrimaryBtn from "./PrimaryBtn";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative !my-10">
      <div className="container">
        <Heading props={{ text: "about" }} />
        <div className="flex justify-between md:flex-row flex-col items-center md:items-start">
          <div className="md:w-1/2 w-full py-10">
            <p>
              Hello, i’m Huzaifa!
              <br />
              <br />
              I’m a self-taught front-end developer based in Kyiv, Ukraine. I
              can develop responsive websites from scratch and raise them into
              modern user-friendly web experiences.
              <br />
              <br />
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
            <div className="my-8">
              <PrimaryBtn text="Read more" img />
            </div>
          </div>
          <div className="md:w-1/2 w-full relative flex items-center justify-center">
            <Image
              src={"/images/aboutMe.png"}
              alt="My Pic"
              width={400}
              height={500}
              className="rounded-3xl shadow-md object-cover object-center w-[350px] h-full"
              layout="responsive"
              quality={100}
            ></Image>
            <Image
              src={"/images/vectors/dots.svg"}
              alt="Dots"
              width={84}
              height={84}
              className="absolute top-1/2 left-[30%]"
            />
            <Image
              src={"/images/vectors/dots.svg"}
              alt="Dots"
              width={84}
              height={54}
              className="absolute w-[84px] h-[54px] top-[70%] left-[80%]"
            />
          </div>
        </div>
      </div>

      {/* Vector div */}
      <div className="box border w-[75px] h-[75px] xl:w-[155px] xl:h-[155px] absolute !bottom-[0%] left-0 -translate-x-[20%]"></div>
      <Image
        src={"/images/vectors/dots.svg"}
        alt="Dots"
        width={103}
        height={103}
        className="xl:w-[103px] xl:h-[103px] w-[60px] h-[60px] absolute xl:right-[-40px] right-[-20px]"
      ></Image>
    </div>
  );
};

export default About;
