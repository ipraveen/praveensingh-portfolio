import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 1.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Brand = styled.div`
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    h1 {
        font-family: monospace;
        font-size: 42px;
        font-weight: 500;
        color: #fff;
        letter-spacing: 0.2rem;
    }

    span {
        color: #8b969c;
        font-size: 1rem;
        font-style: italic;
    }

    @media (max-width: 960px) {
        mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
`;
