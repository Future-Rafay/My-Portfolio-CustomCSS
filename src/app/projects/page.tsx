import styles from "./page.module.css";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import img1 from "../../../public/images/bubble-game 2.png"
import img2 from "../../../public/images/e-commerce-web1.png"
import img3 from "../../../public/images/todo-app.png"
import img4 from "../../../public/images/weather-app.png"

const Project = () => {
  return (
    <div id='project' className={styles["project-background"]}>
      <hr className={styles["project-divider"]} />
      <section className={styles["project-section"]}>
        <div className={styles["project-container"]}>
          <div className={styles["project-title-container"]}>
            <h1 className={styles["project-title"]}>My Projects</h1>
            <p className={styles["project-description"]}>
              Explore my recent projects, showcasing my skills in web development, design, and animation. Each project demonstrates a unique set of features and technologies.
            </p>
          </div>
          <div className={styles["project-grid"]}>
            <div className={styles["project-card"]}>
              <div className={styles["project-card-inner"]}>
                <Image alt="gallery" className={styles["project-image"]} src={img1} />/
                <div className={styles["project-content"]}>
                  <h2 className={styles["project-subtitle"]}>An Interactive Web-Based Game</h2>
                  <h1 className={styles["project-heading"]}>Bubble Game</h1>
                  <p className={styles["project-text"]}>
                  Bubble Game is a fun and engaging web-based game designed to challenge your reflexes and sharpness. The objective is simple: bubbles with different numbers appear on the screen, and the player needs to click on the bubbles that match a target number. As you progress, the speed and difficulty increase, making it a thrilling challenge.
                  </p>
                  <Link href={'https://bubble-game-abdul-rafays-projects-87eac4f7.vercel.app/'} target='_blank'>
                    <p className={styles["project-link"]}>View Project</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles["project-card"]}>
              <div className={styles["project-card-inner"]}>
                <Image alt="gallery" className={styles["project-image"]} src={img2} />
                <div className={styles["project-content"]}>
                  <h2 className={styles["project-subtitle"]}>Website</h2>
                  <h1 className={styles["project-heading"]}>Ecommerce Website</h1>
                  <p className={styles["project-text"]}>
                    A ecommerce website showcasing products with features like category product details, and a responsive design for easy browsing.
                  </p>
                  <Link href={'https://e-commerce-web-abdul-rafays-projects-87eac4f7.vercel.app/'} target='_blank'>
                    <p className={styles["project-link"]}>View Project</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles["project-card"]}>
              <div className={styles["project-card-inner"]}>
                <Image alt="gallery" className={styles["project-image"]} src={img3} />
                <div className={styles["project-content"]}>
                  <h2 className={styles["project-subtitle"]}>Stay Organized and Productive</h2>
                  <h1 className={styles["project-heading"]}>Todo list App</h1>
                  <p className={styles["project-text"]}>
                  The To-Do List App helps you manage tasks efficiently by allowing you to create, organize, and prioritize your to-do items. Whether it&#39;s work, study, or personal tasks, this app lets you keep track of everything in one place. With simple features like task creation, editing, and deletion, you can stay on top of your daily responsibilities and boost your productivity.
                  </p>
                  <Link href={'https://todo-app-abdul-rafays-projects-87eac4f7.vercel.app/'} target='_blank'>
                    <p className={styles["project-link"]}>View Project</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles["project-card"]}>
              <div className={styles["project-card-inner"]}>
                <Image alt="gallery" className={styles["project-image"]} src={img4} />
                <div className={styles["project-content"]}>
                  <h2 className={styles["project-subtitle"]}>Your Personal Weather Forecast at Your Fingertips</h2>
                  <h1 className={styles["project-heading"]}>Weather App</h1>
                  <p className={styles["project-text"]}>
                  Stay prepared for any weather condition with the Weather App. Get real-time weather updates, including temperature, humidity, wind speed, and forecasts for the next few days. Simply enter your location, and receive accurate weather information to help you plan your day. With its easy-to-use interface and reliable data, this app ensures you never get caught off guard by the weather again.
                  </p>
                  <Link href={'https://weather-app-abdul-rafays-projects-87eac4f7.vercel.app/'} target='_blank'>
                    <p className={styles["project-link"]}>View Project</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Project