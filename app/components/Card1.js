import React from 'react'
import Image from "next/image";
import im from '../../public/img1.avif'

function Card1() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 grid-cols-1 gap-4 w-[80rem] sm:w-[90%] mx-auto mt-5 bg-[#1a1b26] p-8 rounded-lg border border-[#24283b]">
      <div className="flex flex-col justify-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold pb-6 text-[#c0caf5]">B Md Mohassin Hussain</h1>
       {/* <h1 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#c0caf5] via-[#c0caf5] to-white drop-shadow-[0px_0px_10px_rgba(255,255,255,0.5)]">
  Glossy Text
</h1> */}




        <p className="text-xl sm:text-2xl text-[#a9b1d6]">Full-stack Developer AI Enthusiast</p>
      </div>

      <div className="flex justify-center items-center px-4 sm:px-8">
        <Image
          alt="Image"
          src={im}
          width={400}
          height={500}
          className="rounded-lg hidden md:flex border-2 border-[#24283b]"
        />
      </div>

      <div className="flex flex-col justify-center col-span-2 px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#c0caf5]">CMR College of Engineering & Technology</h1>
        <div className="flex flex-col sm:flex-row justify-between mt-12 mb-10 sm:mt-16">
          <p className="text-xl sm:text-2xl mb-4 sm:mb-0 text-[#a9b1d6]">B. Tech in Artificial Intelligence & Machine Learning</p>
          <p className="text-xl sm:text-2xl text-[#a9b1d6]">❤️ towards Full-stack, AI-ML, LLMs, Open-source, Development, Problem-Solving</p>
        </div>
      </div>
    </div>
  );
}

export default Card1;
