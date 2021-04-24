import styled from 'styled-components';

export const Wrapper = styled.div`

display: flex;
  
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
        transition: transform 0.2s ease-in;

        &:hover {
            transform: scale(1.1);
        }

        h3 {
            margin-top: 20px;
            color: slategray;
            letter-spacing: 1.6px;
            text-transform: uppercase;
            font-size: 0.9rem;
            font-weight: bold;
        }
    }
}
`;
