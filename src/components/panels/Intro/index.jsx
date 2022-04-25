import React from 'react';
import dev from 'assets/images/praveen.png';
import Header from '../header/Header';
import * as styles from './intro.module.scss';

const Intro = () => {
    return (
        <div className={`${styles.intro}`}>
            <Header />
            <div className="container">
                <div className={styles.introWrapper}>
                    <div className={styles.content}>
                        <h1>Hi, I'm Praveen Singh</h1>
                        <p>
                            I'm a full-stack JavaScript Engineer and Software Architect. I work as a Tech-Lead and have
                            15 years of professional development experience.
                        </p>
                    </div>
                    <div className={styles.avatar}>
                        <img src={dev} alt="Praveen Singh" />
                    </div>
                </div>
                <div className={styles.wave} />
            </div>
        </div>
    );
};

export default Intro;
