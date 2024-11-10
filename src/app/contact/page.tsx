"use client";

import React, { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Form from "../../components/Form";
import styles from './page.module.css';
const Contact = () => {
  return (
    <div className={styles["contact-container"]}> {/* Use styles["class-name"] */}

        <div className={styles["contact-wrapper"]}> {/* Use styles["class-name"] */}
          <div className={styles["form-section"]}>
            <Form />
          </div>
          <div className={styles["contact-info"]}>
            <div className={styles["contact-item"]}>
              <FaPhoneAlt size={20} className={styles["contact-icon"]} />
              <div className={styles["contact-details"]}>
                <p className={styles["contact-label"]}>Phone:</p>
                <Link href="tel:+923122109958">
                  <p className={styles["contact-text"]}>+92 3122109958</p>
                </Link>
              </div>
            </div>
            <div className={styles["contact-item"]}>
              <MdEmail size={20} className={styles["contact-icon"]} />
              <div className={styles["contact-details"]}>
                <p className={styles["contact-label"]}>Email:</p>
                <Link href="mailto:rafaynadeem77@gmail.com">
                  <p className={styles["contact-text"]}>rafaynadeem77@gmail.com</p>
                </Link>
              </div>
            </div>
            <div className={styles["contact-item"]}>
              <FaLocationDot size={20} className={styles["contact-icon"]} />
              <div className={styles["contact-details"]}>
                <p className={styles["contact-label"]}>Address:</p>
                <p className={styles["hyderabadtext"]}>FB area Karachi</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Contact;
