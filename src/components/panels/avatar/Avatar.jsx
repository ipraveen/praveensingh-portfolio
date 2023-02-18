import React from 'react';
import dev from 'assets/images/praveen.png';
import tw from "tailwind.macro";

const Avatar = ({ size = 'lg' }) => {
    return (
        <div size={size}>
            <div
                className="block mx-auto rounded-full sm:mx-0 sm:shrink-0"
                css={[size === 'sm' ? tw`h-10` : tw`h-48 `]}
                size={size}
                src={dev}
                alt="Praveen Singh"
            />
        </div>
    );
};

export default Avatar;
