import React from "react";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const EmailSection = () => {
  return (
    <main
      id="contact"
      className="grid md:grid-cols-2 my-16 py-20 gap-10 relative"
    >
      <div className="z-10">
        {/* Title */}
        <h5 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-100 text-transparent bg-clip-text">
          Let's Connect
        </h5>

        {/* Description */}
        <p className="text-[#ADB7BE] mb-6 max-w-md text-justify leading-relaxed">
          I'm always open to new opportunities, collaborations, or meaningful
          conversations. Feel free to reach out — I'll get back to you as soon
          as I can!
        </p>

        {/* Subtitle */}
        <h4 className="text-white font-medium mt-6 mb-3">
          Get in touch through my socials:
        </h4>

        {/* Icons Row */}
        <div className="flex flex-row items-center gap-6 mt-4 text-white">

          {/* GitHub */}
          <Link href="https://github.com/JiaYin03" target="_blank">
            <FaGithub className="h-8 w-8 hover:text-teal-300 transition cursor-pointer" />
          </Link>

          {/* LinkedIn */}
          <Link href="https://www.linkedin.com/in/samantha-kok-jia-yin-865434290/" target="_blank">
            <FaLinkedinIn className="h-8 w-8 hover:text-teal-300 transition cursor-pointer" />
          </Link>

          {/* Email */}
          <Link href="mailto:samanthakokjiayin@gmail.com">
            <EnvelopeIcon className="h-8 w-8 text-white hover:text-teal-300 transition cursor-pointer" />
          </Link>

        </div>
      </div>
    </main>
  );
};

export default EmailSection;
