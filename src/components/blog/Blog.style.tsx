import styled from 'styled-components';

export const BlogPage = styled.article`
    iframe {
        margin: 1rem auto;
    }

    h1:first-child{
        margin-top: 0;
    }

    h1 {
        margin: 32px 0;
        color: #14282e;
        font-size: 1.6rem;
        font-weight: 600;

        .dark & {
            color: white;
        }
    }

    h2 {
        margin: 40px 0 20px;
        color: #2b2d38;
        font-size: 1.2rem;
        font-weight: 500;
        .dark & {
            color: white;
        }
    }

    strong {
        font-weight: 700;
        .dark & {
            color: white;
        }
    }

    p, ul, li{
        color: rgb(83, 82, 82);
        line-height: 1.5;
        font-weight: 400;
        font-size: 1rem;
        margin: 1rem 0;
    }

    ul, ol{
        margin: 1rem 0;
        margin-left: 2rem;
    }

    ul{
        list-style-type: disc;
    }

    ol{
        list-style-type: auto;
    }

    li {
        line-height: 1.2rem;

        strong, b{
            color: black;
        }
    }

    pre {
        background-color: #0f172a;
        border-radius: 0.6rem;
        font-size: 0.8rem;
    }
   
`;
