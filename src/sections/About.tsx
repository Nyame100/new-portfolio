import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiTypescript,
  SiJest,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Creative fullstack developer with a focus on building MERN stack
            applications. Experienced in developing and optimizing web
            applications and user interfaces. Proficient at building databases,
            servers and RESTful APIs coupled with a focus on responsive web
            design and building applications with cross-platform compatibility.
            <Link href="https://rapidops.com" className="link" target="_blank">
              Rapidops
            </Link>
          </p>
          <p className="about-grid-info-text">
            I am also working on a new project called&nbsp;
            <Link
              className="link"
              target="_blank"
              href="https://frontendvita.com"
            >
              FrontendVita
            </Link>
          </p>
          <p className="about-grid-info-text">
            Here are some technologies I have been working with
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <AiFillHtml5 />
              </span>
              HTML5
            </li>
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <DiCss3 />
              </span>
              CSS
            </li>
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <IoLogoJavascript />
              </span>
              JavaScript
            </li>
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <SiTypescript />
              </span>
              TypeScript
            </li>
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <FaReact />
              </span>
              React
            </li>
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <SiRedux />
              </span>
              Redux Toolkit
            </li>
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <SiNodedotjs />
              </span>
              NodeJs
            </li>
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <SiExpress />
              </span>
              ExpressJs
            </li>
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <SiMongodb />
              </span>
              MongoDB
            </li>
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <SiPostman />
              </span>
              Postman
            </li>
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <FaBootstrap />
              </span>
              Bootstrap
            </li>
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <SiJest />
              </span>
              Jest
            </li>
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <BsShieldFillCheck />
              </span>
              CMS
            </li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/nyame.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
