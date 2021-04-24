import styled from 'styled-components';

export const Wrapper = styled.div`
    padding-bottom: 4rem;
    background-size: contain;
    background-position: right top;
    background-repeat: no-repeat;
    background: #c1dcec;
`;

export const IntroWrapper = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Details = styled.div`
    flex: 1;

    @media (max-width: 960px) {
        width: 100%;
        margin-bottom: 2rem;
    }

    h1 {
        margin-bottom: 2rem;
        font-size: 36pt;
        color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

        @media (max-width: 960px) {
            mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
        }

        @media (max-width: 680px) {
            font-size: 30pt;
        }
    }

    h4 {
        margin-bottom: 2.5rem;
        font-size: 20pt;
        font-weight: normal;
        color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};

        @media (max-width: 960px) {
            mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
        }

        @media (max-width: 680px) {
            font-size: 26pt;
        }
    }
`;

export const Thumbnail = styled.div`
    flex: 1;
    text-align: center;
    img {
        width: 220px;
        margin-left: 60px;
        border: 4px solid hsla(0, 0%, 100%, 100%);
        border-radius: 200px;
    }
`;
