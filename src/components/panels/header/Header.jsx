import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import * as styles from './header.module.scss';

function Header(props) {
    return (
        <div className="container">
            <div className={styles.header}>
                <Logo />
                <NavLinks />
            </div>
        </div>
    );
}

export default Header;
