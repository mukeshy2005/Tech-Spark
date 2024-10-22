import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '../components/ui/card.jsx';
import { SiGithub } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ imageUrl, projectUrl, projectName,projectlink}) => {
    return (
        <Card className="max-w-xs border-y-2 glass hover:border-y-green-300 rounded-tr-2xl rounded-tl-2xl shadow-md shadow-lg transition-shadow duration-300 mx-auto">
            <CardHeader>
                <img
                    src={imageUrl}
                    alt={projectName}
                    className="w-full h-36 object-cover rounded-t-lg"
                />
            </CardHeader>
            <CardContent className="p-2">
                <h3 className="text-lg font-bold">{projectName}</h3>
                <p className="mt-1 text-sm">
                    This project showcases the incredible work done by our society. Click the button below to learn more!
                </p>
            </CardContent>
            <CardFooter className="flex flex-row justify-center gap-2 p-2">
                <a
                    href={projectUrl}  // GitHub URL or project link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 text-sm flex items-center"
                >
                    View Project <SiGithub className="ml-2" />
                </a>
                <a
                    href={projectlink}  // Website URL or project link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300 text-sm flex items-center"
                >
                    Website <FaExternalLinkAlt className="ml-2" />
                </a>
            </CardFooter>
        </Card>
    );
};

export default ProjectCard;
