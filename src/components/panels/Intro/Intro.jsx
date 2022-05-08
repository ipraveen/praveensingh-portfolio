import React from 'react';
import dev from 'assets/images/praveen.png';
import Header from '../header/Header';
import * as styles from './intro.module.scss';
import SocialList from 'components/common/social/SocialList';
import Avatar from 'components/panels/avatar/Avatar';
import FloatingSquare from '../../backgrounds/floating-square/FloatingSquare';

const Intro = () => {
    return (
        <div className={`${styles.intro}`}>
            <FloatingSquare />
            <Header />
            <div className="container">
                <div className={styles.introWrapper}>
                    <div className={styles.content}>
                        <h1>Hi, I'm Praveen Singh</h1>
                        <p>
                            I'm a full-stack JavaScript Engineer and Web Application Architect. <br />I have been
                            developing enterprise-grade, highly scalable, data-driven web applications professionally
                            for <b>15+</b> years and led multiple full-size development teams for <b>8+</b> years as a
                            Tech Lead.
                        </p>
                        <SocialList />
                    </div>
                        <Avatar />
                </div>
                <div className={styles.wave} />
            </div>
        </div>
    );
};

export default Intro;