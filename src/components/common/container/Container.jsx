import React from 'react';
import * as style from './container.module.scss';

function Container({ children, className = '' }) {
    return <div className={`${className} ${style.container}`}>{children}</div>;
}

export default Container;
