import type { GatsbyConfig } from 'gatsby';
import path from "path";

const config = {
    defaultTitle: 'praveensingh.net',
    defaultDescription: `I'm a <b>Full Stack Engineer</b> with a passion for Frontend Development and large-scale System Design. I have been developing highly scalable, data-driven web applications for <b>15+</b> years and have led multiple full-size development teams as a Tech Lead.`,
    author: 'Praveen Singh',
    url: 'https://praveensingh.net/',
}


const gatsbyConfig: GatsbyConfig = {
    siteMetadata: {
        title: config.defaultTitle,
        description: config.defaultDescription,
        author: config.author,
        siteUrl: 'https://praveensingh.net',
        twitterUsername: 'i_praveensingh',
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        'gatsby-plugin-sass',
        'gatsby-plugin-sitemap',
        `gatsby-plugin-theme-ui`,
        `gatsby-plugin-styled-components`,
        'gatsby-plugin-material-ui',
        `gatsby-transformer-remark`,
        'gatsby-plugin-postcss',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: config.defaultTitle,
                background_color: `#fff`,
                icon: './static/favicon/favicon.png',
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                gatsbyRemarkPlugins: [
                    `gatsby-remark-autolink-headers`,
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                components: path.join(__dirname, 'src/components'),
                apps: path.join(__dirname, 'src/apps'),
                utils: path.join(__dirname, 'src/utils'),
                assets: path.join(__dirname, 'src/assets'),
                hooks: path.join(__dirname, 'src/hooks'),
                config: path.join(__dirname, 'src/config'),
            },
        },
    ],
};

export default gatsbyConfig;
