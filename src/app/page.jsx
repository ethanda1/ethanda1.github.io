"use client";

import Navbar from "./Navbar";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center overflow-hidden">
        <div className="flex flex-col w-full max-w-5xl items-center mb-40">
          <div className="flex justify-start w-full max-w-96 mb-5 pl-10">
            <motion.div
              className="font-light flex text-center mt-5 text-emerald-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <TypeAnimation
                sequence={[
                  'Hi 👋, my name is Ethan.',
                  4000,
                ]}
                wrapper="span"
                speed={1}
                className="text-3xl text-emerald-700 block"
                repeat={Infinity}
              />
            </motion.div>
          </div>

          <div className="w-full max-w-300 border-b-2 border-[#ACDDDE]" />

          <motion.div
            className="font-light flex text-center mt-5 text-emerald-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <div className="flex flex-col items-center gap-6">
              I&apos;m fascinated by large-scale, high-impact products as well as apps that have 100M+ installs.

              <button 
                className="flex items-center gap-3 bg-transparent hover:bg-emerald-500 text-emerald-700 font-semibold hover:text-white py-2 px-4 border border-emerald-500 hover:border-transparent rounded w-full max-w-40 select-none"
                onClick={() => router.push('mailto:ethanydai462@gmail.com')}
              >
                <FaEnvelope size={30} />
                Contact Me
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}