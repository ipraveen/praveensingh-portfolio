import React from 'react';
import * as styles from './glowingRadialFrame.module.scss';

function GlowingRadialFrame({ children, radius, color }) {
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
                    stroke-width="2"
                    stroke-miterlimit="15"
                    stroke-dasharray="3,16"
                    cx="50%"
                    cy="50%"
                    r={radius - 15}
                />
            </svg>
            <div className={styles.content} style={style}>{children}</div>
        </div>
    );
}

export default GlowingRadialFrame;
