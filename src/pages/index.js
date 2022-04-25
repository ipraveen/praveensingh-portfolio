import React from 'react';
import Intro from 'components/panels/Intro';
import { SEO } from 'components/common';
import Skills from 'components/panels/skills/Skills';
import Education from 'components/panels/educations/Education';
import SkillsMap from 'components/panels/skills-map/SkillsMap';
import WorkExperience from 'components/panels/work-experience/WorkExperience';
import Certifications from 'components/panels/certifications/Certifications';
import * as styles from './pages.module.scss';
import Footer from 'components/panels/footer/Footer';

const App = () => (
    <div>
        {/* <SEO /> */}
        <Intro /> <br />
        <section>
            <h1 className={styles.sectionTitle}>Skills Summary</h1>
            <Skills />
        </section>
        <section>
            <h1 className={styles.sectionTitle}>Professional Experience</h1>
            <WorkExperience />
        </section>
        <section>
            <h1 className={styles.sectionTitle}>Technologies Experience </h1>
            <SkillsMap />
        </section>
        <section>
            <h1 className={styles.sectionTitle}>Educations</h1>
            <Education />
        </section>
        <section>
            <h1 className={styles.sectionTitle}>Certifications</h1>
            <Certifications />
        </section>
        <Footer />
    </div>
);

export default App;
