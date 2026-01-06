import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Card6() {
  return (
    <Card className="bg-[#1a1b26] w-full sm:w-[90%] lg:w-[80rem] mx-auto h-auto sm:h-auto p-8 rounded-lg border-2 border-[#24283b] shadow-none">
      <CardHeader>
        <CardTitle className="text-4xl sm:text-5xl p-10 font-bold text-center text-[#c0caf5]">
          Resume
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 justify-around m-6 gap-6 pt-0">
        {/* View My Resume Card */}
        <a target="_blank" href="https://drive.google.com/file/d/1GNHIMnAbZqG5xBDBCDo7_V1zGpidviEp/view?usp=sharing" className="p-6 bg-[#24283b] rounded-lg border border-[#24283b] hover:bg-[#7aa2f7] transition-all duration-300 transform hover:scale-105 shadow-md block" >
          <p className="text-[1.5rem] text-center text-[#c0caf5] hover:text-[#1a1b26] transition-all duration-300 transform hover:scale-105">
            View My Resume
          </p>
        </a>

        {/* Download My Resume Format Card */}
        <a target="_blank" href="https://drive.google.com/file/d/1M_qOyrU1w5hl-WuRalkiDAihJjJqYWcl/view?usp=sharing" className="block">
          <div className="p-6 bg-[#24283b] rounded-lg border border-[#24283b] hover:bg-[#7aa2f7] transition-all duration-300 transform hover:scale-105 shadow-md">
            <p className="text-[1.5rem] text-center text-[#c0caf5] hover:text-[#1a1b26] transition-all duration-300 transform hover:scale-105">
              Download My Resume Format
            </p>
          </div>
        </a>
      </CardContent>
    </Card>
  );
}

export default Card6;
