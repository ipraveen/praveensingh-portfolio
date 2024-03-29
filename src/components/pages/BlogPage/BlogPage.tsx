import React from 'react';
import IntroPanel from '../../panels/intro-panel/IntroPanel';
import BlogList from 'components/blog/BlogList';
import SectionTitle from 'components/parts/SectionTitile';
import HomePageIntro from 'components/pages/HomePage/HomePageIntro';

function BlogPage({ data }) {
    return (
        <div>
            <IntroPanel mode="sm">
                <HomePageIntro />
            </IntroPanel>
            <br />
            <section>
                <SectionTitle>Blogs</SectionTitle>
                <BlogList data={data} />
            </section>
        </div>
    );
}

export default BlogPage;
