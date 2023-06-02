import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Avatar = ({ className, size = 'lg' }) => {
    return (
        <div className={`${className} flex flex-col justify-center items-center`}>
            <StaticImage
                className={`${
                    size === 'sm' ? 'w-10 h-10 outline-1 outline-offset-0' : 'w-36 h-36 outline-4 outline-offset-4'
                } outline outline-slate-300 rounded-full sm:mx-0 sm:shrink-0  block mx-auto brightness-110 hover:brightness-110`}
                src="./images/praveen.png"
                alt="Praveen Singh"
            />

            {size === 'lg' && (
                <div className="mt-4 flex flex-col justify-center items-center">
                    <small className="text-slate-100 dark:text-slate-300 text-xs">
                        Principal Engineer, Web Development
                    </small>
                    <small className="text-slate-300 dark:text-slate-400 text-xs">
                        M.S. Computer Science & B.Tech Electronics
                    </small>
                </div>
            )}
        </div>
    );
};

export default Avatar;
