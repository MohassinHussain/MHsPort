"use client";

import { useEffect, useState } from "react";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Card6 from "./components/Card6";
import Card7 from "./components/Card7";

export default function Home() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollHeight = documentHeight - windowHeight;

      const scrollProgress = (scrollTop / scrollHeight) * 95;
      setScrollPercentage(scrollProgress); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 

  return (
    <div className="">
      <div className="s1-intro bg-[#0d0c12] h-auto sm:h-[50rem] md:h-[60rem] lg:h-[60rem] xl:h-[60rem] flex justify-center items-center">
        <div className="xl:grid h-[4rem] w-[48rem] bg-gray-700 opacity-90 shadow-lg shadow-gray-300 fixed top-0 right-0 m-[2rem] rounded-lg hidden items-center justify-center z-1000">
          <div className="w-[46rem] h-2 bg-black rounded">
            <div
              className="bg-slate-200 h-2 rounded"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
          <div className="flex gap-6">
            <h2>Home</h2>
            <h2>About</h2>
            <h2>Skills</h2>
            <h2>Projects</h2>
            <h2>Samples</h2>
            <h2>Achievements</h2>
            <h2>Community</h2>
            <h2>Resume</h2>
            <h2>Connect</h2>
          </div>
        </div>

        <Card1 />
      </div>

      <div className="s2-about bg-[#1f1f21] h-auto sm:h-[25rem] md:h-[30rem] lg:h-[30rem] xl:h-[30rem] flex justify-center items-center">
        <Card2 />
      </div>


      <div className="s3-skills bg-[#0d0c12] h-auto sm:h-[40rem] md:h-[50rem] lg:h-[50rem] xl:h-[50rem] flex justify-center">
        <Card3 />
      </div>

      <div className="s4-projects bg-[#0d0c12] h-auto sm:h-[150rem] md:h-[200rem] lg:h-[200rem] xl:h-[200rem] flex justify-center">
        <Card4 />
      </div>


      <div className="s5-passion bg-[#1f1f21] h-auto sm:h-[40rem] md:h-[50rem] lg:h-[50rem] xl:h-[50rem] flex justify-center items-center">
        <Card5 />
      </div>

      <div className="s6-resume bg-[#0d0c12] h-auto sm:h-[15rem] md:h-[20rem] lg:h-[20rem] xl:h-[20rem] flex justify-center items-center">
        <Card6 />
      </div>

      <div className="s7-connect bg-[#0d0c12] h-auto sm:h-[35rem] md:h-[45rem] lg:h-[45rem] xl:h-[45rem] flex justify-center items-center">
        <Card7 />
      </div>
    </div>
  );
}
