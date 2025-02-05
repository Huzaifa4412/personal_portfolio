import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="container border-t py-8 ">
      <div className="flex justify-between sm:flex-row flex-col items-center sm:items-start">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="logo flex items-center gap-2 text-white font-bold ">
            <Image
              src={"/images/Logo.svg"}
              alt="Logo"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            Huzaifa
          </div>
          <p>mukhtarhuzaifa436@gmail.com</p>
        </div>
        <div className="media ">
          <h3 className="text-white text-xl font-semibold text-center pb-2">
            Media
          </h3>
          <div className="flex items-center gap-3">
            <Image
              src={"/images/Github.svg"}
              alt="Github"
              width={32}
              height={32}
              className="w-8 h-8 cursor-pointer"
            />
            <Image
              src={"/images/Linkedin.svg"}
              alt="Linkedin"
              width={32}
              height={32}
              className="w-8 h-8  cursor-pointer"
            />
            <Image
              src={"/images/Email.svg"}
              alt="Email"
              width={32}
              height={32}
              className="w-8 h-8  cursor-pointer"
            />
          </div>
        </div>
      </div>
      <p className="text-gray text-[14px] mt-4 text-center">
        © {new Date().getFullYear()} Huzaifa. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
