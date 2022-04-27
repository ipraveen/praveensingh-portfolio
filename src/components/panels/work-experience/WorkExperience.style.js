import styled from 'styled-components';

export const Wrapper = styled.div`
    .exp-showcase {
        .container {
            display: flex;
            justify-content: center;
            gap: 20px;
            flex-wrap: wrap;

            @media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
                flex-wrap: wrap;
                /* flex-direction: column; */
            }
        }

        .logo {
            display: flex;
            flex-direction: column;
            text-align: center;

            span {
                color: gray;
            }

            @media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
                width: 90%;
                display: flex;
            justify-content: center;
            align-items: center;

                img {
                    width: 50%;
                }

                span{
                    font-size: .7rem;
                }
            }
        }
        .work-item {
            display: flex;
            flex: 1 1 auto;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 250px;
            height: 200px;

            background: white;
            padding: 2rem;
            border-radius: 20px;
            transition: transform 0.2s ease-in;

            @media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
                width: 150px;
            }

            img {
                margin-bottom: 0;
                display: block;
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

        .image-wrap {
            width: 120px;
            height: 120px;
            border-radius: 120px;
            display: grid;
            place-content: center;
            img {
                width: 50px;
            }
        }

        .leader {
            .image-wrap {
                background-image: linear-gradient(315deg, #a7dff3 0%, #9ebdfc 74%);
            }
        }

        .ui {
            .image-wrap {
                background-image: linear-gradient(315deg, #ffada2 0%, #ffcfbb 74%);
            }
        }

        .back {
            .image-wrap {
                background-image: linear-gradient(315deg, #ffc58b 0%, #ffebb7 74%);
            }
        }
    }
`;
