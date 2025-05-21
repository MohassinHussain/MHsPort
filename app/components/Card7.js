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
    setFrom("");
    setMsg("");
  }

  return (
    <div className="bg-[#1a1b26] w-full sm:w-[90%] lg:w-[80rem] mx-auto h-auto sm:h-auto p-8 rounded-lg border border-[#24283b]">
      <h1 className="text-4xl sm:text-5xl p-10 font-bold text-center text-[#c0caf5]">
        Connect with me!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 m-6">
        {/* Connection Platforms Section */}
        <div className="bg-[#24283b] p-6 rounded-lg border border-[#24283b]">
          <h1 className="text-3xl font-bold mb-6 text-center text-[#c0caf5]">
            Platforms for Connections
          </h1>
          <div className="flex flex-col gap-6 text-2xl sm:text-4xl text-[#c0caf5]">
            <a href="https://github.com/MohassinHussain" className="flex items-center hover:bg-[#3d4b69] rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              <FaGithub className="mr-5" />
              <p className="text-lg sm:text-2xl bg-[#1a1b26] p-2 rounded-md">
                MohassinHusssain
              </p>
            </a>
            <a href="https://instagram.com/in/mohassin_hussain03" className="flex items-center hover:bg-[#3d4b69] rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              <FaInstagram className="mr-5" />
              <p className="text-lg sm:text-2xl bg-[#1a1b26] p-2 rounded-md">
                mohassin_hussain03
              </p>
            </a>
            <a href="https://linkedin.com/in/mohassinhussain" className="flex items-center hover:bg-[#3d4b69] rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              <FaLinkedin className="mr-5" />
              <p className="text-lg sm:text-2xl bg-[#1a1b26] p-2 rounded-md">
                mohassinhussain
              </p>
            </a>
            <a href="mailto:mohassinhussain22@gmail.com" className="flex items-center hover:bg-[#3d4b69] rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              <MdOutgoingMail className="mr-5" />
              <p className="text-lg sm:text-2xl bg-[#1a1b26] p-2 rounded-md">
                mohassinhussain22@gmail.com
              </p>
            </a>
          </div>
        </div>

        {/* Mail Form Section */}
        <div className="bg-[#24283b] p-6 rounded-lg flex flex-col border border-[#24283b]">
          <h1 className="text-3xl font-bold mb-6 text-center text-[#c0caf5]">Do Mail</h1>
          <input
            type='email'
            placeholder="Your Email..."
            className="p-3 rounded-md bg-[#1a1b26] w-full sm:w-3/4 mb-4 text-[#c0caf5] border border-[#24283b]"
            value={from}
            required
            onChange = {(e)=> setFrom(e.target.value)}
          />
          <textarea
            className="p-3 rounded-md bg-[#1a1b26] w-full sm:w-3/4 resize-none text-[#c0caf5] border border-[#24283b]"
            placeholder="Enter your content here.."
            value={msg}
            onChange = {(e)=> setMsg(e.target.value)}
          ></textarea>
          <button className="self-center sm:self-start mt-4 p-3 rounded-md bg-[#1a1b26] hover:bg-[#7aa2f7] hover:text-[#1a1b26] transition-colors font-bold text-[#c0caf5] border border-[#24283b]" onClick={sendMail}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card7;
