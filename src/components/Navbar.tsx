"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const pathname = usePathname();
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerMainDiv}>
        <Link href="/">
          <h1 className={styles.headerTitle}>
            Future <span className={styles.headerTitleSpan}>Rafay</span>
          </h1>
        </Link>

        <nav className={styles.navMain}>
          <ul className={styles.navUl}>
            {links.map((link) => (
              <li key={link.name} className={styles.navLi}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${link.href === pathname ? styles.pathnameHref : ""}`}
                >
                  <span className={styles.linkName}>{link.name}</span>
                  <span
                    className={`${link.href !== pathname ? styles.linkUnderline : ""}`}
                  ></span>
                </Link>
              </li>
            ))}
          </ul> 
        </nav>

        <button className={styles.hamburgerMain} onClick={toggleSidebar}>
          <RxHamburgerMenu size={24} className={styles.hamburgerIcon} />
        </button>
      </div>

      {isMobile && (
        <div
          className={`${styles.mobileMainDiv} ${isSidebarOpen ? styles.sideBarOpens : styles.sideBarClose}`}
        >
          <div className={styles.toggleSidebar} onClick={toggleSidebar}></div>
          <nav
            className={`${styles.mobileNav} ${isSidebarOpen ? styles.mobileNavOpens : styles.mobileNavClose}`}
          >
            <div className={styles.crossIconMainDiv}>
              <div className={styles.crossIconSecondDiv}>
                <button onClick={toggleSidebar} aria-label="Close menu">
                  <RxCross1 size={24} className={styles.crossIcon} />
                </button>
              </div>
            </div>
            <ul className={styles.mobileNavUl}>
              {links.map((link) => (
                <li key={link.name} className={styles.mobileNavLi}>
                  <Link
                    href={link.href}
                    className={styles.mobileNavLinks}
                    onClick={toggleSidebar}
                  >
                    <span className={styles.mobileNavItems}>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
