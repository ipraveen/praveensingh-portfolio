import React from 'react';
import dev from 'assets/images/praveen.png';
import * as styles from './avatar.module.scss';

const Avatar = () => {
    return (
        <div className={styles.avatar}>
            <img src={dev} alt="Praveen Singh" />
        </div>
    );
};

export default Avatar;
