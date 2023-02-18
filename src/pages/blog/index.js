import * as React from 'react';
import { AppLayout } from 'components/layout/Layout';
import { graphql } from 'gatsby';
import SEO from 'components/SEO';
import BlogPage from 'components/pages/BlogPage/BlogPage';

const BlogRoutePage = ({ data }) => {
    return (
        <AppLayout hideHeader={true}>
            <BlogPage data={data} />
        </AppLayout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC } }) {
            nodes {
                frontmatter {
                    date(formatString: "MMM D, YYYY")
                    title
                    description
                    slug
                    keys
                }
                id
                excerpt
            }
        }
    }
`;

export const Head = () => <SEO title="Blogs | praveensingh.net" />;

export default BlogRoutePage;
