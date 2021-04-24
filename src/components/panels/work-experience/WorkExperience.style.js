import styled from 'styled-components';

export const Wrapper = styled.div`
    .exp-showcase {
        .container {
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .logo {
            display: flex;
            flex-direction: column;

            span{
                color: gray;
            }
        }
        .work-item {
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

            img {
                margin-bottom: 0;
                display: block;
            }

            &:hover {
                transform: scale(1.1);
            }

            // .fas {
            //     color: #17d47f;
            // }

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
