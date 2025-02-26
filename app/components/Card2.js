import React from "react";

function Card2() {
  return (
    <div className="bg-[#0d0c12] w-[90%] sm:w-[80%] md:w-[80rem] m-5 h-auto sm:h-auto rounded-md mx-auto">
      <h1 className="text-4xl sm:text-5xl p-6 sm:p-10 font-bold text-center">About & Work</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-around gap-6 m-6 sm:m-8">
        <div className="bg-[#1f1f21] p-6 sm:p-8">
          <p className="text-[1rem] sm:text-[1.2rem]">
          A passionate full-stack developer, AI/ML enthusiast, and problem solver, currently pursuing a B.Tech in AI & ML. Dedicated to innovation, open-source contributions, and building impactful tech solutions.
          </p>
        </div>
        <div className="bg-[#1f1f21] p-6 sm:p-8">
          <p className="text-[1rem] sm:text-[1.2rem]">
          Building full-stack applications with a focus on AI/ML integration, real-time communication, and scalable architectures. Passionate about open-source contributions, optimizing backend systems, and developing innovative tech solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card2;
