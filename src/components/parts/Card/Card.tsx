import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    &:hover {
        box-shadow: 0 1px 2px 0 rgb(60 64 67 / 15%), 0 1px 2px 1px rgb(60 64 67 / 10%);
    }
`;
interface Props {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<Props> = ({ className, children }) => {
    return (
        <Container className={`${className} bg-white rounded-md px-6 py-4 border border-gray-200 border-solid  `}>
            {children}
        </Container>
    );
};

export default Card;
