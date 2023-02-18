const config = require('./src/config/config');
const path = require("path");

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
    siteMetadata: {
        title: config.defaultTitle,
        description: config.defaultDescription,
        author: config.author,
        siteUrl: 'https://praveensingh.net',
        twitterUsername: 'i_praveensingh',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-sitemap',
        `gatsby-plugin-theme-ui`,
        'gatsby-plugin-offline',
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-sharp`,
        'gatsby-plugin-material-ui',
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
        'gatsby-plugin-postcss',
        `gatsby-plugin-mdx-embed`,
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
    ],
};
