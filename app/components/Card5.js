import React from "react";

function Card5() {
  return (
    <div className="flex flex-col items-center">
      {/* Main container */}
      <div className="bg-[#0d0c12] w-full max-w-screen-xl h-[27rem] flex flex-col justify-center px-6 sm:px-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-white text-center p-4">
          Join Our Community: Development & Discussions
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#1f1f21] p-6 rounded-md">
            <p className="text-lg sm:text-xl text-white">
              Discover the latest true crime podcasts, featuring fresh perspectives and compelling investigations.
            </p>
          </div>
          <div className="bg-[#1f1f21] p-6 rounded-md">
            <p className="text-lg sm:text-xl text-white">
              Stay updated with the newest releases, exploring unsolved mysteries, chilling events, and captivating narratives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card5;
