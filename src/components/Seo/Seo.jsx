import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const Seo = ({ title }) => {
    const data = useStaticQuery(graphql`
        {
            site {
                siteMetadata {
                    title
                    description
                }
            }
        }
    `);

    return (
        <title>
            {title} | {data.site.siteMetadata.title} | {data.site.siteMetadata.description}
        </title>
    );
};

export default Seo;
