"use client";
import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
        <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} Future Rafay. All rights reserved.
      </p>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaFacebook />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaInstagram />
          </a>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
