import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
    // Final Year Project
    {
    title: "Predict Target Sales  (FYP)",
    description: "A machine learning project that predicts sales targets for retail stores using historical sales data, deployed using Streamlit.",
    image: "/projects/Sales Forecasting (FYP).png",
    gitUrl: "https://github.com/JiaYin03/Predicting_Sales_Target",
    },

    // ODL Project
    {
    title: "Credit Card Fraud Detection",
    description: "A deep learning project that compares multiple architectures for fraud detection and implements an optimized DNN model achieving the best balance of accuracy, precision, and recall.",
    image: "/projects/Credit Card Fraud Detection.png",
    gitUrl: "https://github.com/JiaYin03/Credit-Card-Fraud-Detection",
    },

    // Power BI Project
    {
    title: "Fusion Bike Sales Dashboard",
    description: "Able to visualize and understand the current and past business performance for the company.",
    image: "/projects/Fusion Bike Company (Power Bi).png",
    gitUrl: "https://github.com/JiaYin03/Fusion-Bike-Sales-Dashboard-Power-Bi-",
    },

    // RTS Project
    {
    title: "Robotic Cup Handling System",
    description: "This project focuses on developing a real-time robotic cup-handling simulation system using Rust.",
    image: "/projects/RTS assm cover.png",
    gitUrl: "https://github.com/JiaYin03/Robotic-Cup-Handling-System",
    },

    // PFDA Project
    {
    title: "Predicting the Furnishing Status within the city",
    description: "This project focuses on Predicting the impact of furnishing status on price in Mont Kiara using R Programming.",
    image: "/projects/PFDA assm cover.png",
    gitUrl: "https://github.com/JiaYin03/Predict-the-furnishing-status-within-the-city",
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


