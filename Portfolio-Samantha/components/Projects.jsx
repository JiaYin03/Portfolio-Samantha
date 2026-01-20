import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
    // Final Year Project
    {
    title: "Debate Analyzer  (FYP)",
    description: "AI system for argument mining and fallacy detection with transformer models DeBERTa, deployed using Streamlit.",
    image: "/projects/DebateAnalyser.png",
    gitUrl: "https://github.com/Sauyang520/debate-analyser-space",
    },

    // Sound Classification
    {
    title: "Musical Instrument Sound Classification",
    description: "A deep learning project that classifies musical instrument sounds using spectrogram-based CNN and sequential BiGRU models.",
    image: "/projects/MusicInstrumentClassification.png",
    gitUrl: "https://github.com/Sauyang520/Music-Instrument-Classification",
    },

    // Visualisation & Analysis
    {
    title: "Data Visualisation & Analysis",
    description: "A collection of dashboards and reports projects built using Power BI and R.",
    image: "/projects/powerbi.png",
    gitUrl: "https://github.com/Sauyang520/My-Analysis",
    },

    // Movie Review Classification
    {
    title: "IMDB Movie Review Classification",
    description: "A neural model BiLSTM built to classify movie reviews into positive or negative sentiment.",
    image: "/projects/classification_ROC.png",
    gitUrl: "https://github.com/Sauyang520/IMDB_classification",
    },
    
    // Database Security Management
    {
    title: "Database Security Management Assignment",
    description: "A complete security design on medical system database.",
    image: "/projects/DatabaseSecurity.png",
    gitUrl: "https://github.com/Sauyang520/Database-Security",
    },
    
    // Hotel Booking System
    {
    title: "ABC Hotel Booking System",
    description: "A hotel management system enabling room reservation, check-in, and admin operations.",
    image: "/projects/ABCHotelBookingSystem.png",
    gitUrl: "https://github.com/Sauyang520/ABCHotelBooking",
    },

    // Food Ordering System
    {
    title: "Doremi Cafeteria Ordering System",
    description: "A digital ordering system designed for school cafeteria operations.",
    image: "/projects/DoremiFoodSystem.png",
    gitUrl: "https://github.com/Sauyang520/DoremiFoodSystem",
    },

    // Furniture System
    {
    title: "Yoyo Furniture Trading System",
    description: "A business management system for furniture trading operations.",
    image: "/projects/YoyoFurniture.png",
    gitUrl: "https://github.com/Sauyang520/Yoyo-Furniture",
    },

    // Chrome Extension
    {
    title: "APU TradingView Extension",
    description: "A Chrome extension for extracting historical and real-time trading data from TradingView.",
    image: "/projects/APUExtension.png",
    gitUrl: "https://github.com/Sauyang520/APU-Extension",
    },

    // Photography Collection
    {
    title: "Photography Collection",
    description: "My random photography collection",
    image: "/projects/Photography.jpg",
    gitUrl: "https://drive.google.com/drive/folders/1TI54Ikzi70cYBvCjZ33_BivbjgJ5cKPo?usp=sharing",
    },
];

const Projects = () => {
  return (
    <div id="projects" className="mt-16">
      {/* Unified Title Style */}
        <h1 className="
        text-4xl 
        font-bold 
        bg-gradient-to-r from-teal-500 to-teal-100 text-transparent bg-clip-text 
        leading-tight 
        pb-0
        mb-10
        ">
        My Projects & Activities
        </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projectData.map((project, index) => (
            <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
            />
        ))}
      </div>
    </div>
  );
};

export default Projects;


