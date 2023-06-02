import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';


export const skills = [
    {
        id: 1,
        type: 'Tech Lead',
        info: '15+ Years of Experience',
        icon: <StaticImage  src="./images/leader.jpeg" alt="Tech Lead" />,
    },
    {
        id: 2,
        type: 'Frontend Engineer',
        info: 'JavaScript, TypeScript, React',
        icon: <StaticImage src="./images/frontend.png" alt="Tech Lead" />,
    },
    {
        id: 3,
        type: 'Backend Engineer',
        info: 'Microservices, Spring, NodeJs',
        icon: <StaticImage src="./images/backend.png" alt="Tech Lead" />,
    },
    {
        id: 3,
        type: 'Cloud Engineering',
        info: 'AWS, Kubernetes, Docker',
        icon: <StaticImage src="./images/cloud.jpg" alt="Tech Lead" />,
    },
];
