"use client";

import Navbar from "../Navbar";
import projects from "../projects.json";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ProjectBoard = ({ company, desc, link, techs, demo }) => {
  const router = useRouter();
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
      <div className="flex flex-row h-20 w-full max-w-5xl mt-5 p-4 rounded-lg shadow-lg bg-[#CAF1DE]">
        <div className="flex justify-between w-full items-center">
          <div className="flex flex-row items-center">
            <h1 className="text-2xl font-light text-emerald-700">{company}</h1>
            <div className="ml-3">
              {techs.map((tech, index) => (
                <div
                  key={index}
                  className="inline-block bg-emerald-200 shadow-lg rounded-md px-2 py-1 text-sm text-emerald-700 font-light mr-1"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-3">
            {company !== "TuneSwipe" && company !== "SpotiMix" ? (
              <FaExternalLinkAlt 
                size="30" 
                className="text-emerald-700 hover:text-emerald-600 cursor-pointer transition-colors"
                onClick={() => router.push(demo)}
              />
            ) : null}

            <FaGithub
              size="30"
              onClick={() => router.push(link)}
              className="text-emerald-700 hover:text-emerald-600 cursor-pointer transition-colors"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-5 w-full max-w-4xl items-center gap-5">
        <div className="h-20 border border-emerald-500"></div>
        <div className="text-emerald-700 max-w-4xl rounded-lg shadow-md font-light p-4 bg-[#CAF1DE] hover:bg-[#CAF1DE]/90 transition-colors">
          {desc}
        </div>
      </div>
    </motion.div>
  );
};

// Projects page
export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#E1F8DC] to-[#ACDDDE]">
        <div className="text-2xl font-light pt-5 flex justify-center text-emerald-700">
          <TypeAnimation
            sequence={['/projects', 2000]}
            wrapper="span"
            speed={1}
            className="text-2xl inline-block"
            repeat={Infinity}
          />
        </div>
        <div className="flex flex-col justify-center">
          <ProjectBoard
            company={projects.kiwiNote.title}
            desc={projects.kiwiNote.description}
            link={projects.kiwiNote.link}
            techs={projects.kiwiNote.technologies}
            demo={projects.kiwiNote.demo}
          />
          <ProjectBoard
            company={projects.rateMyUMNDorm.title}
            desc={projects.rateMyUMNDorm.description}
            link={projects.rateMyUMNDorm.link}
            techs={projects.rateMyUMNDorm.technologies}
            demo={projects.rateMyUMNDorm.demo}
          />
          <ProjectBoard
            company={projects.tuneSwipe.title}
            desc={projects.tuneSwipe.description}
            link={projects.tuneSwipe.link}
            techs={projects.tuneSwipe.technologies}
          />
          <ProjectBoard
            company={projects.spotimix.title}
            desc={projects.spotimix.description}
            link={projects.spotimix.link}
            techs={projects.spotimix.technologies}
          />
        </div>
      </div>
    </>
  );
}