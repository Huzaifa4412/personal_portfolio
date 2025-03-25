"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./project_section.module.css";
import { ProjectType } from "../../../Typing";
import { urlFor } from "@/sanity/lib/image";

const ProjectCard = ({ item }: { item: ProjectType }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.div
      className={styles.projectCard}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover="hover"
    >
      <motion.div className={styles.imageContainer} variants={imageVariants}>
        <Image
          src={urlFor(item.project_image).url()}
          alt="Project"
          width={400}
          height={300}
          className={styles.projectImage}
        />
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={item.project_link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            View Project
          </motion.a>
        </motion.div>
      </motion.div>
      <div className={styles.projectInfo}>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {item.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {item.description.split(" ").length > 3
            ? item.description.split(" ").slice(0, 5).join(" ") + "..."
            : item.description}
        </motion.p>
        <motion.div className={styles.techStack}>
          {item.technologies.slice(0, 2).map((tech, index) => (
            <motion.span
              key={tech}
              variants={techVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className={styles.techTag}
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
