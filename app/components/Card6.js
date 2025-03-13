import React from "react";

function Card6() {
  return (
    <div className="bg-[#0d0c12] w-full sm:w-[90%] lg:w-[80rem] mx-auto h-auto sm:h-auto">
      <h1 className="text-4xl sm:text-5xl p-10 font-bold text-center text-white">
        Resume
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-around m-6 gap-6">
        {/* View My Resume Card */}
        <a target="_blank" href="https://drive.google.com/file/d/1xoifEEC25OuehZYbjw3VstaPDGJtOBob/view?usp=drive_link" className="p-6 bg-[#1f1f21] rounded-lg hover:bg-[#292b2f] transition-all duration-300 transform hover:scale-105 shadow-md" >
          <p className="text-[1.5rem] text-center text-white">
            View My Resume
          </p>
        </a>

        {/* Download My Resume Format Card */}
        <div className="p-6 bg-[#1f1f21] rounded-lg hover:bg-[#292b2f] transition-all duration-300 transform hover:scale-105 shadow-md">
          <p className="text-[1.5rem] text-center text-white">
            Download My Resume Format
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card6;
