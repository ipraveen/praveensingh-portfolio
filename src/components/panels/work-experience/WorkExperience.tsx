import React from 'react';
import * as styles from './workExperience.module.scss';
import { data } from './data';

const WorkExperience = () => (
    <div className="container pt-8">
        <div className={styles.items}>
            {data.map(({ img, color, alt }, index) => (
                <div key={index} className="flex text-center flex-col gap-4 justify-between items-center">
                    <div className={styles.item} style={{ backgroundColor: `${color}4a`, animationDelay: `${index}s` }}>
                        <img alt={alt} src={`/images/exp/${img}`} title={alt} />
                    </div>
                    <span className="text-theme-500 dark:text-slate-400 font-semibold text-sm">{alt}</span>
                </div>
            ))}
        </div>
    </div>
);

export default WorkExperience;
