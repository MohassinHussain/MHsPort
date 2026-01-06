
"use client";

import { useEffect, useState, useRef } from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Community from "./components/Community";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import Navbar from "./components/Navbar";
import GoToTop from "./components/GoToTop";

export default function Home() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="relative flex flex-col gap-20 py-20 bg-[#1a1b26]">
      <Navbar />
      <GoToTop />

      {/* Content Sections */}
      <div
        ref={el => sectionRefs.current[0] = el}
        id="section-home"
        className="s1-intro h-auto sm:h-[50rem] md:h-[60rem] lg:h-[60rem] xl:h-[60rem] flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <Intro />
      </div>

      <div
        ref={el => sectionRefs.current[1] = el}
        id="section-about"
        className="s2-about sm:h-[25rem] md:h-[30rem] lg:h-[30rem] xl:h-[30rem] flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <About />
      </div>

      <div
        ref={el => sectionRefs.current[2] = el}
        id="section-skills"
        className="s3-skills h-auto  flex justify-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <Skills />
      </div>

      <div
        ref={el => sectionRefs.current[3] = el}
        id="section-projects"
        className="s4-projects h-auto flex justify-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <Experience />
      </div>

      {/* <div 
        ref={el => sectionRefs.current[4] = el}
        id="section-samples" 
        className="s5-passion bg-[#24283b] h-auto sm:h-[40rem] md:h-[50rem] lg:h-[50rem] xl:h-[50rem] flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <Community />
      </div> */}

      <div
        ref={el => sectionRefs.current[5] = el}
        id="section-achievements"
        className="s6-achievements h-auto flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <Achievements />
      </div>

      <div
        ref={el => sectionRefs.current[6] = el}
        id="section-resume"
        className="s6-resume h-auto sm:h-[20rem] md:h-[25rem] lg:h-[25rem] xl:h-[25rem] flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <Resume />
      </div>

      <div
        ref={el => sectionRefs.current[7] = el}
        id="section-connect"
        className="s7-connect h-auto sm:h-[35rem] md:h-[45rem] lg:h-[45rem] xl:h-[45rem] flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <Contact />
      </div>
    </div>
  );
}
