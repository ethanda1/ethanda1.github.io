"use client";

import Navbar from "../Navbar";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const InfoCard = ({ title, content }) => {
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

        <div className="flex flex-col w-full">
          <h2 className="text-xl font-medium text-emerald-700 mb-3">{title}</h2>
          <p className="text-emerald-700/90 font-light leading-relaxed">{content}</p>
        </div>

    </motion.div>
  );
};

const AboutMe = () => {
  const personalInfo = {
    introduction: {
      title: "Hello! 👋",
      content: "I am currently a Junior at the University of Minnesota studying computer science. I enjoy building apps that help the community and also that I am passionate about. I hope to one day build software that will help the world out on a large scale."
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-[#E1F8DC] to-[#ACDDDE] p-4">
        <div className="text-3xl font-medium pt-8 pb-4 flex justify-center text-emerald-700">
          <TypeAnimation
            sequence={['/about', 2000]}
            wrapper="span"
            speed={1}
            className="text-3xl inline-block"
            repeat={Infinity}
          />
        </div>
        
        <motion.div 
          className="max-w-5xl mx-auto mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {Object.values(personalInfo).map((section, index) => (
            <InfoCard
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AboutMe;