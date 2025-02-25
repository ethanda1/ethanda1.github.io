"use client";

import Navbar from "../Navbar";
import jobData from "../jobs.json";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const ExperienceBoard = ({ desc, company, title, dates, index }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="w-full flex flex-col md:flex-row items-center mb-16 relative"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Timeline dot and line */}
      <div className="absolute left-[50%] md:left-1/2 transform -translate-x-1/2 h-full">
        <div className="w-4 h-4 bg-emerald-500 rounded-full absolute top-8 -translate-x-1/2 z-10"></div>
        <div className="w-0.5 h-[calc(100%+4rem)] bg-emerald-300 absolute -translate-x-1/2"></div>
      </div>

      {/* Content */}
      <div className={`w-full md:w-1/2 flex ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
        <div className="w-full bg-[#CAF1DE] rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
          <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
            <span className="text-emerald-700/90 font-medium bg-emerald-200/50 px-4 py-1 rounded-full inline-block mb-3">
              {dates}
            </span>
            <h1 className="text-2xl font-medium text-emerald-700">{company}</h1>
            <h2 className="text-lg text-emerald-600 mt-1 mb-4">{title}</h2>
            <div className={`text-emerald-700 font-light leading-relaxed ${isEven ? 'md:text-right' : 'md:text-left'}`}>
              {desc}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#E1F8DC] to-[#ACDDDE] px-4 pb-20">
        <div className="text-3xl font-medium pt-10 pb-16 flex justify-center text-emerald-700">
          <TypeAnimation
            sequence={['/experience', 2000]}
            wrapper="span"
            speed={1}
            className="inline-block"
            repeat={Infinity}
          />
        </div>
        <motion.div 
          className="flex flex-col items-center max-w-7xl mx-auto relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {jobData.jobs.map((job, index) => (
            <ExperienceBoard
              key={index}
              desc={job.description}
              company={job.company}
              title={job.job_title}
              dates={job.dates}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}