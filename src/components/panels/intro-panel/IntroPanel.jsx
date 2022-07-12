import React from 'react';
import Header from '../header/Header';
import * as styles from './intro.module.scss';
import SocialList from 'components/common/social/SocialList';
import Avatar from 'components/panels/avatar/Avatar';
import FloatingSquare from '../../backgrounds/floating-square/FloatingSquare';
import config from 'config/config';

const IntroPanel = () => {
    return (
        <div className={styles.intro}>
            <FloatingSquare />
            <Header />
            <div className="container">
                <div className={styles.introWrapper}>
                    <div className={styles.content}>
                        <h1>Hi, I'm Praveen Singh</h1>
                        <p dangerouslySetInnerHTML={{ __html: config.defaultDescription }} />
                        <SocialList />
                    </div>
                    <Avatar />
                </div>
                <div className={styles.wave} />
            </div>
        </div>
    );
};

export default IntroPanel;
