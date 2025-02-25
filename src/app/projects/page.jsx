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
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-row h-auto w-full max-w-5xl mt-5 p-6 rounded-xl shadow-lg bg-[#CAF1DE] hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <h1 className="text-2xl font-medium text-emerald-700">{company}</h1>
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-emerald-200/70 backdrop-blur-sm shadow-sm rounded-full px-3 py-1 text-sm text-emerald-800 font-medium"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              {demo && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-emerald-600 hover:bg-emerald-700 transition-colors cursor-pointer"
                  onClick={() => router.push(demo)}
                >
                  <FaExternalLinkAlt size="24" className="text-white" />
                </motion.div>
              )}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-900 transition-colors cursor-pointer"
                onClick={() => router.push(link)}
              >
                <FaGithub size="24" className="text-white" />
              </motion.div>
            </div>
          </div>
          <div className="text-emerald-700 font-light leading-relaxed">
            {desc}
          </div>
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
      <div className="min-h-screen bg-gradient-to-br from-[#E1F8DC] to-[#ACDDDE] px-4 pb-12">
        <div className="text-3xl font-medium pt-8 pb-6 flex justify-center text-emerald-700">
          <TypeAnimation
            sequence={['/projects', 2000]}
            wrapper="span"
            speed={1}
            className="inline-block"
            repeat={Infinity}
          />
        </div>
        <motion.div 
          className="flex flex-col items-center max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ProjectBoard
            company={projects.photoTag.title}
            desc={projects.photoTag.description}
            link={projects.photoTag.link}
            techs={projects.photoTag.technologies}
          />
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
        </motion.div>
      </div>
    </>
  );
}