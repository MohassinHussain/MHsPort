import React from "react";
import Image from "next/image";
import { RiReactjsLine } from "react-icons/ri";
import { RiUserCommunityLine } from "react-icons/ri";
import { GiPublicSpeaker } from "react-icons/gi";
import { FaJava, FaFilePowerpoint, FaFileWord } from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVscodium,
  SiDocker,
  SiPostman,
  SiTailwindcss,
  SiC,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiExcalidraw,
} from "react-icons/si";
import { RiFileExcel2Line } from "react-icons/ri";

// import img2 from '../../public/img2.png'
import My_Skills from '../../public/My_Skills.png'

function Card3() {
  const skills = {
    programming: [
      { icon: <SiCplusplus />, name: 'C++' },
      { icon: <SiPython />, name: 'Python' },
      { icon: <FaJava />, name: 'Java' }
    ],
    frontend: [
      { icon: <RiReactjsLine />, name: 'React' },
      { icon: <SiNextdotjs />, name: 'Next.js' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS' }
    ],
    backend: [
      { icon: <SiNodedotjs />, name: 'Node.js' },
      { icon: <SiExpress />, name: 'Express' },
      { icon: <SiMongodb />, name: 'MongoDB' },
      { icon: <SiMysql />, name: 'MySQL' }
    ],
    tools: [
      { icon: <SiGit />, name: 'Git' },
      { icon: <SiGithub />, name: 'GitHub' },
      { icon: <SiVscodium />, name: 'VSCodium' },
      { icon: <SiDocker />, name: 'Docker' },
      { icon: <SiPostman />, name: 'Postman' }
    ],
    nontech: [
      { icon: <RiFileExcel2Line />, name: 'Excel' },
      { icon: <FaFilePowerpoint />, name: 'PPT' },
      { icon: <FaFileWord />, name: 'Word' },
    ]
  };

  return (
    <div className="w-full sm:w-[90%] lg:w-[80rem] mx-auto h-auto sm:h-auto bg-[#1a1b26] p-8 rounded-lg border border-[#24283b]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 m-6">
        {/* Image */}
        <div className="flex justify-center">
          <Image alt="Alt" src={My_Skills} width={500} height={600} className="rounded-md hidden md:flex border-2 border-[#24283b]" />
        </div>

        {/* Skills Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center text-[#c0caf5]">Skills</h1>

          {/* Technical Skills */}
          <div className="pb-12">
            <h2 className="text-3xl sm:text-4xl mt-4 mb-6 text-[#c0caf5]">Technical</h2>
            <div className="flex flex-wrap gap-6 justify-center sm:justify-start">
              <div className="flex flex-wrap gap-6">
                {skills.programming.map((skill, index) => (
                  <div key={index} className="text-3xl sm:text-4xl flex flex-col items-center gap-2 text-[#7aa2f7]">
                    <div>{skill.icon}</div>
                    {/* <p>{skill.name}</p> */}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                {skills.frontend.map((skill, index) => (
                  <div key={index} className="text-3xl sm:text-4xl flex flex-col items-center gap-2 text-[#7aa2f7]">
                    <div>{skill.icon}</div>
                    {/* <p>{skill.name}</p> */}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                {skills.backend.map((skill, index) => (
                  <div key={index} className="text-3xl sm:text-4xl flex flex-col items-center gap-2 text-[#7aa2f7]">
                    <div>{skill.icon}</div>
                    {/* <p>{skill.name}</p> */}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                {skills.tools.map((skill, index) => (
                  <div key={index} className="text-3xl sm:text-4xl flex flex-col items-center gap-2 text-[#7aa2f7]">
                    <div>{skill.icon}</div>
                    {/* <p>{skill.name}</p> */}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Non-Technical Skills */}
          <div className="pb-12">
            <h2 className="text-3xl sm:text-4xl mb-6 text-[#c0caf5]">Non-Technical Skills</h2>
            <div className="text-3xl sm:text-4xl flex gap-6 justify-center sm:justify-start">
              {skills.nontech.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2 text-[#7aa2f7]">
                  <div>{skill.icon}</div>
                  {/* <p>{skill.name}</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card3;
