"use client"

import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaX } from "react-icons/fa6";

function Card7() {
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("")

  const sendMail = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:mohassinhussain22@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg + "\n\nFrom: " + from)}`;
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=mohassinhussain22@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg + "\n\nFrom: " + from)}`;

    // Attempt to open mail client
    window.location.href = mailtoLink;

    // Fallback: If focus isn't lost (meaning no app opened/dialog shown) after a delay, open Gmail in browser
    // Note: This is a best-effort check. 'blur' fires when the window loses focus (e.g. to an external app).
    let isBlur = false;
    const onBlur = () => { isBlur = true; };
    window.addEventListener("blur", onBlur);

    setTimeout(() => {
      window.removeEventListener("blur", onBlur);
      if (!isBlur) {
        window.open(gmailLink, '_blank');
      }
    }, 1500);

    setFrom("");
    setSubject("");
    setMsg("");
  }

  return (
    <Card className="bg-[#1a1b26]   w-full sm:w-[90%] lg:w-[80rem] mx-auto h-auto sm:h-auto p-8 rounded-lg border-2 border-[#24283b] shadow-none">
      <CardHeader>
        <CardTitle className="text-4xl sm:text-5xl p-10 font-bold text-center text-[#c0caf5]">
          Connect with me!
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-6 m-6 pt-0">
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
            <a href="https://x.com/MohassinHs3" className="flex items-center hover:bg-[#3d4b69] rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md">
              <FaTwitter className="mr-5" />
              <p className="text-lg sm:text-2xl bg-[#1a1b26] p-2 rounded-md">
                MohassinHs3
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
            onChange={(e) => setFrom(e.target.value)}
          />
          <input
            type='text'
            placeholder="Subject..."
            className="p-3 rounded-md bg-[#1a1b26] w-full sm:w-3/4 mb-4 text-[#c0caf5] border border-[#24283b]"
            value={subject}
            required
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            className="p-3 rounded-md bg-[#1a1b26] w-full sm:w-3/4 resize-none text-[#c0caf5] border border-[#24283b]"
            placeholder="Enter your content here.."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            rows={4}
          ></textarea>
          <button className="self-center sm:self-start mt-4 p-3 rounded-md bg-[#1a1b26] hover:bg-[#7aa2f7] hover:text-[#1a1b26] transition-colors font-bold text-[#c0caf5] border border-[#24283b]" onClick={sendMail}>
            Send
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Card7;
