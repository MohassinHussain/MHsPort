"use client";

import { useEffect, useState, useRef } from "react";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Card6 from "./components/Card6";
import Card7 from "./components/Card7";

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
    <div className="relative">
      {/* Content Sections */}
      <div 
        ref={el => sectionRefs.current[0] = el}
        id="section-home" 
        className="s1-intro bg-[#1a1b26] h-auto sm:h-[50rem] md:h-[60rem] lg:h-[60rem] xl:h-[60rem] flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <Card1 />
      </div>

      <div 
        ref={el => sectionRefs.current[1] = el}
        id="section-about" 
        className="s2-about bg-[#24283b] h-auto sm:h-[25rem] md:h-[30rem] lg:h-[30rem] xl:h-[30rem] flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <Card2 />
      </div>

      <div 
        ref={el => sectionRefs.current[2] = el}
        id="section-skills" 
        className="s3-skills bg-[#1a1b26] h-auto sm:h-[40rem] md:h-[50rem] lg:h-[50rem] xl:h-[50rem] flex justify-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <Card3 />
      </div>

      <div 
        ref={el => sectionRefs.current[3] = el}
        id="section-projects" 
        className="s4-projects bg-[#1a1b26] h-auto sm:h-[180rem] md:h-[220rem] lg:h-[220rem] xl:h-[220rem] flex justify-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <Card4 />
      </div>

      {/* <div 
        ref={el => sectionRefs.current[4] = el}
        id="section-samples" 
        className="s5-passion bg-[#24283b] h-auto sm:h-[40rem] md:h-[50rem] lg:h-[50rem] xl:h-[50rem] flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <Card5 />
      </div> */}

      <div 
        ref={el => sectionRefs.current[5] = el}
        id="section-achievements" 
        className="s6-resume bg-[#1a1b26] h-auto sm:h-[15rem] md:h-[20rem] lg:h-[20rem] xl:h-[20rem] flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <Card6 />
      </div>

      <div 
        ref={el => sectionRefs.current[6] = el}
        id="section-connect" 
        className="s7-connect bg-[#1a1b26] h-auto sm:h-[35rem] md:h-[45rem] lg:h-[45rem] xl:h-[45rem] flex justify-center items-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        <Card7 />
      </div>
    </div>
  );
}
