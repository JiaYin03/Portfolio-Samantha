import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  return (
    <div className="bg-[#111]/40 backdrop-blur-sm rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#222]">
      
      {/* Thumbnail */}
      <div className="relative group">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-52 object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 
                        flex items-center justify-center 
                        opacity-0 group-hover:opacity-100 
                        transition-all duration-300">
          
          <Link
            href={gitUrl || "#"}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full 
                       hover:border-white transition-colors cursor-pointer"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-300 group-hover:text-white" />
            <span className="text-gray-300 group-hover:text-white font-medium">
              View Project
            </span>
          </Link>

        </div>
      </div>

      {/* Content */}
      <div className="p-5 text-white">
        <h5 className="font-semibold text-xl leading-snug mb-2">{title}</h5>
        <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
