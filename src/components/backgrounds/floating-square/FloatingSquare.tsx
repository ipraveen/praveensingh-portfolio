import React from 'react';
import * as styles from './style.module.scss';

function FloatingSquare() {
    return (
        <div className={styles.animationArea}>
            <ul>
                <li style={{ left: '5%', width: '30px', height: '30px', animationDelay: '0s' }}></li>
                <li style={{ left: '15%', width: '90px', height: '90px', animationDelay: '2s' }}></li>
                <li style={{ left: '20%', width: '75px', height: '75px', animationDelay: '5s' }}></li>
                <li style={{ left: '30%', width: '65px', height: '65px', animationDelay: '4s' }}></li>
                <li style={{ left: '70%', width: '60px', height: '60px', animationDelay: '7s' }}></li>
                <li style={{ left: '80%', width: '80px', height: '80px', animationDelay: '9s' }}></li>
                <li style={{ left: '90%', width: '50px', height: '50px', animationDelay: '12s' }}></li>
                <li style={{ left: '95%', width: '100px', height: '100px', animationDelay: '15s' }}></li>
            </ul>
        </div>
    );
}

export default FloatingSquare;
