import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const Email = () => {
  return (
    <motion.div
      className="email"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
        delay: 1.95,
      }}
    >
      <Link href="mailto:nyamerichmond100@gmail.com" className="email-link">
        nyamerichmond100@gmail.com
      </Link>
    </motion.div>
  );
};

export default Email;
