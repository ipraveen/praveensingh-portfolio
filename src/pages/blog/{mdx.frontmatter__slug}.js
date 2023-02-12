import * as React from 'react';
import { BlogLayout } from 'components/layout';
import { graphql } from 'gatsby';
import Seo from '../../components/SEO';
import BlogProvider from 'components/blog/BlogProvider';

const BlogPost = ({ data, children }) => {
    return (
        <BlogLayout>
            <BlogProvider frontmatter={data.mdx.frontmatter}>{children}</BlogProvider>
        </BlogLayout>
    );
};

export const query = graphql`
    query ($id: String) {
        mdx(id: { eq: $id }) {
            frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
                banner
                subTitle
            }
        }
    }
`;

export const Head = ({ data }) => {
    return <Seo title={`${data.mdx.frontmatter.title} | Blog`} />;
};

export default BlogPost;
