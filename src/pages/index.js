import React from 'react';

import { AppLayout } from 'components/layout';
import SEO from 'components/SEO';
import config from 'config/config';

import { graphql } from 'gatsby';
import HomePage from 'components/pages/HomePage/HomePage';

const IndexPage = ({ data }) => (
    <AppLayout hideHeader={true}>
        <HomePage data={data} />
    </AppLayout>
);

export const query = graphql`
    query {
        allMdx(sort: { frontmatter: { date: DESC } }) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    title
                    slug
                }
                id
                excerpt
            }
        }
    }
`;

export const Head = () => <SEO title="Praveen Singh: full-stack JavaScript Engineer and Web Application Architect" />;

export default IndexPage;
