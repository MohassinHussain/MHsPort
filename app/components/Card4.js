import React from "react";
import Image from "next/image";
import { MdOutlinePersonalVideo } from "react-icons/md";
import { IoAccessibility } from "react-icons/io5";

import proj from '../../public/proj.webp';
import fylz_ss from '../../public/fylz_ss.png';

function Card4() {
  const projects = [
    {
      number: "1",
      title: "FYLz",
      description: "Developed a secure file-sharing platform using React.js with Multer for multipart data handling and MongoDB for storage, ensuring temporary file storage and automatic deletion.",
      visit: "https://fylz.vercel.app",
    },
    {
      number: "2",
      title: "bFinder",
      description:
        "Created a React Native expo app for location discovery, integrating Firebase for real-time database and authentication, using Clerk Auth for secure user management.",
      visit: "#",
    },
    {
      number: "3",
      title: "Fake Logo Detection",
      description: "Built a CNN-based algorithm to classify logos as authentic or fake, optimized for real-time classification, and created an intuitive Tkinter GUI for user interaction.",
      visit: "https://github.com/MohassinHussain/Fake_Logo_Detection_Team-13",
    },
    {
      number: "4",
      title: "inApp-Share",
      description: "Built a prototype(YouTube) for in-app video sharing with a responsive UI using Tailwind CSS, integrated Firebase Authentication (Gmail login) for secure access, and used MongoDB to store and retrieve video metadata.",
      visit: "https://github.com/MohassinHussain/inApp-share",
    },
    {
      number: "5",
      title: "Globehoppin",
      description: "Contributed to UI improvements and overall website optimization, enhancing responsiveness with Tailwind CSS for a better mobile experience.",
      visit: "https://github.com/MohassinHussain/GlobeHoppin",
    },
  ];

  return (
    <div className="w-full sm:w-[90%] lg:w-[80rem] mx-auto h-auto sm:h-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 m-6">
        <div className="flex justify-center">
          <Image src={proj} width={500} className="rounded-md hidden md:flex" />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-start text-center sm:text-5xl font-bold mb-5">Projects</h1>
          {projects.map((project, index) => (
            <div
              className="pb-10 flex flex-col justify-center items-center"
              key={index}
            >
              <h2 className="text-5xl font-bold">{project.number}</h2>
              <h1 className="font-bold text-4xl pt-4">{project.title}</h1>
              <p className="text-lg sm:text-xl text-center">{project.description}</p>
              <a
                href={project.visit}
                className="underline text-blue-400 text-xl pt-4"
              >
                View
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="m-6 md:m-12">
        <h1 className="text-4xl sm:text-5xl mb-10 font-bold">Image samples of work</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <div className="flex justify-center">
            <Image src={fylz_ss} width={370} height={230} className="rounded-lg" />
          </div>
          <div className="flex justify-center">
            {/* <Image src="" width={370} height={230} className="rounded-lg" /> */}
          </div>
          <div className="flex justify-center">
            {/* <Image src="" width={370} height={230} className="rounded-lg" /> */}
          </div>
          <div className="flex justify-center">
            {/* <Image src="" width={370} height={230} className="rounded-lg" /> */}
          </div>
          <div className="flex justify-center">
            {/* <Image src="" width={370} height={230} className="rounded-lg" /> */}
          </div>
          <div className="flex justify-center">
            {/* <Image src="" width={370} height={230} className="rounded-lg" /> */}
          </div>
        </div>

        <div className="mt-60">
          <h1 className="text-4xl sm:text-5xl font-bold text-center">
            Achievements
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 justify-around gap-6 mt-6">
            <div className="flex flex-col items-center">
              <MdOutlinePersonalVideo className="text-6xl mb-4" />
              <p className="text-lg sm:text-xl text-center">
                Discover the latest true crime podcasts, featuring fresh
                perspectives and compelling investigations.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <IoAccessibility className="text-6xl mb-4" />
              <p className="text-lg sm:text-xl text-center">
                Stay updated with the newest releases, exploring unsolved
                mysteries, chilling events, and captivating narratives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
