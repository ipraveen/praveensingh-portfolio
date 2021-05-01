import styled from 'styled-components';

export const Wrapper = styled.div`
position: relative;
    padding-bottom: 8rem;
    background-size: contain;
    background-position: right top;
    background-repeat: no-repeat;
    background: #c1dcec;
    background-image: radial-gradient(circle farthest-side at 50% 50%,#39abff,#253f6f);
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
        color: ${({ theme }) => (theme === 'light' ? '#fff' : '#fff')};
        animation: slideFromBottom 1s ease-in;
        @media (max-width: 960px) {
            mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
        }

        @media (max-width: 680px) {
            font-size: 30pt;
        }
    }

    h4 {
        margin-bottom: 2rem;
        font-size: 18pt;
        font-weight: normal;
        color: ${({ theme }) => (theme === 'light' ? '#fff' : '#fff')};
        animation: slideFromBottom 1s ease-in;


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

export const WhiteWave = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    height: 8vw;
    margin-top: 0;
    padding-top: 0;
    background-image: url(images/waves-bottom.svg);
    background-position: 50% 100%;
    background-size: cover;
    background-repeat: no-repeat;
 `
