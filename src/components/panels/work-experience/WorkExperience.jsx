import React from 'react';
import * as styles from './workExperience.module.scss';
import { data } from './data';

const Education = () => (
    <div className="container">
        <div className={styles.items}>
            {data.map(({ img, color, alt }, index) => (
                <div key={index} className={styles.item} style={{ backgroundColor: `${color}4a`, animationDelay: `${index}s` }}>
                    <img alt={alt} src={`/images/exp/${img}`}/>
                </div>
            ))}
        </div>
    </div>
);

export default Education;
