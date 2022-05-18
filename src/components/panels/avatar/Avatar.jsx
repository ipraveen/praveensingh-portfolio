import React from 'react';
import dev from 'assets/images/praveen.png';
import * as styles from './avatar.module.scss';
import RadialFrame from 'components/frames/radial/RadialFrame';

const Avatar = () => {
    return (
        <RadialFrame radius={130} color="white" strokeWidth = '2' strokeDashArray = '2,55'>
            <div className={styles.avatar}>
                <img src={dev} alt="Praveen Singh" />
            </div>
        </RadialFrame>
    );
};

export default Avatar;
