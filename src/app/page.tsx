"use client";
import Navbar from "../sections/Navbar";
import React, { useState } from "react";
import SocialIcons from "@/components/SocialIcons";
import Email from "@/components/Email";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Head from "next/head";
import Loader from "@/components/Loader";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };
  return (
    <div className="app">
      <Head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      {showContent ? (
        <>
          <Navbar />
          <SocialIcons />
          <Email />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </>
      ) : (
        <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
      )}
    </div>
  );
};

export default Index;
