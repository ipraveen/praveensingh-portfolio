import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as styles from './skills.module.scss';

function Crad({ icon, info, type, style }) {
    return (
        <div className={styles.card} style={style}>
            <h3>{type}</h3>
            <FontAwesomeIcon icon={icon} size="4x" />
            <p className="intro">{info}</p>
        </div>
    );
}

export default Crad;
