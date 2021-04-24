import React from 'react';
import { SkillsContainer } from './style';
import Highlight from './Highlight';

const Highlights = () => (
    <SkillsContainer>
        <Highlight value={7} label="Work Experience" />
        <Highlight value={75} label="Spotlights" />
        <Highlight value={3} label="Quarter Super Star" />
    </SkillsContainer>
);

export default Highlights;
