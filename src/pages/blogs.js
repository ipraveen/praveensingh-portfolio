import React from 'react';
import Blogs from '../components/panels/blogs/Blogs';
import Intro from '../components/panels/intro/Intro';
import { SEO } from '../components/common';

const BlogsPage = () => {
    return (
        <div>
            <SEO />
            <Intro /> <br />
            <Blogs />
        </div>
    );
};

export default BlogsPage;
