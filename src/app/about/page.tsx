"use client";
import React from "react";
import Image from "next/image";
import ProfileImage from "../../../public/images/profilepic.png";
import styles from "./page.module.css"; 

const About = () => {

  return (
        <div className={styles.aboutContainer}>
          <h2 className={styles.quote}>
          The Story So Far
          </h2>
          <div className={styles.contentWrapper}>
            <div className={styles.biographySection}>
              <h2 className={styles.biographyTitle}>Biography</h2>
              <p className={styles.biographyText}>
              I’m Abdul Rafay, a dedicated web developer with a deep-rooted passion for creating innovative digital experiences. My journey into tech began with a curiosity about how websites and applications function behind the scenes. Over the years, I’ve honed my skills in HTML, CSS, JavaScript, and TypeScript, building a solid foundation for front-end development. Currently, I’m expanding my expertise in frameworks like React and Next.js, always seeking to stay updated with the latest technologies and trends.
              </p>
              <p className={styles.biographyText}>
              My approach to development combines both creativity and technical precision. I believe that a well-crafted website is more than just visuals; it’s about crafting a smooth, intuitive experience for users. Through my projects, I strive to merge aesthetics with functionality, ensuring that each product I build is visually appealing, responsive, and efficient. With experience in Tailwind CSS and responsive design, I focus on delivering versatile solutions that look great on any device.
              </p>
              <p className={styles.biographyText}>
              Beyond technical skills, I’m a strong advocate for user-centered design and problem-solving. Whether working on a simple interactive component or a full-scale application, I aim to keep user needs at the forefront. I’m committed to continuous learning and adapting to the evolving landscape of web development, which drives my ambition to take on more complex projects and make a meaningful impact in the digital world.
              </p>
            </div>
            <div className={styles.imageSection}>
              <div className={styles.imageContainer}>
                <Image
                  src={ProfileImage}
                  alt="Profile Image"
                  className={styles.profileImage}
                />
              </div>
            </div>
          </div>
        </div>
  );
};

export default About;
