import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import dev from 'assets/images/praveen.png';
import { Wrapper, IntroWrapper, Details, Thumbnail, WhiteWave } from './styles';

export const Intro = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Wrapper>
            <Header />
            <IntroWrapper as={Container}>
                <Details theme={theme}>
                    <h1>Hi, I'm Praveen Singh</h1>
                    <p>I'm a full-stack JavaScript Engineer and Software Architect. I work as a Tech-Lead and have 15 years of professional development experience.</p>
                </Details>
                <Thumbnail>
                    <img src={dev} alt="Praveen Singh" />
                </Thumbnail>
            </IntroWrapper>
            <WhiteWave />
        </Wrapper>
    );
};
