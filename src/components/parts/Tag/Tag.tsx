import React from 'react';
import styled from 'styled-components';

const Container = styled.small`
    border-radius: 0.3rem;
    font-size: .7rem;
    vertical-align: middle;
    line-height: 1.2rem;
    padding: 0 .4rem;
`;

interface Props{
    text: string;
}

function Tag({ text }: Props) {
    return (
        <Container className="bg-theme-500 text-white  uppercase grid place-content-center">{text}</Container>
    );
}

export default Tag;
