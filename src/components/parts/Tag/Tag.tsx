import React from 'react';
import styled from 'styled-components';

const Container = styled.small`
    /* background-color: #e6f4ea;
    color: #0d652d; */
    /* background-color: #fef7e0;
    color: #b05a00; */
    background-color: #e1ecf4fc;
    color: #39739df5;
    border-radius: 0.3rem;
    font-size: ${({variant}) => variant === 'small'? '11px': '.8rem'};
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
        <Container variant={variant} className="uppercase grid place-content-center">{text}</Container>
    );
}

export default Tag;
