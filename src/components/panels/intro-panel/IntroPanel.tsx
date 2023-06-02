import React from 'react';
import Header from '../../layout-dir/header-dir/Header';
import * as styles from './intro.module.scss';

import FloatingSquare from '../../backgrounds/floating-square/FloatingSquare';
import styled from '@emotion/styled';
import wave from 'assets/images/waves-bottom.svg';
import waveDark from 'assets/images/waves-bottom-dark.svg';

interface Props {
    children: React.ReactNode;
}

const Wave = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -10;
    height: 8vw;
    margin-top: 0;
    padding-top: 0;

    background-position: 50% 100%;
    background-size: cover;
    background-repeat: no-repeat;

    background-image: url(${wave});

    .dark & {
        background-image: url(${waveDark});
    }
`;
const IntroPanel = ({ children }: Props) => {
    return (
        <div className={styles.intro}>
            <FloatingSquare />
            <Header transparent={true} />
            <div className="container">
                {children}
                <Wave />
            </div>
        </div>
    );
};

export default IntroPanel;
