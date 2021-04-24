import React, { useContext } from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <Wrapper desktop={desktop} theme={theme}>
            <Link to="/blogs">Blogs</Link>
            {/* <AnchorLink href="#about">About</AnchorLink>
      <AnchorLink href="#projects">Projects</AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink> */}
            <ToggleTheme />
        </Wrapper>
    );
};

export default NavbarLinks;
