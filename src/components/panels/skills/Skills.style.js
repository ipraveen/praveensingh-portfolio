import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
justify-content: center;

    .item.card {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        width: 250px;
        height: 200px;

        background: white;
        padding: 2rem;
        border-radius: 20px;
        transition: transform 0.3s ease-in;

        &:hover {
            color: white;
            transform: scale(1.1);
            /* background-color: #8183c9;

            h3,
            p {
                color: white;
            } */
        }

        h3 {
            margin-top: 20px;
            color: slategray;
            letter-spacing: 1.6px;
            text-transform: uppercase;
            font-size: 0.9rem;
            font-weight: bold;
        }

        p {
            color: gray;
        }
    }
`;
