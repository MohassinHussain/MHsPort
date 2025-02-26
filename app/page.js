import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";
import Card5 from "./components/Card5";
import Card6 from "./components/Card6";
import Card7 from "./components/Card7";

export default function Home() {
  return (
    <div className="">
      {/* Section 1: Intro */}
      <div className="s1-intro bg-[#0d0c12] h-auto sm:h-[50rem] md:h-[60rem] lg:h-[60rem] xl:h-[60rem] flex justify-center items-center">
        <Card1 />
      </div>

      {/* Section 2: About */}
      <div className="s2-about bg-[#1f1f21] h-auto sm:h-[25rem] md:h-[30rem] lg:h-[30rem] xl:h-[30rem] flex justify-center items-center">
        <Card2 />
      </div>

      {/* Section 3: Skills */}
      <div className="s3-skills bg-[#0d0c12] h-auto sm:h-[40rem] md:h-[50rem] lg:h-[50rem] xl:h-[50rem] flex justify-center">
        <Card3 />
      </div>

      {/* Section 4: Projects */}
      <div className="s4-projects bg-[#0d0c12] h-auto sm:h-[150rem] md:h-[200rem] lg:h-[200rem] xl:h-[200rem] flex justify-center">
        <Card4 />
      </div>

      {/* Section 5: Passion */}
      <div className="s5-passion bg-[#1f1f21] h-auto sm:h-[40rem] md:h-[50rem] lg:h-[50rem] xl:h-[50rem] flex justify-center items-center">
        <Card5 />
      </div>

      {/* Section 6: Resume */}
      <div className="s6-resume bg-[#0d0c12] h-auto sm:h-[15rem] md:h-[20rem] lg:h-[20rem] xl:h-[20rem] flex justify-center items-center">
        <Card6 />
      </div>

      {/* Section 7: Connect */}
      <div className="s7-connect bg-[#0d0c12] h-auto sm:h-[35rem] md:h-[45rem] lg:h-[45rem] xl:h-[45rem] flex justify-center items-center">
        <Card7 />
      </div>
    </div>
  );
}
