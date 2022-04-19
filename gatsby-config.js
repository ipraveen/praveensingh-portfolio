const config = require('./src/config/config');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: config.defaultTitle,
        description: config.defaultDescription,
        author: config.author,
        siteUrl: `https://praveensingh.net`,
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-styled-components',
        `gatsby-plugin-fontawesome-css`,
        `gatsby-plugin-sitemap`,
        // {
        //     resolve: 'gatsby-plugin-favicon',
        //     options: {
        //         logo: './static/favicon/favicon.png',
        //         injectHTML: true,
        //         icons: {
        //             android: true,
        //             appleIcon: true,
        //             appleStartup: true,
        //             coast: false,
        //             favicons: true,
        //             firefox: true,
        //             twitter: false,
        //             yandex: false,
        //             windows: false,
        //         },
        //     },
        // },
        'gatsby-plugin-offline',
    ],
};
