import React from 'react';
import dev from 'assets/images/praveen.png';
import tw from 'twin.macro';

const Container = tw.div``;

const AvatarImage = tw.img`
block mx-auto rounded-full sm:mx-0 sm:shrink-0 outline  outline-slate-100 outline outline-offset-1
`;

const Avatar = ({ size = 'lg' }) => {
    return (
        <Container size={size}>
            <AvatarImage
                css={[size === 'sm' ? tw`h-10` : tw`h-48 outline-4 outline-offset-1 outline-pink-500`]}
                size={size}
                src={dev}
                alt="Praveen Singh"
            />
        </Container>
    );
};

export default Avatar;
