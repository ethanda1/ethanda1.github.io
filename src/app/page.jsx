"use client";

import Navbar from "./Navbar";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center overflow-hidden">
        <div className='flex flex-col w-full max-w-5xl items-center mb-40'>
          <div className="flex justify-start w-full max-w-80 mb-5">
          <motion.div
            className="font-light flex text-center mt-5 text-emerald-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}} 
            transition={{ duration: 2 }}
          >
            <TypeAnimation
              sequence={[
                'Hi, my name is Ethan.',
                4000,
              ]}
              wrapper="span"
              speed={1}
              className="text-3xl text-emerald-700"
              repeat={Infinity}
            />
            </motion.div>
          </div>

          <div className="w-full max-w-300 border-b-2 border-[#ACDDDE]">
          </div>

          <motion.div
            className="font-light flex text-center mt-5 text-emerald-700"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}} 
            transition={{ duration: 3 }}
          >
            I am currently a junior studying Computer Science at the University of Minnesota, and I have an interest in software engineering.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
