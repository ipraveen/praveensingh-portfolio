import React from 'react';
import styled from 'styled-components';

const Container = styled.small`
    padding: 0.1rem 0.6rem;
    border-radius: 0.3rem;
    font-size: .7rem;
`;

function Tag({ text }) {
    return (
        <Container className="bg-theme-500 text-white  uppercase grid place-content-center">{text}</Container>
    );
}

export default Tag;
