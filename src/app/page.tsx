import About from "@/components/About";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import Projects from "@/components/Projects/Projects";
import Quote from "@/components/Quote";
import Skills from "@/components/Skills";
import React from "react";

const page = () => {
  return (
    <>
      <LandingPage />
      <Quote />
      <Projects />
      <Skills />
      <About />
      <ContactUs />
      <Footer />
    </>
  );
};

export default page;
