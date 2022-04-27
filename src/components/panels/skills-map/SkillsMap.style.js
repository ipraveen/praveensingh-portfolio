import styled from 'styled-components';

export const Wrapper = styled.div`
    .skills {
        .skills-container {
            display: flex;
            justify-content: center;
            width: 100%;
            overflow: hidden;

            @media only screen and (min-device-width: 375px) and (max-device-width: 1200px){ 
                flex-direction: column;
            }

            .skills-group {
                display: flex;
                flex-direction: column;
                justify-content: center;

                @media only screen and (min-device-width: 375px) and (max-device-width: 1200px){ 
                flex-direction: row;
            }

                .skills-item {
                    border-radius: 16px;
                    width: 180px;
                    height: 160px;
                    padding: 2px;
                    background: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    transition: transform 0.2s ease-in;

                    img {
                        width: 72px;
                    }

                    &:hover {
                        transform: scale(1.1);
                    }
                    b {
                        margin-top: 0.6rem;
                        color: slategray;
                    }

                    @media only screen and (min-device-width: 375px) and (max-device-width: 812px){ 
                        width: 120px;
                        height: 100px;
                        text-align: center;

                        img {
                            width: 36px;
                            margin-bottom: .2rem;
                        }

                        b {
                            font-size: .8rem
                        }
                    }
                }
            }
        }
    }
`;
