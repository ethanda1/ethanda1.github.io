"use client";

import { useRouter } from "next/navigation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-between py-2 select-none bg-transparent">
      <div className="flex flex-row ml-5 items-center space-x-4">
        <div
          className="font-light text-2xl text-emerald-700 border-b-2 border-transparent hover:border-emerald-700 transition-[border-color] ease-in-out duration-300 px-3 cursor-pointer"
          onClick={() => router.push("/")}
        >
          Ethan Dai
        </div>
        <div
          className="font-light text-lg text-emerald-700 border-b-2 border-transparent hover:border-emerald-700 transition-[border-color] ease-in-out duration-300 px-3 cursor-pointer"
          onClick={() => router.push("/about")}
        >
          About
        </div>
        <div
          className="font-light text-lg text-emerald-700 border-b-2 border-transparent hover:border-emerald-700 transition-[border-color] ease-in-out duration-300 px-3 cursor-pointer"
          onClick={() => router.push("/experience")}
        >
          Experience
        </div>
        <div
          className="font-light text-lg text-emerald-700 border-b-2 border-transparent hover:border-emerald-700 transition-[border-color] ease-in-out duration-300 px-3 cursor-pointer"
          onClick={() => router.push("/projects")}
        >
          Projects
        </div>
      </div>
      <div className="flex flex-row gap-1 mr-5 items-center ">
        <FaGithub
          className="text-emerald-700 text-4xl  cursor-pointer border-b-2 border-transparent hover:border-emerald-700 transition-[border-color] ease-in-out duration-300 p-1"
          onClick={() => window.open("https://github.com/ethanda1", "_blank")}
        />
        <FaLinkedin
          className="text-emerald-700 text-4xl cursor-pointer border-b-2 border-transparent hover:border-emerald-700 transition-[border-color] ease-in-out duration-300 p-1"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/ethan-dai-0555531b7/",
              "_blank"
            )
          }
        />
      </div>
    </div>
  );
}