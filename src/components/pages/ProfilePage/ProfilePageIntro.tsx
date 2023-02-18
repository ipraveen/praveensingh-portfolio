import React from 'react';

import SocialList from 'components/common/social/SocialList';
import Avatar from 'components/panels/avatar/Avatar';
import styled from 'styled-components';
import AppContainer from 'components/layout/AppContainer';

const Container = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    flex-wrap: wrap;

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
            color: var(--clr-gray-100);
            @media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
                font-size: 0.8rem;
            }
        }
    }
`;

function ProfilePageIntro() {
    return (
        <AppContainer>
            <Container>
                <Avatar />
                <div className="content">
                    <h1 className='mb-2'>Hi, I'm Praveen Singh</h1>
                    <h2> </h2>
                    <p
                        dangerouslySetInnerHTML={{
                            __html: `I'm a <b>Full Stack Engineer</b>, love solving complex engineering problems, and enjoy exploring the system design of large enterprise applications. 
                            I'm passionate about <b>Frontend Development, Cloud Engineering, and Microservices.</b>`,
                        }}
                    />
                    <p
                        dangerouslySetInnerHTML={{
                            __html: `I've around <b>16+</b> years of Industry experience in developing and designing scalable enterprise applications and the privilege to work for a few best companies in the Industry, like <b>Intuit, Canva, and Nokia.</b>`,
                        }}
                    />
                    <SocialList />
                </div>
            </Container>
        </AppContainer>
    );
}

export default ProfilePageIntro;
