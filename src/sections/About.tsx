import Image from "next/image";
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
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiLogoDocker } from "react-icons/bi";
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
            Creative fullstack developer with strong command over both front-end
            and back-end technologies. I&apos;m proficient at building
            databases, servers and RESTful APIs. I&apos;m also passionate about
            creating intuitive user interfaces that provide an exceptional user
            experience.
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
                <TbBrandNextjs />
              </span>
              NextJs
            </li>
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <SiTailwindcss />
              </span>
              Tailwind CSS
            </li>
            <li className="about-grid-info-list-item">
              <span className="about-grid-info-list-item-badge">
                <BiLogoDocker />
              </span>
              Docker
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
