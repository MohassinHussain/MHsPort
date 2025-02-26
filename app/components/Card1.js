import React from 'react'
import Image from "next/image";
import im from '../../public/img1.avif'

function Card1() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 grid-cols-1 gap-4 w-[80rem] sm:w-[90%] mx-auto mt-10">
      <div className="flex flex-col  justify-center px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold pb-6">B Md Mohassin Hussain</h1>
        <p className="text-xl sm:text-2xl">Full-stack Developer AI Enthusiast</p>
      </div>

      <div className="flex  justify-center items-center px-4 sm:px-8">
        <Image 
          src={im}
          width={400}
          height={500}
          className="rounded-lg hidden md:flex"
        />
      </div>

      <div className="flex flex-col justify-center col-span-2 px-4 sm:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold">CMR College of Engineering & Technology</h1>
        <div className="flex flex-col sm:flex-row justify-between mt-12 mb-10 sm:mt-16">
          <p className="text-xl sm:text-2xl mb-4 sm:mb-0">B. Tech in Artificial Intelligence & Machine Learning</p>
          <p className="text-xl sm:text-2xl">Self Developing From Full-stack to AI via Blockchain</p>
        </div>
      </div>
    </div>
  );
}

export default Card1;
