import React from 'react';
import dev from 'assets/images/praveen.png';
import * as styles from './avatar.module.scss';
import GlowingRadialFrame from 'components/frames/glowing-radial/GlowingRadialFrame';

const Avatar = () => {
    return (
        <GlowingRadialFrame radius={130} color="white">
            <div className={styles.avatar}>
                <img src={dev} alt="Praveen Singh" />
            </div>
        </GlowingRadialFrame>
    );
};

export default Avatar;
