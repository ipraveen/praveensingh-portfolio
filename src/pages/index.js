import React from 'react';
import { Layout } from 'components/theme/Layout';
// import { Highlights } from 'components/panels/highlights';
import { Intro } from 'components/landing';
import { SEO } from 'components/common';
import Skills from 'components/panels/skills/Skills';
import Education from 'components/panels/educations/Education';
import SkillsMap from 'components/panels/skills-map/SkillsMap';
import WorkExperience from 'components/panels/work-experience/WorkExperience';
import Certifications from 'components/panels/certifications/Certifications';

export default () => (
    <Layout>
        <SEO />
        <Intro /> <br />
        <br />
        <p className="section-title">Skills Summary</p>
        <Skills />
        <br />
        <br />
        <p className="section-title">Professional Experience</p>
        <WorkExperience />
        <br />
        <br />
        <p className="section-title">Technologies Experience </p>
        <SkillsMap />
        <br />
        <br />
        <p className="section-title">Educations</p>
        <Education />
        <br />
        <br />
        <p className="section-title">Certifications</p>
        <Certifications />
        <br />
        <br />
        {/* <Highlights /> */}
    </Layout>
);
