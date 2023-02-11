import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import useSiteMetadata from 'hooks/useSiteMetadata';

const Layout = ({ pageTitle, children }) => {
    // const data = useSiteMetadata();

    return (
        <div>
            {/* <header>{data?.site?.siteMetadata.title}</header> */}
            <Link to="/blog">Blog</Link>
            {children}
        </div>
    );
};

export default Layout;
