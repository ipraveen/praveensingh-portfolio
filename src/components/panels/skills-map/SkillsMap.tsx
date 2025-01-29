import React from 'react';
import { skills, Skill } from './data';
import GlowingRadialFrame from 'components/frames/glowing-radial/GlowingRadialFrame';
import AppContainer from 'components/layout-dir/AppContainer';
import SectionTitle from 'components/parts/SectionTitile';

const SkillFrame = ({ label, color, icon }: Skill) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <GlowingRadialFrame radius={55} color={color} strokeWidth="6" strokeDashArray="1,16">
                <div
                    className="grid place-content-center w-20 h-20 rounded-full"
                    style={{ backgroundColor: `${color}33` }}
                >
                    {icon}
                </div>
            </GlowingRadialFrame>
            <span className="text-slate-600 dark:text-slate-400">{label}</span>
        </div>
    );
};

const SkillMap = () => {
    const skillsIterator = skills[Symbol.iterator]();
    const cols = [1, 2, 3, 4, 5];
    return (
        <section>
            <SectionTitle>Technologies Expertise</SectionTitle>
            <AppContainer className="hidden md:flex justify-center gap-8  md:gap-16">
                {cols.map((colIdx) => (
                    <div className="flex flex-col justify-center gap-4  md:gap-8">
                        {skills.map(
                            ({ label, icon, color = '#3c77c9', col }) =>
                                colIdx === col && <SkillFrame label={label} color={color} icon={icon} />
                        )}
                    </div>
                ))}
            </AppContainer>

            <AppContainer className="grid md:hidden grid-cols-2 sm:grid-cols-3">
                {skills.map(({ label, icon, color = '#3c77c9' }) => (
                    <SkillFrame label={label} color={color} icon={icon} />
                ))}
            </AppContainer>

            {/* <AppContainer className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-4 max-w-sm sm:max-w-lg md:max-w-xl">
                {skills.map(({ label, icon, color = '#3c77c9' }, index) => (
                    <div className="flex flex-col justify-center items-center">
                        <GlowingRadialFrame radius={55} color={color} strokeWidth="6" strokeDashArray="1,16">
                            <div
                                className="grid place-content-center w-20 h-20 rounded-full"
                                style={{ backgroundColor: `${color}33` }}
                            >
                                {icon}
                            </div>
                        </GlowingRadialFrame>
                        <span className="text-slate-600 dark:text-slate-400">{label}</span>
                    </div>
                ))}
            </AppContainer> */}
        </section>
    );
};

export default SkillMap;
