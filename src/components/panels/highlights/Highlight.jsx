import React from 'react';
import { SkillContainer } from './style';

const Skill = ({ value, label }) => (
    <SkillContainer>
        <h1>{value}</h1>
        <h2>{label}</h2>
    </SkillContainer>
);

export default Skill;
