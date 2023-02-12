import React from 'react';
import IntroPanel from 'components/panels/intro-panel/IntroPanel';
import BlogList from 'components/blog/BlogList';
import SectionTitle from 'components/parts/SectionTitile';
import ProfilePageIntro from '../ProfilePage/ProfilePageIntro';

function HomePage({ data }) {
    return (
        <div>
            <IntroPanel mode="sm">
                <ProfilePageIntro />
            </IntroPanel>
            <br />
            <section>
                <SectionTitle>Blogs</SectionTitle>
                <BlogList data={data} />
            </section>
        </div>
    );
}

export default HomePage;
