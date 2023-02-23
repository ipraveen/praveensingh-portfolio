import React from 'react';
import dev from 'assets/images/praveen.png';

const Avatar = ({ className, size = 'lg' }) => {
    return (
        <div className={`${className} flex flex-col justify-center items-center` }>
            <img
                className={`${
                    size === 'sm' ? 'h-10 outline-1 outline-offset-0' : 'h-36 outline-4 outline-offset-4'
                } outline  block mx-auto rounded-full sm:mx-0 sm:shrink-0 outline-slate-300`}
                src={dev}
                alt="Praveen Singh"
            />
            {
                size === 'lg' &&(
                    <div className='mt-4 flex flex-col justify-center items-center'>
                        <small className='text-slate-50 text-xs'>Principal Engineer, Web Development</small>
                        <small className='text-slate-200 text-xs'>M.S. Computer Science & B.Tech Electronics</small>
                    </div>)
            }
            

        </div>
    );
};

export default Avatar;
