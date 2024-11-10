"use client";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Photo from "./MyPhoto";
import styles from "../styles/HeroSection.module.css"; // Correct import for CSS Modules

const HeroSection = () => {
  const socialLinks = [
    {
      icon: <IoLogoInstagram size={20} />,
      url: "https://www.instagram.com/abdul.rehman_arain/",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      url: "https://www.linkedin.com/in/abdul-rehman-b4ab90329",
    },
    {
      icon: <FaGithub size={20} />,
      url: "https://github.com/A-Rehman-arain",
    },
  ];

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h2 className={styles.heroName}>
          <span className={styles.heroHighlight}>Hello</span> I am <br />
          Abdul <span className={styles.heroHighlight}>Rafay</span>
        </h2>
        <p className={styles.heroDescription}>
        A passionate web developer focused on creating interactive and visually appealing web experiences. With a solid foundation in HTML, CSS, JavaScript, and TypeScript, and hands-on experience with frameworks like Next.js and React, I’m dedicated to bringing ideas to life on the web. My approach blends modern design, responsive layouts, and optimized performance to create seamless, user-friendly interfaces.
        Let’s build something remarkable together!
        </p>
        <div className={styles.ctaContainer}>
          <div className={styles.buttonContainer}>
            <Link href="/contact">
              <button className={styles.hireButton}>Hire Me</button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.photoContainer}>
        <Photo />
      </div>
    </div>
  );
};

export default HeroSection;