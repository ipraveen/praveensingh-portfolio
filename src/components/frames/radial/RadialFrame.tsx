import React from 'react';
import * as styles from './style.module.scss';

function GlowingRadialFrame({ children, radius, color, strokeWidth = '8', strokeDashArray = '1,55' }) {
    const dia = radius * 2;

    const style = {
        width: `${dia + 20}px`,
        height: `${dia + 20}px`,
    };
    return (
        <div className={styles.container} style={style}>
            <svg
                className={styles.svgBackground}
                version="1.1"
                id="Layer_1"
                x="0"
                y="0"
                width="100%"
                height="100%"
                viewBox={`0 0 ${dia} ${dia}`}
            >
                <circle
                    class="rotate"
                    fill="none"
                    stroke={color}
                    stroke-width={strokeWidth}
                    stroke-dasharray={strokeDashArray}
                    stroke-miterlimit="15"
                    cx="50%"
                    cy="50%"
                    r={radius - 15}
                />
            </svg>
            <div className={styles.content} style={style}>
                {children}
            </div>
        </div>
    );
}

export default GlowingRadialFrame;
