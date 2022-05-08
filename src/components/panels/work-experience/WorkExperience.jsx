import React from 'react';
import * as styles from './workExperience.module.scss';
import { data } from './data';

const Education = () => (
    <div className="container">
        <div className={styles.items}>
            {data.map(({ img, color, alt }, index) => (
                <div className={styles.item} style={{ backgroundColor: `${color}4a`, animationDelay: `${index}s` }}>
                    <img alt={alt} src={img} />
                </div>
            ))}

            {/* <div className="item card">
                <img alt="Intuit" src="images/exp/intuit.jpeg" />
            </div>
            <div className="item card">
                <img alt="Canva" src="images/exp/canva.png" />
            </div>

            <div className="item card">
                <div className="logo">
                    <img alt="BT" src="images/exp/bt.jpeg" />
                </div>
            </div>

            <div className="item card">
                <div className="logo">
                    <img alt="nokia" src="images/exp/nokia.png" />
                </div>
            </div> */}
        </div>
    </div>
);

export default Education;
