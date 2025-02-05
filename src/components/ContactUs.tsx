import React from "react";
import Heading from "./Heading";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div className="relative">
      <div className="container">
        <Heading props={{ text: "contacts" }} />
        <div className="flex justify-between md:flex-row flex-col gap-5 items-center md:items-start my-10">
          <div>
            <p className="xl:w-1/2 md:w-[80%] w-full">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          <div className="border p-[16px] !w-max">
            <h3 className="text-white text-center font-semibold">
              Message me here
            </h3>

            <div className="flex !w-max items-center hover:text-white gap-4 my-5">
              <Image
                src={"/images/Email.svg"}
                alt="Email"
                width={32}
                height={32}
                className="w-8 h-8"
              ></Image>
              <a href="mailto:mukhtarhuzaifa436@gmail.com">
                mukhtarhuzaifa436@gmail.com
              </a>
            </div>

            <div className="flex items-center hover:text-white gap-4">
              <Image
                src={"/images/Linkedin.svg"}
                alt="Linkedin"
                width={32}
                height={32}
                className="w-8 h-8"
              ></Image>
              <a href="https://www.linkedin.com/in/huzaifa-mukhtar-8ba0492b5/">
                Huzaifa Mukhtar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* {/* Vector div */}
      <Image
        src={"/images/vectors/dots.svg"}
        alt="Dots"
        width={54}
        height={54}
        className="w-[54px] h-[54px] absolute left-0 -translate-x-4 sm:bottom-0 -bottom-10"
      ></Image>
    </div>
  );
};

export default ContactUs;
