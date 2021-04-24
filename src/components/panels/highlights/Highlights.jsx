import React from 'react';
import { SkillsContainer } from './style';
import Highlight from './Highlight';
import { Container } from 'components/common';

const Highlights = () => (
    <Container>
        <SkillsContainer>
            <Highlight value={7} label="Work Experience" />
            <Highlight value={75} label="Spotlights" />
            <Highlight value={3} label="Quarter Super Star" />
        </SkillsContainer>
    </Container>
);

export default Highlights;
