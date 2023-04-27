import * as React from 'react';
import BlogLayout from 'components/layout-dir/BlogLayout';

import { graphql } from 'gatsby';
import Seo from '../../components/SEO';
import BlogProvider from '../../components/blog/BlogProvider';

const BlogPost = ({ data, children }) => {
    const { frontmatter, tableOfContents } = data.mdx;
    return (
        <BlogLayout>
            <BlogProvider frontmatter={frontmatter} tableOfContents={tableOfContents}>
                {children}
            </BlogProvider>
        </BlogLayout>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMM D, YYYY")
                banner
                description
                keys
                group
            }
            tableOfContents
        }
    }
`;

export const Head = ({ data }) => {
    return <Seo title={`${data.mdx.frontmatter.title} | Blog`} />;
};

export default BlogPost;
