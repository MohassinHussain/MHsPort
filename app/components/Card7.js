"use client"

import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

function Card7() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [msg, setMsg] = useState("")

  const sendMail = (e) => {
    e.preventDefault();
    console.log(from);
    console.log(msg);
    
  }

  return (
    <div className="bg-[#0d0c12] w-full sm:w-[90%] lg:w-[80rem] mx-auto h-auto sm:h-auto">
      <h1 className="text-4xl sm:text-5xl p-10 font-bold text-center text-white">
        Connect with me!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 m-6">
        {/* Connection Platforms Section */}
        <div className="bg-[#1f1f21] p-6 rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-white">
            Platforms for Connection
          </h1>
          <div className="flex flex-col gap-6 text-2xl sm:text-4xl text-white">
            <a href="https://github.com/MohassinHussain" className="flex items-center hover:bg-[#292b2f] rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              <FaGithub className="mr-5" />
              <p className="text-lg sm:text-2xl bg-[#0d0c12] p-2 rounded-md">
                MohassinHusssain
              </p>
            </a>
            <a href="https://instagram.com/in/mohassin_hussain03" className="flex items-center hover:bg-[#292b2f] rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              <FaInstagram className="mr-5" />
              <p className="text-lg sm:text-2xl bg-[#0d0c12] p-2 rounded-md">
                mohassin_hussain03
              </p>
            </a>
            <a href="https://linkedin.com/in/mohassinhussain" className="flex items-center hover:bg-[#292b2f] rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              <FaLinkedin className="mr-5" />
              <p className="text-lg sm:text-2xl bg-[#0d0c12] p-2 rounded-md">
                mohassinhussain
              </p>
            </a>
            <a href="https://mailto:mohassinhussain22@gmail.com" className="flex items-center hover:bg-[#292b2f] rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              <MdOutgoingMail className="mr-5" />
              <p className="text-lg sm:text-2xl bg-[#0d0c12] p-2 rounded-md">
                mohassinhussain22@gmail.com
              </p>
            </a>
          </div>
        </div>

        {/* Mail Form Section */}
        <div className="bg-[#1f1f21] p-6 rounded-lg flex flex-col">
          <h1 className="text-3xl font-bold mb-6 text-center text-white">Do Mail</h1>
          <input
            type='email'
            placeholder="Your Email..."
            className="p-3 rounded-md bg-[#0d0c12] w-full sm:w-3/4 mb-4 text-white"
            value={from}
            onChange = {(e)=> setFrom(e.target.value)}
          />
          <textarea
            className="p-3 rounded-md bg-[#0d0c12] w-full sm:w-3/4 resize-none text-white"
            placeholder="Enter your content here.."
            value={msg}
            onChange = {(e)=> setMsg(e.target.value)}
          ></textarea>
          <button className="self-center sm:self-start mt-4 p-3 rounded-md bg-[#0d0c12] hover:bg-[#292b2f] transition-colors font-bold text-white" onClick={sendMail}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card7;
