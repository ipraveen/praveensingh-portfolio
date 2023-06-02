import React from 'react';
import Card from 'components/parts/Card';
import { StaticImage } from 'gatsby-plugin-image';

const list = [
    {
        degree: 'Master of Science (MS)',
        branch: 'Software System',
        image: <StaticImage className="w-28 h-28 rounded-full my-8" src="../../../assets/images/bits.png" alt="bits" />,
        college: 'Birla Institute of Technology and Science (BITS), Pilani',
        duration: '2011-2013',
    },
    {
        degree: 'Bachelor of Technology (B.Tech)',
        branch: 'Electronics and communication',
        image: <StaticImage className="w-24 h-28 my-8" src="../../../assets/images/jiit.png" alt="bits" />,
        college: 'Jaypee Institute of Information Technology (JIIT), Noida',
        duration: '2003-2007',
    },
];

const Education = () => {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-screen-lg mx-auto">
            {list.map(({ degree, branch, image, college, duration }) => (
                <Card key={degree} className="flex flex-col justify-center items-center text-center">
                    <h1 className="my-0 text-lg text-slate-600 dark:text-slate-200">{degree}</h1>
                    <h2 className="my-0 text-base text-slate-500 dark:text-slate-300">{branch}</h2>
                    <div className='my-4 w-32 h-32 rounded-full  grid place-content-center dark:bg-slate-300'>
                    {image}
                    </div>
                    
                    <h4 className="my-0 text-base text-slate-500 dark:text-slate-400">{college}</h4>
                    <h3 className="my-0 text-sm text-base text-slate-500 dark:text-slate-400">{duration}</h3>
                </Card>
            ))}
        </div>
    );
};

export default Education;
