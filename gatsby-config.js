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
        'gatsby-plugin-fontawesome-css',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: config.defaultTitle,
                background_color: `#fff`,
                icon: './static/favicon/favicon.png',
            },
        },
    ],
};
