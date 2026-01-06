import React from "react";
import { MdOutlinePersonalVideo, MdOutlineEmojiEvents } from "react-icons/md";
import { IoMdBook } from "react-icons/io";
import { IoAccessibility } from "react-icons/io5";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { FaArrowTrendUp } from "react-icons/fa6";


function Achievements() {
    return (
        <Card className="w-full sm:w-[90%] lg:w-[80rem] mx-auto bg-[#1a1b26] p-4 sm:p-8 rounded-lg border-2 border-[#24283b] shadow-none">
            <CardHeader>
                <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#c0caf5] mb-6 sm:mb-10">
                    Achievements
                </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <div className="grid grid-cols-1 sm:grid-cols-3 justify-around gap-6 mt-6">
                    <div className="flex flex-col items-center bg-[#24283b] p-6 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transition-all duration-300">
                        <MdOutlinePersonalVideo className="text-6xl mb-4 text-[#7aa2f7]" />
                        <h2 className="text-xl font-bold text-[#c0caf5] mb-2">GSSoC Contributor</h2>
                        <p className="text-lg text-center text-[#a9b1d6]">
                            Contributed to 2 projects under GSSoC extd. 2024.
                        </p>
                    </div>
                    <a href="https://drive.google.com/file/d/14HWLdYkInhVeYSHxvw3kgRqp_E2RJXRu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col items-center bg-[#24283b] p-6 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transition-all duration-300">
                            <IoAccessibility className="text-6xl mb-4 text-[#7aa2f7]" />
                            <h2 className="text-xl font-bold text-[#c0caf5] mb-2">Mentorship</h2>
                            <p className="text-lg text-center text-[#a9b1d6]">
                                Mentored more than 5 teams to complete their projects.
                            </p>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/13hbmNKMa0-fDhRjAiHMCNHqkCnkU4lyR/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col items-center bg-[#24283b] p-6 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transition-all duration-300">
                            <MdOutlineEmojiEvents className="text-6xl mb-4 text-[#7aa2f7]" />
                            <h2 className="text-xl font-bold text-[#c0caf5] mb-2">Event Hosting</h2>
                            <p className="text-lg text-center text-[#a9b1d6]">
                                Hosted a Technical Event, BugRack. Got more than 30 participants.
                            </p>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/18ITFakRV16X0d-dKzNdx-pU2yDbRk5EM/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col items-center bg-[#24283b] p-6 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transition-all duration-300">
                            <IoMdBook className="text-6xl mb-4 text-[#7aa2f7]" />
                            <h2 className="text-xl font-bold text-[#c0caf5] mb-2">Course Completion</h2>
                            <p className="text-lg text-center text-[#a9b1d6]">
                                From Cisco: Achieved Student level credential in Cyber Security.
                            </p>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1OJBkIfRatj68fs0NC1EY-YH-yBukYfeM/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col items-center bg-[#24283b] p-6 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transition-all duration-300">
                            <IoMdBook className="text-6xl mb-4 text-[#7aa2f7]" />
                            <h2 className="text-xl font-bold text-[#c0caf5] mb-2">Course Completion</h2>
                            <p className="text-lg text-center text-[#a9b1d6]">
                                From Oracle: OCI Certified 2025 Gen AI Professional.
                            </p>
                        </div>
                    </a>
                    <a href="https://drive.google.com/file/d/1CI1n28tfN4GAp5rSgXNQYccldy7WU032/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                        <div className="flex flex-col items-center bg-[#24283b] p-6 rounded-lg border border-[#24283b] hover:border-[#7aa2f7] transition-all duration-300">
                            <FaArrowTrendUp className="text-6xl mb-4 text-[#7aa2f7]" />
                            <h2 className="text-xl font-bold text-[#c0caf5] mb-2">Place in the Pre-Finale aidothon 4.0</h2>
                            <p className="text-lg text-center text-[#a9b1d6]">
                                aidKRIYA Walker App Challenge 2025
                            </p>
                        </div>
                    </a>
                </div>
            </CardContent>
        </Card>
    );
}

export default Achievements;
