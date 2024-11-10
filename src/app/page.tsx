"use client";
import React from "react";
import HeroSection from "../components/HeroSection";
import styles from "./page.module.css";

const HomePage = () => {
 
  return (
    <section className={styles.homeSection}>
    <div className={styles.homeContainer}>
        <div>
          <div className={styles.heroSectionContainer}>
            <HeroSection />
          </div>
        </div>
    </div>
  </section>
  );
};

export default HomePage;