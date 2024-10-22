import React from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import img from "../../public/images/img.png"; // Import the image
import { Carousel } from "@/components/ui/carousel.jsx"; // Make sure this path is correct

const projects = [
    {
        imageUrl: "https://images.unsplash.com/photo-1643488072086-9d7318c0a04b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        projectUrl: "https://github.com/manisprasad/crypto-verse-2", // Replace with actual URL
        projectName: "Crypto-Verse-2",
        projectlink:"https://crypto-verse-cyan.vercel.app/"
    },
    {
        imageUrl: "https://images.unsplash.com/photo-1542222780-b06f7307d2c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Using local image
        projectUrl: "https://github.com/manisprasad/memorizationGame", // Replace with actual URL
        projectName: "Memorization Game",
    },
    {
        imageUrl: "https://sapient-codelabs.s3.ap-south-1.amazonaws.com/uploads/23604241525128864162.DALL%C3%82%C2%B7E-2023-10-22-17.05.00---Vector-design-of-a-MERN-stack-logo-transforming-into-a-shopping-bag.-The-background-showcases-a-digital-marketplace.-Main-text-%27MERN-Stack-The-Futur.png",
        projectUrl: "https://github.com/Rahulchaudharyji2/E-Commerce", 
        // Replace with actual URL
        projectlink:"",
        projectName: "Awesome Project 3",
    },
    // Add more projects as needed
];

const ShowProjects = () => {
    return (
        <>
            <h1 className="text-4xl gradient-shade text-center pb-2 font-semibold relative">
                Our Projects
            </h1>
            <div className="grid px-2 grid-cols-1 sm:grid-cols-2 mt-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        imageUrl={project.imageUrl}
                        projectUrl={project.projectUrl}
                        projectName={project.projectName}
                        projectlink={project.projectlink}
                    />
                ))}
            </div>
            <Carousel />
        </>
    );
};

export default ShowProjects;
