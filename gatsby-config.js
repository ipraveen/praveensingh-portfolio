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
        'gatsby-plugin-styled-components',
        'gatsby-plugin-fontawesome-css',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-favicons',
            options: {
                logo: './static/favicon/favicon.png',
                appName: config.defaultTitle,
                background: '#fff',
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    yandex: false,
                    windows: false,
                },
            },
        },
    ],
};
