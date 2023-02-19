import React from 'react';
import Header from '../../layout-dir/header-dir/Header';
import * as styles from './intro.module.scss';

import FloatingSquare from '../../backgrounds/floating-square/FloatingSquare';

interface Props{
    children: React.ReactNode;
}
const IntroPanel = ({ children }: Props) => {
    return (
        <div className={styles.intro}>
            <FloatingSquare />
            <Header transparent={true} />
            <div className="container">
                {children}
                <div className={styles.wave} />
            </div>
        </div>
    );
};

export default IntroPanel;
