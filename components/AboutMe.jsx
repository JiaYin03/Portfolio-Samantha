import React from "react";
import { useTransition, useState } from "react";
import TabButton from "./TabButton";

// Updated TAB DATA
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-1">
        <li>Power BI & Dashboard Design</li>
        <li>Excel Reporting & Automation</li>
        <li>Data Preparation & ETL</li>
        <li>Data Mining & Modelling</li>
        <li>Database Management</li>
        <li>SQL</li>
        <li>Python</li>
        <li>R</li>
        <li>Java</li>
      </ul>
    ),
  },

  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className="list-disc pl-3">
        <li>Mandarin (Native)</li>
        <li>English (Intermediate)</li>
        <li>Cantonese (Intermediate)</li>
        <li>Malay (Intermediate)</li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
        <div className="space-y-6">

        {/* APU */}
        <div>
            <h3 className="text-xl font-semibold text-white">Asia Pacific University (APU), Kuala Lumpur</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
                BSc in Computer Science specialism in Data Analytics
                <span className="text-[#ADB7BE]"> — CGPA 3.34</span>
            </li>
            <li>
                Foundation in Computing
                <span className="text-[#ADB7BE]"> — CGPA 3.74</span>
            </li>
            </ul>
        </div>

        </div>
    ),
  },
];

const AboutMe = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white grid" id="aboutMe">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:px-12 lg:px-24 py-16 xl-gap-16 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/Samantha's Pic 2.jpeg"
            alt="About Me"
            className="w-64 sm:w-80 md:w-[420px] rounded-2xl object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-100 text-transparent bg-clip-text">
            About Me
          </h1>

          <p className="text-base text-justify lg:text-lg leading-relaxed">
            Hello! I'm Samantha Kok Jia Yin, a Computer Science graduate from Asia Pacific University, specializing in Data Analytics. My passion for data comes from how numbers can reveal patterns and help us understand what might happen next.
          </p>
          <p className="text-base text-justify lg:text-lg leading-relaxed mt-4">
            I love transforming raw data into meaningful insights. There's something satisfying about exploring messy datasets, cleaning them up, and uncovering information that actually helps people make better decisions. For me, data analytics goes beyond just numbers, it's about finding the story they tell and using that to predict better outcomes.
          </p>
          <p className="text-base text-justify lg:text-lg leading-relaxed mt-4">
            During my internship as a Business Intelligence Analyst, I helped transition our reporting from Excel to Power BI. This shift was a game changer since the dashboards updated every three hours, making the data much more accessible and speeding up their decision-making process.
            Outside of work, I'm really into photography. I enjoy being both behind the camera and in front of it as a model. I also love playing badminton. There's nothing quite like the rush of a good match!
          </p>

          {/* Tabs */}
          <div className="flex flex-row flex-wrap mt-8 gap-3">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>

            <TabButton selectTab={() => handleTabChange("languages")} active={tab === "languages"}>
              Languages
            </TabButton>

            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
          </div>

          {/* Tab Content */}
          <div className="mt-8 text-lg">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
