"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  // Open Close - Navbar
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Large Screen View Starts Here */}
      <div className="md:flex hidden container py-[32px] px-[8px]  items-center justify-between">
        <div className="logo flex items-center  gap-2 text-white font-bold ">
          <Image
            src={"/images/Logo.svg"}
            alt="Logo"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          Huzaifa
        </div>
        <div className="nav-items">
          <ul className="flex items-center gap-[32px]">
            <li>
              <Link
                href="/"
                className="text-gray hover:text-white font-medium text-[16px]"
              >
                <span className="text-primary">#</span>home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-gray hover:text-white font-medium text-[16px]"
              >
                <span className="text-primary">#</span>works
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-gray hover:text-white font-medium text-[16px]"
              >
                <span className="text-primary">#</span>about-me
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-gray hover:text-white font-medium text-[16px]"
              >
                <span className="text-primary">#</span>contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Large Screen View Ends Here */}

      {/* Small Screen View Start Here */}
      <div className="container md:hidden duration-500  py-[32px] px-[8px] flex justify-between">
        <div className="logo flex items-center  gap-2 text-white font-bold ">
          <Image
            src={"/images/Logo.svg"}
            alt="Logo"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          Huzaifa
        </div>
        <Image
          src={"/images/menu.svg"}
          alt="Menu"
          width={24}
          height={24}
          onClick={() => setIsOpen(!isOpen)}
        ></Image>
        {isOpen && (
          <div className="w-full container  py-[32px] px-[8px] h-screen bg-background fixed top-0 left-0 z-[9999]">
            <div className="flex justify-between">
              <div className="logo flex items-center  gap-2 text-white font-bold ">
                <Image
                  src={"/images/Logo.svg"}
                  alt="Logo"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                Huzaifa
              </div>
              <Image
                src={"/images/cross.svg"}
                alt="Cross"
                width={24}
                height={24}
                onClick={() => setIsOpen(!isOpen)}
              ></Image>
            </div>

            <div className="nav-items mt-20">
              <ul className="flex flex-col gap-5">
                <li className="text-3xl hover:text-white">
                  <Link href={"/"}>
                    <span className="text-primary">#</span>home
                  </Link>
                </li>
                <li className="text-3xl hover:text-white">
                  <Link href={"/"}>
                    <span className="text-primary">#</span>works
                  </Link>
                </li>
                <li className="text-3xl hover:text-white">
                  <Link href={"/"}>
                    <span className="text-primary">#</span>about-me
                  </Link>
                </li>
                <li className="text-3xl hover:text-white">
                  <Link href={"/"}>
                    <span className="text-primary">#</span>contacts
                  </Link>
                </li>
              </ul>
            </div>

            <footer className="absolute bottom-5 flex left-0 justify-center w-full items-center">
              <Image
                src={"/images/Linkedin.svg"}
                alt="Linkedin"
                width={64}
                height={64}
                className="w-16 h-16"
              ></Image>

              <Image
                src={"/images/Github.svg"}
                alt="Github"
                width={64}
                height={64}
                className="w-16 h-16"
              ></Image>

              <Image
                src={"/images/Email.svg"}
                alt="Email"
                width={64}
                height={64}
                className="w-16 h-16"
              ></Image>
            </footer>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
