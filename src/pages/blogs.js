import React, { useContext } from 'react';
import { Layout } from 'components/theme/Layout';
import Blogs from '../components/panels/blogs/Blogs';
import { Intro } from 'components/landing';
import { ThemeContext } from 'providers/ThemeProvider';
import { SEO } from 'components/common';

export default () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Layout>
            <SEO />
            <Intro />
            <Blogs />
        </Layout>
    );
};
