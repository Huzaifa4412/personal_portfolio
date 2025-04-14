"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Image from "next/image";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);
  const [activeTab, setActiveTab] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const aboutRefValue = aboutRef.current; // Store the value in a variable

    if (aboutRefValue) {
      observer.observe(aboutRefValue);
    }

    return () => {
      if (aboutRefValue) {
        observer.unobserve(aboutRefValue);
      }
    };
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "journey", label: "My Journey" },
  ];

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "NextJS", level: 70 },
    { name: "Tailwind CSS", level: 85 },
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/Huzaifa4412",
      color: "hover:text-slate-600",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/huzaifa-mukhtar-8ba0492b5/",
      color: "hover:text-blue-600",
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/_huzaifa_mukhtar/",
      color: "hover:text-blue-400",
    },
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/huzaifa.mukhtar.2025/",
      color: "hover:text-red-500",
    },
    // { icon: FaCodepen, url: "#", color: "hover:text-purple-600" },
  ];

  return (
    <div
      ref={aboutRef}
      className="bg-gradient-to-br from-gray-900 via-slate-900 to-black min-h-screen text-white py-16 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-7 gap-10"
        >
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#C778DD] shadow-lg shadow-[#C778DD]/20 relative">
                <Image
                  src="/images/huzaifa.jpeg"
                  alt="Huzaifa Mukhtar"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"></div>
                <div className="absolute inset-0 flex items-center justify-center text-[#C778DD] text-xl font-semibold"></div>
              </div>
              <div className="absolute -bottom-5 left-1/2 whitespace-nowrap transform -translate-x-1/2 bg-[#C778DD] text-gray-900 px-6 py-2 rounded-full font-bold shadow-lg">
                Huzaifa Mukhtar
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={itemVariants} className="lg:col-span-5">
            {/* Tabs */}
            <div className="flex mb-8 bg-gray-800/50 p-1 rounded-full gap-2 justify-center lg:justify-start">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 text-lg font-semibold ${
                    activeTab === tab.id
                      ? "bg-[#C778DD] text-gray-900"
                      : "hover:bg-gray-700 text-gray-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700">
              {/* About Me Tab */}
              {activeTab === "about" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4"
                >
                  <h1 className="text-3xl font-bold mb-6 text-[#C778DD]">
                    About Me
                  </h1>
                  <p className="text-lg leading-relaxed">
                    I am an enthusiastic and self-taught Front-End Developer
                    based in Karachi, Pakistan. My interest in web development
                    began a year ago, and since then, I&apos;ve dedicated myself
                    to transforming creative ideas into modern, responsive, and
                    user-friendly web experiences.
                  </p>
                  <p className="text-lg leading-relaxed">
                    My expertise lies in HTML, CSS, JavaScript, React.js, and
                    TypeScript, and I strive to combine innovation and
                    functionality in every project to ensure that each website
                    is not only visually appealing but also functionally robust.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Whether starting a new project or improving an existing
                    site, I pay deep attention to every detail. I&apos;ve worked
                    with various clients to establish and enhance their online
                    presence, and I continuously seek to expand my creative
                    range with new technologies and frameworks.
                  </p>

                  {/* Social Media Links */}
                  <motion.div
                    className="pt-6 flex gap-5 justify-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`text-2xl ${social.color} transition-colors duration-300`}
                      >
                        <social.icon />
                      </motion.a>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              {/* Skills Tab */}
              {activeTab === "skills" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <h1 className="text-3xl font-bold mb-6 text-[#C778DD]">
                    Skills
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="bg-gray-800/50 p-4 rounded-lg border border-gray-700"
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">{skill.name}</span>
                          <span className="font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2.5">
                          <motion.div
                            initial={{ width: "0%" }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="bg-[#C778DD] h-2.5 rounded-full"
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <h2 className="text-xl font-semibold text-[#C778DD] mb-4">
                      Additional Skills
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Git",
                        "Responsive Design",
                        "UI/UX",
                        "Figma",
                        "SASS",
                        "SEO",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-gray-800 rounded-full text-[#C778DD] border border-[#C778DD]/30 shadow-md shadow-[#C778DD]/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Journey Tab */}
              {activeTab === "journey" && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-6"
                >
                  <h1 className="text-3xl font-bold mb-6 text-[#C778DD]">
                    My Journey
                  </h1>

                  <div className="relative pl-6 border-l-2 border-[#C778DD] space-y-10">
                    <div className="relative">
                      <div className="absolute -left-[25px] mt-1 w-12 h-12 bg-[#C778DD] rounded-full flex items-center justify-center text-gray-900">
                        <span className="font-bold">2023</span>
                      </div>
                      <div className="ml-8">
                        <h3 className="text-xl font-bold text-[#C778DD]">
                          Beginning My Web Development Journey
                        </h3>
                        <p className="mt-2 text-gray-300">
                          Started learning web development basics, including
                          HTML, CSS, and JavaScript. Completed several online
                          courses and built my first static websites.
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[25px] mt-1 w-12 h-12 bg-[#C778DD] rounded-full flex items-center justify-center text-gray-900">
                        <span className="font-bold">2024</span>
                      </div>
                      <div className="ml-8">
                        <h3 className="text-xl font-bold text-[#C778DD]">
                          Advancing to Modern Frameworks
                        </h3>
                        <p className="mt-2 text-gray-300">
                          Mastered React.js and NextJS, expanded my knowledge of
                          responsive design principles, and began working with
                          TypeScript to build more robust applications.
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="absolute -left-[25px] mt-1 w-12 h-12 bg-[#C778DD] rounded-full flex items-center justify-center text-gray-900">
                        <span className="font-bold">2025</span>
                      </div>
                      <div className="ml-8">
                        <h3 className="text-xl font-bold text-[#C778DD]">
                          Building My Client Portfolio
                        </h3>
                        <p className="mt-2 text-gray-300">
                          Working with clients to create custom web solutions,
                          continuously learning new technologies, and
                          contributing to open-source projects.
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-10 p-4 bg-[#C778DD]/10 border border-[#C778DD]/30 rounded-lg"
                  >
                    <p className="text-center text-lg italic text-[#C778DD]">
                      &quot;My goal is to create comprehensive and impressive
                      web experiences in every project, meeting user needs and
                      creating memorable interactions.&quot;
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Elements for Visual Appeal */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#C778DD]/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#C778DD]/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#C778DD]/10 rounded-full blur-xl"></div>
      </div>
    </div>
  );
}
