import styled from 'styled-components';

export const Wrapper = styled.div`
    .skills {
        .skills-container {
            display: flex;
            justify-content: center;
            width: 100%;

            .skills-group {
                display: flex;
                flex-direction: column;
                justify-content: center;

                .skills-item {
                    border-radius: 16px;
                    width: 200px;
                    height: 170px;
                    padding: 5px;
                    background: white;
                    margin: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    transition: transform 0.2s ease-in;

                    img {
                        width: 96px;
                    }

                    &:hover {
                        transform: scale(1.1);
                    }
                    b {
                        margin-top: 0.6rem;
                        color: slategray;
                    }
                }
            }
        }
    }
`;
