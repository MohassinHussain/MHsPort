import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MdOutlinePersonalVideo, MdOutlineEmojiEvents } from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import { IoAccessibility, IoClose } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaEnvelope, FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaDatabase, FaAndroid, FaAppStore } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiClerk, SiTensorflow, SiStreamlit, SiScikitlearn, SiFlutter, SiNextdotjs } from "react-icons/si";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import fylz_ss from '../../public/fylz_ss.png';
import ias4 from '../../public/ias_4.png';
import ias5 from '../../public/ias_5.png';
import bFinder_home from '../../public/bFinder_home.jpg';
import bFinder_explore from '../../public/bFinder_explore.jpg';
import ressa_home from '../../public/ressa_home.png';

function Card4() {
  const projectRefs = useRef([]);
  const imageRefs = useRef([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showSamples, setShowSamples] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedTechStack, setSelectedTechStack] = useState(null); // State for selected project's tech stack
  const modalRef = useRef(null);

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

    // Observe project cards
    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Observe image cards
    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
      imageRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [showAllProjects]);

  const projects = [
    {
      number: "1",
      title: "FYLz",
      description: "Developed a secure file-sharing platform using React.js with Multer for multipart data handling and MongoDB for storage, ensuring temporary file storage and automatic deletion.",
      visit: "https://fylz.vercel.app",
      techStack: [
        { name: "React.js", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
        { name: "Express", icon: <SiExpress className="text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      ]
    },
    {
      number: "2",
      title: "bFinder",
      description:
        "Created a React Native expo app for location discovery, integrating Firebase for real-time database and authentication, using Clerk Auth for secure user management.",
      visit: "https://drive.google.com/file/d/1JIrL9oQFk02JW2hkQQ8t3c1O50aOuSzH/view?usp=sharing",
      techStack: [
        { name: "React Native", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: "Clerk Auth", icon: <SiClerk className="text-[#6C47FF]" /> },
      ]
    },
    {
      number: "3",
      title: "Fake Logo Detection",
      description: "Built a CNN-based algorithm to classify logos as authentic or fake, optimized for real-time classification, and created an intuitive Tkinter GUI for user interaction.",
      visit: "https://github.com/MohassinHussain/Fake_Logo_Detection_Team-13",
      techStack: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
        { name: "CNN", icon: <Layers className="text-[#FF6F00]" /> },
      ]
    },
    {
      number: "4",
      title: "inApp-Share",
      description: "Built a prototype(YouTube) for in-app video sharing with a responsive UI using Tailwind CSS, integrated Firebase Authentication (Gmail login) for secure access, and used MongoDB to store and retrieve video metadata.",
      visit: "https://drive.google.com/file/d/1JNOaXq6rEnhggqHGHZ8rXgMewm3inXKP/view?usp=sharing",
      techStack: [
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      ]
    },
    {
      number: "5",
      title: "AgroFlo Predictor",
      description: "A streamlit web-app built using Machine Learning techniques to predict the season suitableity for agriculture and to check the occurence of flood using Randomforest Regressor, classifier.",
      visit: "https://minirain2.streamlit.app",
      techStack: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "Streamlit", icon: <SiStreamlit className="text-[#FF4B4B]" /> },
        { name: "Scikit-Learn", icon: <SiScikitlearn className="text-[#F7931E]" /> },
      ]
    },
    {
      number: "6",
      title: "Ressa",
      description: "Ressa is one stop mobile app to store and use the resources whenver needed. Store-use and revise, schedule your required resources, pin them to calendar.",
      visit: "https://github.com/MohassinHussain/ressa",
      apk: "https://drive.google.com/file/d/1BX2dvCaqppxlvNOFms3ctpKR66H_0YaZ/view?usp=sharing",
      docs: "https://docs.google.com/document/d/1eRYMYS-w1wDfgUjq89birFIH1cUpBctI/edit?usp=sharing&ouid=110889650968495214776&rtpof=true&sd=true",
      techStack: [
        { name: "React Native", icon: <FaReact className="text-[#61DAFB]" /> },
        { name: "Mobile", icon: <FaAndroid className="text-[#3DDC84]" /> },
      ]
    },
    {
      number: "7",
      title: "Camper",
      description: "A Tool For Recruiters discussion Private. Where multiple different recruiters can discuss about a particular candidate, message discussions, tagging. Real-time Notifications and Global notifications if specific manager is tagged or if the candidate is related to that recruiter as well. ",
      visit: "https://www.notion.so/Camper-A-Tool-For-Recruiters-Discussion-2475730cdd8780c5a270d0d963bcdc90?source=copy_link",
      // apk: "https://www.notion.so/Camper-A-Tool-For-Recruiters-Discussion-2475730cdd8780c5a270d0d963bcdc90?source=copy_link",
      docs: "https://www.notion.so/Camper-A-Tool-For-Recruiters-Discussion-2475730cdd8780c5a270d0d963bcdc90?source=copy_link",
      techStack: [
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: "PostgreSQL", icon: <FaDatabase className="text-[#336791]" /> },
      ]
    },
    {
      number: "8",
      title: "PrompterPerformer(PP)",
      description: "A Structured Prompt Orchestration for LLMs. A tool to improve and structure, refine and suggest you a prompt for LLMs and chatbots for content generations and enhancement.",
      visit: "#",
      // apk: "https://www.notion.so/Camper-A-Tool-For-Recruiters-Discussion-2475730cdd8780c5a270d0d963bcdc90?source=copy_link",
      // docs: "https://www.notion.so/Camper-A-Tool-For-Recruiters-Discussion-2475730cdd8780c5a270d0d963bcdc90?source=copy_link",
      techStack: [
        { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
        { name: "LLMs", icon: <FaReact className="text-[#61DAFB]" /> }, // Placeholder or use specialized icon
        { name: "JSON", icon: <FaDatabase className="text-gray-400" /> },
      ]
    },

  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleTechStackClick = (stack) => {
    setSelectedTechStack(stack);
    document.body.style.overflow = 'hidden';
  }

  const closeModal = (e) => {
    // Only close if clicking the modal background or close button
    if (e.target === modalRef.current || e.target.closest('button')) {
      setSelectedImage(null);
      setSelectedTechStack(null);
      // Restore body scroll
      document.body.style.overflow = 'auto';
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
        setSelectedTechStack(null);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);
  // 
  return (
    <Card className="w-full sm:w-[90%] lg:w-[80rem] mx-auto bg-[#1a1b26] p-4 sm:p-8 rounded-lg border-2 border-[#24283b] shadow-none">
      <CardHeader>
        <CardTitle className="text-4xl sm:text-5xl font-bold mb-10 text-center text-[#c0caf5]">Experience</CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <div className="grid grid-cols-1 gap-8 mb-16">
          <div className="bg-[#24283b] p-6 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transition-all duration-300">
            <h2 className="text-2xl font-bold text-[#c0caf5] mb-2">Freelancer — Frontend Developer, SEO & Product Manager</h2>
            <p className="text-[#a9b1d6] mb-4">Anonymous Service-Based Organization (Dental Clinic Project) [Jan/2025 – Mar/2025]</p>
            <ul className="list-disc list-inside text-[#a9b1d6] space-y-2">
              <li>Led frontend development, SEO optimization, and product management for a dental clinic website.</li>
              <li>Implemented SEO strategies that increased patient visits by 20%+, boosting clinic revenue.</li>
              <li>Enhanced user experience (UI/UX), resulting in a 35% improvement in website engagement metrics.</li>
            </ul>
          </div>

          <div className="bg-[#24283b] p-6 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transition-all duration-300">
            <h2 className="text-2xl font-bold text-[#c0caf5] mb-2">Girl Script Summer of Code (GSSoC) 2024 extd. | Contributor</h2>
            <p className="text-[#a9b1d6] mb-4">[GlobeHoppin, OnlineBookSales] [Nov/2024 – Dec/2024]</p>
            <ul className="list-disc list-inside text-[#a9b1d6] space-y-2">
              <li>Contributed to 2 open-source projects, resolving 10+ UI/UX issues and optimizing accessibility.</li>
              <li>Fixed critical bugs, improved UI/UX, and successfully raised PRs that were merged.</li>
            </ul>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center text-[#c0caf5]">Projects</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 transition-all duration-500 ease-in-out">
          {(showAllProjects ? projects : projects.slice(0, 6)).map((project, index) => (
            <div
              key={index}
              ref={el => projectRefs.current[index] = el}
              className="bg-[#24283b] p-4 sm:p-6 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transform hover:scale-105 opacity-0 translate-y-10 transition-all duration-700 ease-out flex flex-col justify-between"
            >
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-[#7aa2f7] text-center">{project.number}</h2>
                <h1 className="font-bold text-2xl sm:text-3xl pt-3 sm:pt-4 text-[#c0caf5] text-center">{project.title}</h1>
                <p className="text-base sm:text-lg text-[#a9b1d6] mt-3 sm:mt-4">{project.description}</p>
              </div>
              <div className="mt-4 sm:mt-6 flex flex-col items-center gap-3">
                <div className="flex gap-4">
                  {project.apk && project.docs ? <>
                    <a
                      href={project.apk}
                      className="inline-block underline text-[#7aa2f7] text-lg sm:text-xl hover:text-[#bb9af7] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Download apk</a>
                    <a
                      href={project.docs}
                      className="inline-block underline text-[#7aa2f7] text-lg sm:text-xl hover:text-[#bb9af7] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >Docs</a>
                  </>
                    : <a
                      href={project.visit}
                      className="inline-block underline text-[#7aa2f7] text-lg sm:text-xl hover:text-[#bb9af7] transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >View Project
                    </a>}
                </div>

                {/* Tech Stack Badge Button - Shows on hover too */}
                {project.techStack && (
                  <div className="relative inline-block">
                    <button
                      onMouseEnter={() => setSelectedTechStack(project.title)} // Using title as unique ID
                      onMouseLeave={() => setSelectedTechStack(null)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#1a1b26] border border-[#7aa2f7]/50 rounded-full text-[#7aa2f7] hover:bg-[#7aa2f7] hover:text-[#1a1b26] transition-all duration-300"
                    // title="Hover to View Tech Stack"
                    >
                      <Layers size={18} />
                      <span className="text-sm font-semibold">Tech Stack</span>
                    </button>

                    {/* Tech Stack Hover Popup */}
                    {selectedTechStack === project.title && (
                      <div
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[18rem] bg-[#1a1b26]/95 backdrop-blur-md border border-[#7aa2f7]/50 rounded-xl p-4 shadow-xl z-50 animate-in fade-in zoom-in-95 duration-200 pointer-events-none"
                      >
                        <h3 className="text-[#c0caf5] font-bold text-center mb-3 border-b border-[#24283b] pb-2">Tech Stack</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                          {project.techStack.map((tech, i) => (
                            <div key={i} className="flex flex-col items-center gap-1">
                              <div className="text-2xl text-[#a9b1d6]">{tech.icon}</div>
                              <span className="text-xs text-[#c0caf5]">{tech.name}</span>
                            </div>
                          ))}
                        </div>
                        {/* Arrow */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-2 border-8 border-transparent border-t-[#7aa2f7]/50"></div>
                      </div>
                    )}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        {projects.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="group flex items-center gap-2 px-6 py-3 bg-[#24283b] text-[#7aa2f7] rounded-full border border-[#7aa2f7]/30 hover:bg-[#7aa2f7] hover:text-[#1a1b26] transition-all duration-300 font-semibold"
            >
              {showAllProjects ? (
                <>
                  Show Less Projects <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  View More Projects <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        )}


        <div className="mt-8 sm:mt-12">
          <button
            onClick={() => setShowSamples(!showSamples)}
            className="w-full flex items-center justify-between p-4 bg-[#24283b] hover:bg-[#2c324a] rounded-lg transition-colors group mb-6"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl sm:text-2xl font-bold text-[#c0caf5]">Image Samples of Work</span>
              <span className="text-sm text-[#7aa2f7] bg-[#1a1b26] px-3 py-1 rounded-full border border-[#7aa2f7]/30">
                {showSamples ? 'Hide Gallery' : 'View Gallery'}
              </span>
            </div>
            {showSamples ? (
              <ChevronUp className="w-6 h-6 text-[#7aa2f7]" />
            ) : (
              <ChevronDown className="w-6 h-6 text-[#7aa2f7] group-hover:translate-y-1 transition-transform" />
            )}
          </button>

          {showSamples && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fadeIn">
              <div className="flex justify-center">
                <div
                  className="relative w-full aspect-video cursor-pointer"
                  onClick={() => handleImageClick(fylz_ss)}
                >
                  <Image
                    src={fylz_ss}
                    fill
                    className="rounded-lg border-2 border-[#24283b] object-cover hover:opacity-90 transition-opacity"
                    alt="FYLz project screenshot"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="relative w-full aspect-video cursor-pointer"
                  onClick={() => handleImageClick(ias4)}
                >
                  <Image
                    src={ias4}
                    fill
                    className="rounded-lg border-2 border-[#24283b] object-cover hover:opacity-90 transition-opacity"
                    alt="Project image 4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="relative w-full aspect-video cursor-pointer"
                  onClick={() => handleImageClick(ias5)}
                >
                  <Image
                    src={ias5}
                    fill
                    className="rounded-lg border-2 border-[#24283b] object-cover hover:opacity-90 transition-opacity"
                    alt="Project image 5"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="relative w-full aspect-[9/20] cursor-pointer"
                  onClick={() => handleImageClick(bFinder_home)}
                >
                  <Image
                    src={bFinder_home}
                    fill
                    className="rounded-lg border-2 border-[#24283b] object-cover hover:opacity-90 transition-opacity"
                    alt="bFinder home screen"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="relative w-full aspect-[9/16] cursor-pointer"
                  onClick={() => handleImageClick(bFinder_explore)}
                >
                  <Image
                    src={bFinder_explore}
                    fill
                    className="rounded-lg border-2 border-[#24283b] object-cover hover:opacity-90 transition-opacity"
                    alt="bFinder explore screen"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <div
                  className="relative w-full aspect-[9/16] cursor-pointer"
                  onClick={() => handleImageClick(ressa_home)}
                >
                  <Image
                    src={ressa_home}
                    fill
                    className="rounded-lg border-2 border-[#24283b] object-cover hover:opacity-90 transition-opacity"
                    alt="ressa home screen"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Modal for full-size image */}
          {selectedImage && (
            <div
              ref={modalRef}
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-2 sm:p-4"
              onClick={closeModal}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <button
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white text-2xl sm:text-3xl hover:text-[#7aa2f7] transition-colors bg-black bg-opacity-50 rounded-full p-2"
                  onClick={closeModal}
                >
                  <IoClose />
                </button>
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={selectedImage}
                    alt="Full size preview"
                    className="max-w-full max-h-[90vh] object-contain"
                    width={1920}
                    height={1080}
                    priority
                  />
                </div>
              </div>
            </div>
          )}



        </div>

      </CardContent>
    </Card>
  );
}

export default Card4;
