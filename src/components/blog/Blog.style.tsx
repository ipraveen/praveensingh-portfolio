import styled from 'styled-components';

export const BlogPage = styled.article`
    iframe {
        margin: 1rem auto;
    }

    h1 {
        margin: 48px 0 24px;
        color: #14282e;
        font-size: 1.6rem;
        font-weight: 600;
    }

    h2 {
        margin: 40px 0 20px;
        color: #2b2d38;
        font-size: 1.4rem;
        font-weight: 500;
    }

    strong{
        font-weight: 700; 
    }

    p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.8rem;
    }

    li{
        line-height: 2rem;
    }
`;

export const BlogContainer = styled.div`
    /* grid-gap: 3rem;
    display: grid;
    gap: 3rem;
    grid-template-areas: 'main toc';
    grid-template-columns: minmax(0, 18rem) minmax(0, 50rem) minmax(0, 22rem);
    padding-left: 1rem;
    padding-right: 1rem; */
`;
