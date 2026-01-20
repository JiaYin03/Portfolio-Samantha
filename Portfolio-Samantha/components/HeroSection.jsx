import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroSection = () => {
  return (
    <main className="py-10 md:py-16 mt-10 md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0 items-center">

        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-7 text-center md:text-left px-4 md:px-0"
        >
          <h1 className="font-extrabold leading-tight">
            {/* Hello, I'm */}
            <span className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
              Hello, I'm
            </span>

            <br />

            {/* Name - now larger on small screens */}
            <span className="text-transparent bg-clip-text 
              text-7xl sm:text-8xl md:text-9xl 
              bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            >
              Sau Yang
            </span>

            <br />

            {/* Typewriter section */}
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              I'm{" "}
              <Typewriter
                options={{ autoStart: true, loop: true }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`<span style="color:#FF77FF">Data Analyst</span>`)
                    .pauseFor(1400)
                    .deleteAll()
                    .typeString(`<span style="color:#9E7BFF">Dashboard Developer</span>`)
                    .pauseFor(1400)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </h1>

          {/* SUBTEXT - RESPONSIVE WIDTH & MARGINS */}
          <p className="text-gray-300 pt-6 text-base sm:text-lg lg:text-xl max-w-xl mx-auto md:mx-0">
            I turn raw data into clear visualisations, reliable models, and meaningful insights.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="#projects"
              className="px-10 py-3 rounded-full border-2 border-indigo-600 hover:bg-violet-600 transition"
            >
              <span className="text-lg sm:text-xl text-white">My Projects</span>
            </Link>

            <Link
              href="https://drive.google.com/file/d/1Tp_oN9r3C8nmfuoYnEMwiFbWFGijb70P/view?usp=sharing"
              className="px-8 py-3 rounded-full border-2 border-pink-500 hover:bg-pink-400 transition"
            >
              <span className="text-lg sm:text-xl text-white">My Resume</span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 md:col-span-5 flex justify-center md:justify-center mt-6 md:mt-0"
        >
          {/* OVAL WRAPPER */}
          <div className="relative w-60 sm:w-72 md:w-80 lg:w-[400px] aspect-[3/4] rounded-[999px] overflow-hidden bg-black">
            <img
              src="/Hero-Section.jpg"
              alt="hero"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </main>
  );
};

export default dynamic(() => Promise.resolve(HeroSection), { ssr: false });
