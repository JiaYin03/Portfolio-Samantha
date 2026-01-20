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
                Bachelor of Computer Science (Data Analytics)
                <span className="text-[#ADB7BE]"> — CGPA 3.86</span>
            </li>
            <li>
                Diploma in ICT (Data Informatics)
                <span className="text-[#ADB7BE]"> — CGPA 3.89</span>
            </li>
            </ul>
        </div>

        {/* SMK */}
        <div>
            <h3 className="text-xl font-semibold text-white">SMK Pengerang Utama, Johor</h3>
            <ul className="list-disc pl-6 mt-2">
            <li>
                SPM <span className="text-[#ADB7BE]">— 10A</span>
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
            src="/AboutMe.jpg"
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
            I am Sim Sau Yang, a Computer Science (Data Analytics) graduate from Asia Pacific University Malaysia.
            I enjoy working with raw, messy data and transforming it into meaningful insights through data preparation, modelling, and visualisation.

            My experience spans across business intelligence, data validation, dashboard development, and automated reporting. I enjoy uncovering patterns, improving data reliability, and building analytical solutions that support decision-making.

            Outside of work, I enjoy sports and discovering new food spots, and start exploring photography. I love learning new things and continuously challenging myself to grow both personally and professionally.
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
