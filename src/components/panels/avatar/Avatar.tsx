import React from 'react';
import dev from 'assets/images/praveen.png';

const Avatar = ({ className, size = 'lg' }) => {
    return (
        <div className={`${className}` }>
            <img
                className={`${
                    size === 'sm' ? 'h-10' : 'h-36'
                } outline-4 outline-offset-1 block mx-auto rounded-full sm:mx-0 sm:shrink-0 outline outline-slate-100`}
                src={dev}
                alt="Praveen Singh"
            />
        </div>
    );
};

export default Avatar;
