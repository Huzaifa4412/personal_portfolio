import React from "react";
import Image from "next/image";

const Connection = () => {
  return (
    <div className="absolute top-0 z-[999] bg-background left-3 2xl:left-5 grid place-items-center gap-1">
      <div className="stoke w-[1px] h-[191px] bg-gray"></div>
      <a href="https://github.com/Huzaifa4412" target="_blank">
        <Image
          src={"/images/Github.svg"}
          alt="Github"
          width={32}
          height={32}
          className="w-8 h-8 cursor-pointer"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/huzaifa-mukhtar-8ba0492b5/"
        target="_blank"
      >
        <Image
          src={"/images/Linkedin.svg"}
          alt="Linkedin"
          width={32}
          height={32}
          className="w-8 h-8  cursor-pointer"
        />
      </a>
      <a href="mailto:mukhtarhuzaifa436@gmail.com">
        <Image
          src={"/images/Email.svg"}
          alt="Email"
          width={32}
          height={32}
          className="w-8 h-8  cursor-pointer"
        />
      </a>
    </div>
  );
};

export default Connection;
