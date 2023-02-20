import React from 'react';
import dev from 'assets/images/praveen.png';

const Avatar = ({ className, size = 'lg' }) => {
    return (
        <div className={`${className}` }>
            <img
                className={`${
                    size === 'sm' ? 'h-10 outline-1 outline-offset-0' : 'h-36 outline-4 outline-offset-4'
                } outline  block mx-auto rounded-full sm:mx-0 sm:shrink-0 outline-slate-300`}
                src={dev}
                alt="Praveen Singh"
            />
        </div>
    );
};

export default Avatar;
