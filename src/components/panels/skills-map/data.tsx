import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

const className = 'rounded-full h-10 w-10';
export type Skill = {
    label: string;
    icon: React.ReactNode;
    color: string;
    col?: number;
};

export const skills: Skill[] = [
    {
        label: 'JavaScript',
        icon: <StaticImage src="../../../assets/images/skills/js.svg" className={className} alt="" />,
        color: '#d4bc45',
        col: 3,
    },
    {
        label: 'React',
        icon: <StaticImage src="../../../assets/images/skills/react.svg" className="h-12 w-14" alt="" />,
        color: '#62dafb',
        col: 3,
    },
    {
        label: 'TypeScript',
        icon: <StaticImage src="../../../assets/images/skills/typescript.svg" className={className} alt="" />,
        color: '#2e78c7',
        col: 3,
    },

    {
        label: 'Spring',
        icon: <StaticImage src="../../../assets/images/skills/spring.svg" className={className} alt="" />,
        color: '#63ba35',
        col: 4,
    },
    {
        label: 'Java',
        icon: <StaticImage src="../../../assets/images/skills/java.svg" className={className} alt="" />,
        color: '#5482a1',
        col: 4,
    },
    {
        label: 'NodeJs',
        icon: <StaticImage src="../../../assets/images/skills/nodejs.svg" className="h-8 w-14" alt="" />,
        color: '#599550',
        col: 5,
    },
    {
        label: 'AWS',
        icon: <StaticImage src="../../../assets/images/skills/aws.svg" className="h-8 w-14" alt="" />,
        color: '#ff9a00',
        col: 1,
    },
    {
        label: 'Kubernetes',
        icon: <StaticImage src="../../../assets/images/skills/kubernetes.svg" className={className} alt="" />,
        color: '#326ce4',
        col: 2,
    },
    {
        label: 'Docker',
        icon: <StaticImage src="../../../assets/images/skills/docker.png" className={className} alt="" />,
        color: '#5482a1',
        col: 2,
    },
];

/*

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

*/
