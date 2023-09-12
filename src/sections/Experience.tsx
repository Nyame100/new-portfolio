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
      name: "JD Techcom",
      role: "Web Developer (Intern)",
      url: "https://www.youtube.com/kishansheth21",
      start: "October 2021",
      end: "April 2022",
      shortDescription: [
        "Debugged and troubleshooted web applications, identifying and addressing performance bottlenecks, resulting in a 10% reduction in bug-related delays.",
        "Created and maintained RESTful APIs, enabling seamless communication between web applications and third-party services.",
        "Applied front-end technologies such as React and AJAX to integrate with back-end services, resulting in real-time data-driven updates to the website and an improved user experience, leading to a 10% spike in traffic.",
        "Employed version control systems such as Git to collaborate on projects and manage code.",
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
        <h2>Experience</h2>
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
