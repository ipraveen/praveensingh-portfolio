import React from 'react';
import * as styles from './header.module.scss';

function Logo(props) {
    return (
        <div className={styles.logo}>
            <h1>
                praveensingh<span>.net</span>
            </h1>
        </div>
    );
}

export default Logo;
