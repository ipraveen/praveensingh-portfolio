import React from 'react';

import AppLayout from 'components/layout-dir/AppLayout';
import SEO from 'components/SEO';

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
                    date(formatString: "MMM DD, YYYY")
                    title
                    cardImage{
                        childImageSharp {
                            gatsbyImageData
                        } 
                    }
                    description
                    slug
                    keys
                    group
                }
                id
                excerpt
            }
        }
    }
`;

export const Head = () => <SEO title="Praveen Singh: Full Stack Engineer & Web Application Architect" />;

export default IndexPage;
