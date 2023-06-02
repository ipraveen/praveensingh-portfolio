import React from 'react';
import * as styles from './skills-map.module.scss';
import { groups } from './data';
import GlowingRadialFrame from 'components/frames/glowing-radial/GlowingRadialFrame';

const SkillMap = () => {
    return (
        <div className="container pt-8">
            <div className={styles.container}>
                {groups.map(({ name, skills }) => (
                    <>
                        <div className={styles.group}>
                            {skills.map(({ label, image, color = '#3c77c9' }, index) => (
                                <div className={styles.item}>
                                    <GlowingRadialFrame
                                        radius={55}
                                        color={color}
                                        strokeWidth="6"
                                        strokeDashArray="1,16"
                                    >
                                        <div className={styles.itemImage} style={{ backgroundColor: `${color}33` }}>
                                            <img src={`/images/skills/${image}`} alt={label}/>
                                        </div>
                                    </GlowingRadialFrame>
                                    <span className='dark:text-slate-400'>{label}</span>
                                </div>
                            ))}
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default SkillMap;
