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

        .dark &{
            color: white;
        }
    }

    h2 {
        margin: 40px 0 20px;
        color: #2b2d38;
        font-size: 1.4rem;
        font-weight: 500;
        .dark &{
            color: white;
        }
    }

    strong{
        font-weight: 700; 
        .dark &{
            color: white;
        }
    }

    p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.8rem;
    }

    li{
        line-height: 2rem;
    }

    pre{
        background-color: #0f172a;
        border-radius: .6rem;
        font-size: .8rem;;
    }
`;

