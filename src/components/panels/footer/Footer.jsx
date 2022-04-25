import React from 'react';
import * as styles from './footer.module.scss';
import SocialList from 'components/common/social/SocialList';

const Footer = () => (
    <div className={styles.footer}>
        <div className="container">
            <div className={styles.footerContent}>
                <div className={styles.details}>
                    <span></span>
                    <span>praveensingh.net © All rights are reserved | {new Date().getFullYear()}</span>
                </div>
                <SocialList />
            </div>
        </div>
    </div>
);

export default Footer;
