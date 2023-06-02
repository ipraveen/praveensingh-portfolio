import React from 'react';
import { groups } from './data';
import GlowingRadialFrame from 'components/frames/glowing-radial/GlowingRadialFrame';
import AppContainer from 'components/layout-dir/AppContainer';

const SkillMap = () => {
    return (
        <AppContainer className="grid grid-cols-2 md:grid-cols-3 mx-auto gap-4 max-w-sm sm:max-w-lg md:max-w-xl">
            {groups.map(({ skills }) =>
                skills.map(({ label, icon, color = '#3c77c9' }, index) => (
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
                ))
            )}
        </AppContainer>
    );
};

export default SkillMap;
