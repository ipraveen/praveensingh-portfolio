import styled from 'styled-components';

export const Wrapper = styled.div`
    .certifications {

        @media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
             flex-direction: column;
            }
        .item {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            height: 240px;
          
            
            img {
                width: 200px;
            }
        }

        h1 {
            margin: 1px 0;
            font-size: 1.1rem;
            margin-top: 1rem;
        }

        h2 {
            font-size: 1rem;
            color: gray;
        }
    }
`;
