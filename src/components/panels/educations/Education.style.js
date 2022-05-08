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
            height: 320px;

            
        }

        .item.card {
            &:hover {
                transform: scale(1.03);
            }
        }

        h1,
        h2,
        h3,
        h4 {
            text-align: center;
        }

        h1 {
            margin: 1px 0;
            font-size: 1.4rem;
        }

        h2 {
            font-size: 1rem;
            text-transform: uppercase;
            margin-top: 1rem;
}
            
        }
        h3 {
            font-size: 1rem;
        }

    }
`;
