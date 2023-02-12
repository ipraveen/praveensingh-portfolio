import React from 'react';
import styled from 'styled-components';
import Avatar from 'components/panels/avatar/Avatar';

const Container = styled.div`
    padding: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;

    @media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
        flex-direction: column;
        flex-direction: column-reverse;
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
            color: var(--clr-gray-100);
            @media only screen and (min-device-width: 375px) and (max-device-width: 812px) {
                font-size: 0.8rem;
            }
        }
    }
`;

function HomePageIntro() {
    return (
        <Container>
            <div className="content">
            <Avatar />
                <h1>Welcome!</h1>
                <p
                    dangerouslySetInnerHTML={{
                        __html: `Welcome,I'm a <b>Full Stack Engineer</b> with a passion for Frontend Development and large-scale System Design. I have been developing highly scalable, data-driven web applications for <b>15+</b> years and have led multiple full-size development teams as a Tech Lead.`,
                    }}
                />
            </div>
        </Container>
    );
}

export default HomePageIntro;
