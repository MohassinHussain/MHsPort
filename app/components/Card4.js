import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MdOutlinePersonalVideo, MdOutlineEmojiEvents } from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import { IoAccessibility } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";


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
  }, []);

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
      visit: "https://drive.google.com/file/d/1JIrL9oQFk02JW2hkQQ8t3c1O50aOuSzH/view?usp=sharing",
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
      visit: "https://drive.google.com/file/d/1JNOaXq6rEnhggqHGHZ8rXgMewm3inXKP/view?usp=sharing",
    },
    {
      number: "5",
      title: "Globehoppin",
      description: "Contributed to UI improvements and overall website optimization, enhancing responsiveness with Tailwind CSS for a better mobile experience.",
      visit: "https://github.com/MohassinHussain/GlobeHoppin",
    },
    {
      number: "6",
      title: "Ressa",
      description: "Ressa is one stop mobile app to store and use the resources whenver needed. Store-use and revise, schedule your required resources, pin them to calendar.",
      visit: "https://github.com/MohassinHussain/ressa",
      apk: "https://drive.google.com/file/d/1BX2dvCaqppxlvNOFms3ctpKR66H_0YaZ/view?usp=sharing",
      docs: "https://docs.google.com/document/d/1eRYMYS-w1wDfgUjq89birFIH1cUpBctI/edit?usp=sharing&ouid=110889650968495214776&rtpof=true&sd=true"
    },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (e) => {
    // Only close if clicking the modal background or close button
    if (e.target === modalRef.current || e.target.closest('button')) {
      setSelectedImage(null);
      // Restore body scroll
      document.body.style.overflow = 'auto';
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="w-full sm:w-[90%] lg:w-[80rem] mx-auto h-auto sm:h-auto bg-[#1a1b26] p-4 sm:p-8 rounded-lg border border-[#24283b]">
      <h1 className="text-4xl sm:text-5xl font-bold mb-10 text-center text-[#c0caf5]">Experience</h1>

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={el => projectRefs.current[index] = el}
            className="bg-[#24283b] p-4 sm:p-6 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transition-all transform hover:scale-105 opacity-0 translate-y-10 transition-all duration-700 ease-out"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-[#7aa2f7] text-center">{project.number}</h2>
            <h1 className="font-bold text-2xl sm:text-3xl pt-3 sm:pt-4 text-[#c0caf5] text-center">{project.title}</h1>
            <p className="text-base sm:text-lg text-[#a9b1d6] mt-3 sm:mt-4">{project.description}</p>
            <div className="mt-4 sm:mt-6 text-center">
              {project.apk && project.docs ? <>
                <a
                  href={project.apk}
                  className="inline-block underline text-[#7aa2f7] text-lg sm:text-xl hover:text-[#bb9af7] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >Download apk</a>
                <br></br>
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
          </div>
        ))}
      </div>

      <div className="m-4 sm:m-6 md:m-12 mt-10 sm:mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-10 font-bold text-[#c0caf5]">Image samples of work</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                alt="bFinder explore screen"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

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

        <div className="mt-8 sm:mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#c0caf5] mb-6 sm:mb-10">
            Achievements
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-around gap-6 mt-6">
            <div className="flex flex-col items-center bg-[#24283b] p-6 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transition-all duration-300">
              <MdOutlinePersonalVideo className="text-6xl mb-4 text-[#7aa2f7]" />
              <h2 className="text-xl font-bold text-[#c0caf5] mb-2">GSSoC Contributor</h2>
              <p className="text-lg text-center text-[#a9b1d6]">
                Contributed to 2 projects under GSSoC extd. 2024.
              </p>
            </div>
            <a href="https://drive.google.com/file/d/14HWLdYkInhVeYSHxvw3kgRqp_E2RJXRu/view?usp=sharing">
            <div className="flex flex-col items-center bg-[#24283b] p-6 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transition-all duration-300">
              <IoAccessibility className="text-6xl mb-4 text-[#7aa2f7]" />
              <h2 className="text-xl font-bold text-[#c0caf5] mb-2">Mentorship</h2>
              <p className="text-lg text-center text-[#a9b1d6]">
                Mentored more than 5 teams to complete their projects.
              </p>
            </div>
            </a>
            <a href="https://drive.google.com/file/d/13hbmNKMa0-fDhRjAiHMCNHqkCnkU4lyR/view?usp=sharing">
              <div className="flex flex-col items-center bg-[#24283b] p-6 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transition-all duration-300">
                <MdOutlineEmojiEvents className="text-6xl mb-4 text-[#7aa2f7]" />
                <h2 className="text-xl font-bold text-[#c0caf5] mb-2">Event Hosting</h2>
                <p className="text-lg text-center text-[#a9b1d6]">
                  Hosted a Technical Event, BugRack. Got more than 30 participants.
                </p>
              </div> </a>
              <a href="https://drive.google.com/file/d/18ITFakRV16X0d-dKzNdx-pU2yDbRk5EM/view?usp=drive_link">
            <div className="flex flex-col items-center bg-[#24283b] p-6 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transition-all duration-300">
             <IoMdBook className="text-6xl mb-4 text-[#7aa2f7]" />
              <h2 className="text-xl font-bold text-[#c0caf5] mb-2">Course Completion</h2>
              <p className="text-lg text-center text-[#a9b1d6]">
               From Cisco: Achieved Student level credential in Cyber Security. 
              </p>
            </div>
            </a>
          </div>
        </div>

        <div className="mt-8 sm:mt-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#c0caf5] mb-6 sm:mb-10">
            Contact
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a
              href="https://www.linkedin.com/in/mohassinhussain/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#c0caf5] hover:text-[#7aa2f7] transition-colors text-lg sm:text-xl"
            >
              <FaLinkedin className="text-2xl sm:text-3xl" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/MohassinHussain"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#c0caf5] hover:text-[#7aa2f7] transition-colors text-lg sm:text-xl"
            >
              <FaGithub className="text-2xl sm:text-3xl" />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:mohassinhussain22@gmail.com"
              className="flex items-center gap-2 text-[#c0caf5] hover:text-[#7aa2f7] transition-colors text-lg sm:text-xl"
            >
              <FaEnvelope className="text-2xl sm:text-3xl" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card4;
