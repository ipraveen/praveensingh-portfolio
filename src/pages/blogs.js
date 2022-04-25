import React from 'react';
import Blogs from '../components/panels/blogs/Blogs';
import { SEO } from 'components/common';

const BlogsPage = () => {
    return (
        <div>
            <SEO />
            <Blogs />
        </div>
    );
};

export default BlogsPage;
