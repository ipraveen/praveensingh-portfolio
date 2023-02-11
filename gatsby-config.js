const config = require('./src/config/config');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
    siteMetadata: {
        title: config.defaultTitle,
        description: config.defaultDescription,
        author: config.author,
        siteUrl: 'https://praveensingh.net',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        `gatsby-plugin-theme-ui`,
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: config.defaultTitle,
                background_color: `#fff`,
                icon: './static/favicon/favicon.png',
            },
        },
        `gatsby-plugin-mdx`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            },
        },
        // {
        //     resolve: `gatsby-plugin-page-creator`,
        //     options: {
        //         path: `${__dirname}/src/blogs`,
        //     },
        // },
    ],
};
