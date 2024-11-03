"use client";

import Navbar from "../Navbar";
import jobData from "../jobs.json";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const ExperienceBoard = ({ desc, company, title, dates }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="w-full flex flex-col items-center"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="flex flex-row h-20 w-full max-w-5xl mt-5 p-4 rounded-lg shadow-lg duration-300 bg-[#CAF1DE]">
        <div className="mr-5">
        </div>

        <div className="flex justify-between w-full items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-light text-emerald-700">{company}</h1>
            <h2 className="text-emerald-700 font-light">{title}</h2>
          </div>

          <div className="text-emerald-700/90 font-light">{dates}</div>
        </div>
      </div>
      <div className="flex flex-row mt-5 justify-center items-center gap-5">
        <div className="h-20 border border-emerald-500"></div>
        <div className="text-emerald-700 max-w-4xl rounded-lg shadow-md font-light p-4 bg-[#CAF1DE] hover:bg-[#CAF1DE]/90 transition-colors">
          {desc}
        </div>
      </div>
    </motion.div>
  );
};

// Experience page
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#E1F8DC] to-[#ACDDDE]">
        <div className="text-2xl font-light pt-5 flex justify-center text-emerald-700">
          <TypeAnimation
            sequence={['/experience', 2000]}
            wrapper="span"
            speed={1}
            className="text-2xl inline-block"
            repeat={Infinity}
          />
        </div>
        <div className="flex font-light justify-center">
          <ExperienceBoard
            logo={jobData.logo}
            desc={jobData.description}
            company={jobData.company}
            title={jobData.job_title}
            dates={jobData.dates}
          />
        </div>
      </div>
    </>
  );
}