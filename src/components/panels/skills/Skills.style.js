import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 200px;

        background: white;
        padding: 2rem;
        border-radius: 20px;

        h3 {
            margin: 2rem 0;
            color: slategray;
            letter-spacing: 1.6px;
            text-transform: uppercase;
            font-size: 0.9rem;
            font-weight: bold;
        }

        p {
            margin-top: 2rem;
            color: gray;
            text-align: center;
        }
    }
`;
