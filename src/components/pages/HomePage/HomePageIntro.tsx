import React from 'react';
import styled from 'styled-components';
import Avatar from 'components/panels/avatar/Avatar';
import SocialList from 'components/common/social/SocialList';

const Container = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    flex-wrap: wrap;

    @media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .content {
        flex: 2;

        @media (max-width: 960px) {
            width: 100%;
            margin-bottom: 2rem;
        }

        h1 {
            margin-bottom: 1rem;
            font-size: 3rem;
            color: var(--clr-white);
            animation: slideFromBottom 1s ease-in;

            @media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
                font-size: 1.8rem;
            }
        }

        p {
            @media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
                font-size: 0.8rem;
            }
        }
    }
`;

function HomePageIntro() {
    return (
        <Container>
            <Avatar />
            <div className="content">
                <h1>Hi, I'm Praveen Singh</h1>
                <h2> </h2>
                <p
                className='text-gray-100'
                    dangerouslySetInnerHTML={{
                        __html: `I'm a <b>Full Stack Engineer</b>, love solving complex engineering problems, and enjoy exploring the system design of large enterprise applications. 
                        I'm passionate about <b>Frontend Development, Cloud Engineering, and Microservices.</b>`,
                    }}
                />
                <SocialList />
            </div>
        </Container>
    );
}

export default HomePageIntro;
