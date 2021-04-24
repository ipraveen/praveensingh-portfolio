import styled from 'styled-components';

export const Wrapper = styled.div`
    .education {
        .grid {
            grid-auto-rows: auto;
        }

        .item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 280px;
        }

        h1,
        h2,
        h3,
        h4 {
            text-align: center;
        }

        h1 {
            margin: 1px 0;
        }

        h2 {
            font-size: 1.1rem;
        }
        h3 {
            font-size: 1rem;
        }

        h4 {
            font-size: 0.8rem;
        }
    }
`;
