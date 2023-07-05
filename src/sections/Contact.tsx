import { Button2 } from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next ?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        My inbox is always opened as I want new opportunities. Whether you have
        an opportunity for me or just want to say hi, I’ll get back to you!
      </p>
      <div className="contact-cta">
        <Button2 link="mailto:nyamerichmond100@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
