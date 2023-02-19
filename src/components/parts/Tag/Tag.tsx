import React from 'react';
import styled from 'styled-components';

const Container = styled.small`
    border-radius: 0.3rem;
    font-size: ${({variant}) => variant === 'small'? '10px': '.8rem'};
    vertical-align: middle;
    padding: ${({variant}) => variant === 'small'? '1px .4rem': '.2rem .8rem'};
    text-align: center;
`;

interface Props{
    text: string;
    variant?: 'large' | 'small';
}

function Tag({ text, variant = 'small' }: Props) {
    return (
        <Container variant={variant} className="bg-gray-500 text-white  uppercase grid place-content-center">{text}</Container>
    );
}

export default Tag;
