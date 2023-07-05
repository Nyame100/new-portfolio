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
      name: "Youtube",
      role: "Content Creator",
      url: "https://www.youtube.com/kishansheth21",
      start: "April 2021",
      end: "Present",
      shortDescription: [
        "Upon graduating in 2021, I began creating content on YouTube, with the aim of enhancing my skills and working with the latest technologies, specifically React and Node.",
        "Over time, I have developed and shared over 50 projects using React on my channel.",
        "As a result, my channel has gained a substantial following, with over 11,000 subscribers to date. I have also had the pleasure of collaborating with various brands throughout my journey.",
      ],
    },
    {
      name: "ACES",
      role: "President",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2019",
      end: "November 2020",
      shortDescription: [
        "As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.",
        "Additionally, I secured sponsorships from reputable brands to support our events.",
        "Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.",
      ],
    },
    {
      name: "ISTE",
      role: "Web Developer",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2019",
      end: "November 2020",
      shortDescription: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify",
        "Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis",
      ],
    },
    {
      name: "Shashaan",
      role: "Founder",
      url: "https://www.linkedin.com/company/association-of-computer-engineering-students/",
      start: "November 2018",
      end: "November 2021",
      shortDescription: [
        "While still a student, I founded a web hosting company that offered affordable hosting services.",
        "With over 300 customers, the business thrived until I graduated and sold it to another company.",
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
                <Link href={experiences[selected].url} className="link">
                  {experiences[selected].name}
                </Link>
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
