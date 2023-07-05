import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect } from "react";
import { useState } from "react";

const Experience = () => {
  const [selected, setSelected] = useState(0);
  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);
  const experiences = [
    {
      name: "Freelance",
      role: "Full Stack Developer",
      url: "https://www.rapidops.com",
      start: "January 2021",
      end: "Present",
      shortDescription: [
        "Created and maintained RESTful APIs, enabling seamless communication between web applications and third-party services, resulting in a 20% increase in efficiency.",
        "Applied front-end technologies such as React and AJAX to integrate with back-end services, resulting in real-time data-driven updates to the website and an improved user experience, leading to a 20% spike in traffic. ",
        "Developed and executed front-end development strategies, resulting in a 15% increase in website performance by implementing optimization techniques such as code minification and troubleshooting issues using browser developer tools. ",
        "Leveraged advanced JavaScript libraries and APIs to build 60+ interactive web applications.",
      ],
    },
    {
      name: "JD Techcom",
      role: "Web Developer",
      url: "https://www.youtube.com/kishansheth21",
      start: "April 2021",
      end: "September 2022",
      shortDescription: [
        "Utilized SEO (Search Engine Optimization) best practices and techniques to optimize web applications for maximum speed and scalability and improve website performance by 15%. ",
        "Collaborated with back-end developers and designers to integrate web services and/or third-party APIs to design and develop mobile-friendly, responsive websites. ",
        "Automated front-end unit and functional tests to ensure seamless updates to future versions of software releases resulting in 15% increase in team productivity. ",
      ],
    },
    {
      name: "Wondersend Ltd",
      role: "Frontend Developer (Intern)",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2019",
      end: "February 2020",
      shortDescription: [
        "Debugged and troubleshooted web applications, identifying and addressing performance bottlenecks, resulting in a 20% reduction in bug-related delays.",
        "Employed version control systems such as Git to collaborate on projects and manage code.",
        "Provided support to senior front-end developers after becoming proficient in ReactJS, resulting a in stronger, more efficient tech team.",
        "Implemented cross-browser compatibility at the code level, resulting in a 50% increase in user satisfaction.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
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
        <h2>Experiences</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {experiences.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <div className="link">{experiences[selected].name}</div>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map(
                (description, index) => {
                  return (
                    <li key={index} className="exp-details-list-item">
                      {description}
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
