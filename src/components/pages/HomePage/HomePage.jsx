import React from 'react';
import IntroPanel from 'components/panels/intro-panel/IntroPanel';
import BlogList from 'components/blog/BlogList';
import SectionTitle from 'components/parts/SectionTitile';
import ProfilePageIntro from '../ProfilePage/ProfilePageIntro';
import Skills from 'components/panels/skills/Skills';

function HomePage({ data }) {
    return (
        <div>
            <IntroPanel mode="sm">
                <ProfilePageIntro />
            </IntroPanel>
            <section>
                <SectionTitle>What I do</SectionTitle>
                <Skills />
            </section>
            <section>
                <SectionTitle>Blogs</SectionTitle>
                <BlogList data={data} />
            </section>
        </div>
    );
}

export default HomePage;
