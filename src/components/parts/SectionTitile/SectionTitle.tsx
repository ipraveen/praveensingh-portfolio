import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    text-align: center;
    margin: 2rem 0;
    font-size: 22px;
    line-height: 1.63;
    letter-spacing: 0.5px;
    font-weight: 400;
    color: var(--clr-theme-text-light);
    position: relative;
    padding: .5rem 0;

    &:before {
        width: 40px;
        height: 2px;
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        background-color: #ef4b6c;
        transform: translateX(-50%);
    }
`;

function SectionTitle({ children }) {
    return <Title>{children}</Title>;
}

export default SectionTitle;
