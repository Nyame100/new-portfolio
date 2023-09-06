import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projectsData = [
    {
      image: "/photo.jpeg",
      projectName: "SneakerHub",
      projectDescription:
        "This is an ecommerce web application where users can shop their favourite sneakers from different manufucturers.",
      projectTech: [
        "React",
        "Headless CMS",
        "Styled Components",
        "Netlify",
        "JavaScript",
      ],
      projectExternalLinks: {
        github: "https://github.com/Nyame100/e-commerce-project",
        externalLink: "https://snkrhub.netlify.app/",
      },
    },
    {
      image: "/jobtracker.jpeg",
      projectName: "Job Tracking App",
      projectDescription:
        "The Jobtracker helps a user to organize and track their progress as they make job applications. Keeping track of all job applications can be a hectic task, and this app will ease the burden and make it easier to hunt for jobs.",
      projectTech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/Nyame100/JobTracker-MERN",
        externalLink: "https://mern-jobtracker.onrender.com",
      },
    },
    {
      image: "/airbnb.jpeg",
      projectName: "AirBnb clone",
      projectDescription:
        "AirBnb clone, mimics the one-stop travel site for a dream vacation. The app allows home owners to list their properties. Users can also book any of the listed properties for a vacation. ",
      projectTech: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JavaScript",
        "Tailwind CSS",
      ],
      projectExternalLinks: {
        github: "https://github.com/Nyame100/app",
        externalLink: "https://vacay-app.onrender.com",
      },
    },
    {
      image: "/cocktails.jpeg",
      projectName: "Cocktails App",
      projectDescription:
        "An app which allows users to search and get more information about their favourite cocktails. Details such as ingredients used and the categorisation of each cocktail are provided.",
      projectTech: [
        "React",
        "JavaScript",
        "Node.js",
        "RESTful API",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/Nyame100/cocktails-project",
        externalLink: "https://cocktailsproject-1.netlify.app/",
      },
    },
  ];
  return (
    <motion.div
      className="projects"
      id="work"
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
        <h2>Personal Projects</h2>
      </div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <div className="project" key={projectName}>
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            );
          }
        )}
      </div>
    </motion.div>
  );
};

export default Projects;
