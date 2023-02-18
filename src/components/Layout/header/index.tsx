import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import * as styles from './header.module.scss';
import styled, { css } from 'styled-components';
import AppContainer from 'components/layout/AppContainer';

const Container = styled.header`
    ${({ transparent }) =>
        transparent === true
            ? css`
                  background: transparent;
              `
            : css`
                  background: radial-gradient(
                      55.36% 221.46% at 23.59% 28.54%,
                      var(--clr-theme-light) 1.6%,
                      var(--clr-theme-dark) 100%
                  );
              `}
`;

function Header({ transparent }) {
    return (
        <Container transparent={transparent}>
            <AppContainer className="max-w-screen-xl mx-auto">
                <div className={styles.header}>
                    <Logo />
                    <NavLinks />
                </div>
            </AppContainer>
        </Container>
    );
}

export default Header;