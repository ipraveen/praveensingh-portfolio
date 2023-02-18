import React from 'react';
import HomePageIntro from './ProfilePageIntro';
import IntroPanel from 'components/panels/intro-panel/IntroPanel';
import Skills from 'components/panels/skills/Skills';
import Education from 'components/panels/educations/Education';
import SkillsMap from 'components/panels/skills-map/SkillsMap';
import WorkExperience from 'components/panels/work-experience/WorkExperience';
import Certifications from 'components/panels/certifications/Certifications';
import SectionTitle from 'components/parts/SectionTitile';

function ProfilePage({ data }) {
    return (
        <div>
            <IntroPanel mode="sm">
                <HomePageIntro />
            </IntroPanel>
            <br />
            <section>
                <SectionTitle>Skills Summary</SectionTitle>
                <Skills />
            </section>
            <section>
                <SectionTitle>Professional Experience</SectionTitle>
                <WorkExperience />
            </section>
            <section>
                <SectionTitle>Technologies Experience</SectionTitle>
                <SkillsMap />
            </section>
            <section>
                <SectionTitle>Educations</SectionTitle>
                <Education />
            </section>
            <section>
                <SectionTitle>Certifications</SectionTitle>
                <Certifications />
            </section>
        </div>
    );
}

export default ProfilePage;
