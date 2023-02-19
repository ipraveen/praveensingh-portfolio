import React from 'react';
import styled from 'styled-components';

const Container = styled.small`
    border-radius: 0.3rem;
    font-size: 10px;
    vertical-align: middle;
    padding: 1px .4rem;
    text-align: center;
`;

interface Props{
    text: string;
}

function Tag({ text }: Props) {
    return (
        <Container className="bg-gray-500 text-white  uppercase grid place-content-center">{text}</Container>
    );
}

export default Tag;
