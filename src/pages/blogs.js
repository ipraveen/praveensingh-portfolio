import React, { useContext } from 'react';
import { Layout } from 'components/theme/Layout';
import Blogs from '../components/panels/blogs/Blogs';
import { Header } from 'components/theme';
import { ThemeContext } from 'providers/ThemeProvider';

export default () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Layout>
            <Header />
            <Blogs />
        </Layout>
    );
};
