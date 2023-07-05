import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";

const SocialIcons = () => {
  const socialLinks = [
    {
      name: "Github",
      icon: <VscGithub />,
      link: "https://www.github.com/Nyame100",
    },
    {
      name: "LinkedIn",
      icon: <IoLogoLinkedin />,
      link: "https://www.linkedin.com/in/nyame-richmond",
    },
  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
export default SocialIcons;
