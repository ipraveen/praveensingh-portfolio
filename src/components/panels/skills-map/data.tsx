import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const className = 'rounded-full h-10 w-10';

export const groups = [
    {
        name: 'Frontend Skills',
        skills: [
            {
                label: 'JavaScript',
                icon: <StaticImage src="../../../assets/images/skills/js.svg" className={className} alt="" />,
                color: '#d4bc45',
            },
            {
                label: 'React',
                icon: <StaticImage src="../../../assets/images/skills/react.svg" className="h-12 w-14" alt="" />,
                color: '#62dafb',
            },
            {
                label: 'TypeScript',
                icon: <StaticImage src="../../../assets/images/skills/typescript.svg" className={className} alt="" />,
                color: '#2e78c7',
            },
            {
                label: 'Redux & RTK',
                icon: <StaticImage src="../../../assets/images/skills/redux.svg" className="h-12 w-12" alt="" />,
                color: '#7749bd',
            },
            {
                label: 'Jest',
                icon: <StaticImage src="../../../assets/images/skills/jest.svg" className={className} alt="" />,
                color: '#C44218',
            },
            {
                label: 'Cypress',
                icon: <StaticImage src="../../../assets/images/skills/cypress.svg" className={className} alt="" />,
                color: '#44A08E',
            },
        ],
    },
    {
        name: 'Backend Skills',
        skills: [
            {
                label: 'Spring',
                icon: <StaticImage src="../../../assets/images/skills/spring.svg" className={className} alt="" />,
                color: '#63ba35',
            },
            {
                label: 'Java',
                icon: <StaticImage src="../../../assets/images/skills/java.svg" className={className} alt="" />,
                color: '#5482a1',
            },
            {
                label: 'NodeJs',
                icon: <StaticImage src="../../../assets/images/skills/nodejs.svg" className="h-8 w-14" alt="" />,
                color: '#599550',
            },
        ],
    },
    {
        name: 'Cloud',
        skills: [
            {
                label: 'AWS',
                icon: <StaticImage src="../../../assets/images/skills/aws.svg" className="h-8 w-14" alt="" />,
                color: '#ff9a00',
            },
            {
                label: 'Kubernetes',
                icon: <StaticImage src="../../../assets/images/skills/kubernetes.svg" className={className} alt="" />,
                color: '#326ce4',
            },
            {
                label: 'Docker',
                icon: <StaticImage src="../../../assets/images/skills/docker.png" className={className} alt="" />,
                color: '#5482a1',
            },
        ],
    },
];
