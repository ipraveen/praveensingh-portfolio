import React from 'react';
import IntroPanel from 'components/panels/intro-panel/IntroPanel';
import BlogList from 'components/blog/BlogList';
import SectionTitle from 'components/parts/SectionTitile';
import Skills from 'components/panels/skills/Skills';
import HomePageIntro from './HomePageIntro';

function HomePage({ data }) {
    return (
        <div>
            <IntroPanel mode="sm">
                <HomePageIntro />
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
