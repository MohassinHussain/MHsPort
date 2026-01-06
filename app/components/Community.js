import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Card5() {
  return (
    <Card className="flex flex-col items-center bg-[#1a1b26] border-none shadow-none">
      {/* Main container */}
      <CardContent className="bg-[#1a1b26] w-full max-w-screen-xl h-[27rem] flex flex-col justify-center px-6 sm:px-12 border-2 border-[#24283b] rounded-lg">
        <a href="https://discord.gg/e4HNGJeT" className="text-4xl sm:text-5xl font-bold text-[#c0caf5] text-center p-4 cursor-pointer hover:text-[#7aa2f7]">
          Join Our Community: Development & Discussions
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-[#24283b] p-6 rounded-md border border-[#24283b]">
            <p className="text-lg sm:text-xl text-[#a9b1d6]">
              Discover the latest true technical updates
            </p>
          </div>
          <div className="bg-[#24283b] p-6 rounded-md border border-[#24283b]">
            <p className="text-lg sm:text-xl text-[#a9b1d6]">
              Stay updated with the newest releases, exploring technical stuff, chilling events, and captivating competetions.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Card5;
