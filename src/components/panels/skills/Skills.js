import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './skills.module.scss';
import { skills } from './data';

export default () => (
    <div className="container">
        <div className={styles.skills}>
            {skills.map(({ id, type, info, icon, animation }) => (
                <div key={id} className={`card ${styles[animation]} ${styles.item}`}>
                    <h3 className="title">{type}</h3>
                    {/* <FontAwesomeIcon icon={icon} size="4x" /> */}
                    <p className="intro">{info}</p>
                </div>
            ))}
        </div>
    </div>
);
