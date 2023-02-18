import React from 'react';
import bits from 'assets/images/exp/bits.png';
import jiit from 'assets/images/exp/jiit.png';

const list = [
    {
        degree: 'Master of Science (MS)',
        branch: 'Software System',
        image: bits,
        college: 'Birla Institute of Technology and Science (BITS), Pilani',
        duration: '2011-2013',
    },
    {
        degree: 'Bachelor of Technology (B.Tech)',
        branch: 'Electronics and communication',
        image: jiit,
        college: 'Jaypee Institute of Information Technology (JIIT), Noida',
        duration: '2003-2007',
    },
];

const Education = () => {
    return (
        <div className=" grid grid-cols-1 sm:grid-cols-2 max-w-screen-lg mx-auto">
            {list.map(({ degree, branch, image, college, duration }) => (
                <section key={degree} className="card flex flex-col justify-center items-center text-center">
                    <h1 className='my-0 text-2xl text-theme-800'>{degree}</h1>
                    <h2 className='my-0 text-xl text-theme-500'>{branch}</h2>
                    <img className='my-8' src={image} alt="bits"></img>
                    <h4 className='my-0 text-base text-theme-600'>{college}</h4>
                    <h3 className='my-0 text-base text-theme-500'>{duration}</h3>
                </section>
            ))}
        </div>
    );
};

export default Education;
