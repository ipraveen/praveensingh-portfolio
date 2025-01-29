import React from 'react';
import HomePageIntro from 'components/pages/HomePage/HomePageIntro';
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
                <HomePageIntro
                    text={`I'm a <b>Full Stack Engineer</b>, love solving complex engineering problems, and enjoy exploring the system design of large enterprise applications. 
                            I'm passionate about <b>Frontend Development, Cloud Engineering, and Microservices.</b> <br/> <br/>I've around <b>16+</b> years of Industry experience in developing and designing scalable enterprise applications and the privilege to work for a few best companies in the Industry, like <b>Twilio, Intuit, Canva, and Nokia.</b>`}
                />
            </IntroPanel>
            <div className='flex flex-col gap-12'>
                <section>
                    <SectionTitle>Skills Summary</SectionTitle>
                    <Skills />
                </section>
                <WorkExperience />
                <SkillsMap />
                <section>
                    <SectionTitle>Educations</SectionTitle>
                    <Education />
                </section>
                <section>
                    <SectionTitle>Certifications</SectionTitle>
                    <Certifications />
                </section>
            </div>
        </div>
    );
}

export default ProfilePage;
