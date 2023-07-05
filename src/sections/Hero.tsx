import { Button2 } from "@/components/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.6,
        }}
      >
        Hi, my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.75,
        }}
      >
        Richmond Nyame.
      </motion.h2>
      <motion.h3
        className="hero-title-large hero-title-sub"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.05,
        }}
      >
        I build web apps.
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.35,
        }}
      >
        I&apos;m a fullstack developer with a focus on building MERN stack
        applications. Experienced in developing and optimizing web
        applications.&nbsp;
        {/* <Link href="https://rapidops.com" target="_blank" className="link">
          rapido
        </Link> */}
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.65,
        }}
      >
        <Button2 text="Get in touch" link="mailto:nyamerichmond100@gmail.com" />
      </motion.div>
    </div>
  );
};

export default Hero;
