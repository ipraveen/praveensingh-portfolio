import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import dev from 'assets/images/praveen.png';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Wrapper>
            <Header />
            <IntroWrapper as={Container}>
                <Details theme={theme}>
                    <h1>Praveen K. Singh</h1>
                    <h4>Full Stack JavaScript Engineer and Engineering Lead!</h4>
                </Details>
                <Thumbnail>
                    <img src={dev} alt="I’m John and I’m a JAMStack engineer!" />
                </Thumbnail>
            </IntroWrapper>
        </Wrapper>
    );
};
