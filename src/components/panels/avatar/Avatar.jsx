import React from 'react';
import dev from 'assets/images/praveen.png';
import tw from "tailwind.macro";

const Avatar = ({ size = 'lg' }) => {
    return (
        <div size={size}>
            <div
                className="block mx-auto rounded-full sm:mx-0 sm:shrink-0  outline-slate-100 outline outline-offset-1"
                css={[size === 'sm' ? tw`h-10` : tw`h-48 outline-offset-1 outline-pink-500`]}
                size={size}
                src={dev}
                alt="Praveen Singh"
            />
        </div>
    );
};

export default Avatar;
