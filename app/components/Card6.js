import React from "react";

function Card6() {
  return (
    <div className="bg-[#1a1b26] w-full sm:w-[90%] lg:w-[80rem] mx-auto h-auto sm:h-auto p-8 rounded-lg border border-[#24283b]">
      <h1 className="text-4xl sm:text-5xl p-10 font-bold text-center text-[#c0caf5]">
        Resume
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-around m-6 gap-6">
        {/* View My Resume Card */}
        <a target="_blank" href="https://drive.google.com/file/d/1GkPkQXKovbtFFfvXGfocAp0VD5DEqVwz/view?usp=drivesdk" className="p-6 bg-[#24283b] rounded-lg border border-[#24283b] hover:bg-[#7aa2f7] transition-all duration-300 transform hover:scale-105 shadow-md" >
          <p className="text-[1.5rem] text-center text-[#c0caf5] hover:text-[#1a1b26] transition-all duration-300 transform hover:scale-105">
            View My Resume
          </p>
        </a>

        {/* Download My Resume Format Card */}
        <a target="_blank" href="https://drive.google.com/file/d/1kEBEMc42jfbQVm0AdtvcppJhcwqdXP76/view?usp=sharing">
        <div className="p-6 bg-[#24283b] rounded-lg border border-[#24283b] hover:bg-[#7aa2f7] transition-all duration-300 transform hover:scale-105 shadow-md">
          <p className="text-[1.5rem] text-center text-[#c0caf5] hover:text-[#1a1b26] transition-all duration-300 transform hover:scale-105">
            Download My Resume Format
          </p>
        </div>
        </a>
      </div>
    </div>
  );
}

export default Card6;
