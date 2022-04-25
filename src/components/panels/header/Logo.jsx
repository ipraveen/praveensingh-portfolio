import { Link } from 'gatsby';
import React from 'react';
import * as styles from './header.module.scss';

function Logo(props) {
    return (
        <Link to="/">
            <div className={styles.logo}>
                <h1>
                    praveensingh<span>.net</span>
                </h1>
            </div>
        </Link>
    );
}

export default Logo;
