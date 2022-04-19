import React from 'react';
import Container from '../../common/container/Container';
import NavList from './NavList';
import * as style from './header.module.scss';

function Header() {
    return (
        <Container className={style.header}>
            <div className={style.logo}>
                <h1>
                    PraveenSingh
                    <i>.tech</i>
                </h1>
                <i>toggle</i>
            </div>

            <NavList className={style.navList} />
        </Container>
    );
}

export default Header;
