import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';

const Navbar = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <Wrapper as={Container}>
            <Brand as={Link} to="/" theme={theme}>
                <h1>
                    praveensingh<span>.net</span>
                </h1>
            </Brand>
            <NavbarLinks desktop />
        </Wrapper>
    );
};

export default Navbar;
