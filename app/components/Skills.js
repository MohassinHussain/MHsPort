import React from "react";
import Image from "next/image";
import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaServer,
  FaEthereum,
  FaGit,
  FaDocker,
  FaFire,
  FaCode,
  FaMobileAlt,
  FaWind,
  FaCube,
  FaNetworkWired,
  FaRobot,
  FaPaperPlane,
  FaEnvira,
  FaCogs,
  FaArrowAltCircleRight,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileWord
} from "react-icons/fa";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// import img2 from '../../public/img2.png'
import My_Skills from '../../public/My_Skills.png'

function Card3() {
  const skills = {
    languages: [
      { icon: <FaJava />, name: 'Java' },
      { icon: <FaPython />, name: 'Python' },
      { icon: <FaCode />, name: 'C++' },
      { icon: <FaJs />, name: 'JavaScript' },
      { icon: <FaCode />, name: 'TypeScript' },
      { icon: <FaHtml5 />, name: 'HTML' },
      { icon: <FaCss3 />, name: 'CSS' },
      { icon: <FaDatabase />, name: 'SQL' },
    ],
    frameworks: [
      { icon: <FaReact />, name: 'React.js' },
      { icon: <FaArrowAltCircleRight />, name: 'Next.js' },
      { icon: <FaMobileAlt />, name: 'React Native' },
      { icon: <FaWind />, name: 'Tailwind CSS' },
      { icon: <FaNodeJs />, name: 'Node.js' },
      { icon: <FaServer />, name: 'Express.js' },
      { icon: <FaPython />, name: 'Django' },
    ],
    blockchain: [
      { icon: <FaCube />, name: 'Solidity' },
      { icon: <FaEthereum />, name: 'Ether.js' },
      { icon: <FaNetworkWired />, name: 'IPFS' },
    ],
    tools: [
      { icon: <FaGit />, name: 'Git' },
      { icon: <FaDocker />, name: 'Docker' },
      { icon: <FaRobot />, name: 'HuggingFace' },
      { icon: <FaFire />, name: 'Firebase' },
      { icon: <FaCode />, name: 'VS Code' },
      { icon: <FaPaperPlane />, name: 'Postman' },
      { icon: <FaEnvira />, name: 'MongoDB' },
      { icon: <FaCogs />, name: 'n8n' },
    ],
    coursework: [
      { name: 'Operating Systems' },
      { name: 'Computer Networks' },
      { name: 'DBMS' },
      { name: 'Software Engineering' },
    ]
  };

  return (
    <Card className="w-full sm:w-[90%] lg:w-[80rem] mx-auto h-auto sm:h-auto bg-[#1a1b26] p-8 mt-10 rounded-lg border-2 border-[#24283b] shadow-none">
      <div className="flex flex-col justify-center m-6">
        {/* Skills Section */}
        <div className="flex flex-col justify-center w-full">
          <CardTitle className="text-4xl sm:text-5xl font-bold mb-10 text-center text-[#c0caf5]">Skills</CardTitle>

          {/* Languages */}
          <CardContent className="pb-12 p-0 w-full">
            <h2 className="text-3xl sm:text-4xl mt-4 mb-6 text-[#c0caf5] text-center sm:text-left">Languages</h2>
            <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
              {skills.languages.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2 text-[#7aa2f7]">
                  <div className="text-4xl sm:text-5xl">{skill.icon}</div>
                  <p className="text-lg text-[#a9b1d6]">{skill.name}</p>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Frameworks & Libraries */}
          <CardContent className="pb-12 p-0 w-full">
            <h2 className="text-3xl sm:text-4xl mt-4 mb-6 text-[#c0caf5] text-center sm:text-left">Frameworks & Libraries</h2>
            <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
              {skills.frameworks.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2 text-[#7aa2f7]">
                  <div className="text-4xl sm:text-5xl">{skill.icon}</div>
                  <p className="text-lg text-[#a9b1d6]">{skill.name}</p>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Blockchain */}
          {/* <CardContent className="pb-12 p-0 w-full">
            <h2 className="text-3xl sm:text-4xl mt-4 mb-6 text-[#c0caf5] text-center sm:text-left">Blockchain Technologies</h2>
            <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
              {skills.blockchain.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2 text-[#7aa2f7]">
                  <div className="text-4xl sm:text-5xl">{skill.icon}</div>
                  <p className="text-lg text-[#a9b1d6]">{skill.name}</p>
                </div>
              ))}
            </div>
          </CardContent> */}

          {/* Tools & Databases */}
          <CardContent className="pb-12 p-0 w-full">
            <h2 className="text-3xl sm:text-4xl mt-4 mb-6 text-[#c0caf5] text-center sm:text-left">Tools & Databases</h2>
            <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
              {skills.tools.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-2 text-[#7aa2f7]">
                  <div className="text-4xl sm:text-5xl">{skill.icon}</div>
                  <p className="text-lg text-[#a9b1d6]">{skill.name}</p>
                </div>
              ))}
            </div>
          </CardContent>

          {/* Coursework / Others */}
          <CardContent className="pb-12 p-0 w-full">
            <h2 className="text-3xl sm:text-4xl mt-4 mb-6 text-[#c0caf5] text-center sm:text-left">Coursework</h2>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {skills.coursework.map((skill, index) => (
                <div key={index} className="bg-[#24283b] px-4 py-2 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transition-all">
                  <p className="text-lg text-[#c0caf5]">{skill.name}</p>
                </div>
              ))}
            </div>
          </CardContent>

        </div>
      </div>
    </Card>
  );
}

export default Card3;
