import React from 'react';
import Header from '../header/Header';
import * as styles from './intro.module.scss';
import SocialList from 'components/common/social/SocialList';
import Avatar from 'components/panels/avatar/Avatar';
import FloatingSquare from '../../backgrounds/floating-square/FloatingSquare';

const IntroPanel = () => {
    return (
        <div className={`${styles.intro}`}>
            <FloatingSquare />
            <Header />
            <div className="container">
                <div className={styles.introWrapper}>
                    <div className={styles.content}>
                        <h1>Hi, I'm Praveen Singh</h1>
                        <p>
                            I'm a <b>Full-Stack Engineer</b> and <b>Architect</b> with Frontend and Microservice Design
                            and Development expertise.
                            <br /> I have been developing enterprise-grade, highly scalable, data-driven web
                            applications professionally for <b>15+</b> years and led multiple full-size development
                            teams for&nbsp;
                            <b>8+</b> years as a Tech Lead.
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

export default IntroPanel;
