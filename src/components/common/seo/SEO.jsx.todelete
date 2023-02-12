import React from 'react';
import Helmet from 'react-helmet';
import siteIcon from 'assets/images/praveen.png';
import { url, defaultDescription, defaultTitle } from 'config/config';

export const SEO = ({ title = defaultTitle, description = defaultDescription }) => {
    const descriptionText = description.replace(/(<([^>]+)>)/gi, "");
    return (
        <Helmet>
            <title>{title}</title>
            <html lang="en" dir="ltr" />

            <meta name="description" content={descriptionText} />
            <meta name="image" content={siteIcon} />

            {/**  COLOR SCHEME */}
            <meta name="color-scheme" content="dark light" />

            {/**  OPEN GRAPH PROTOCOL */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={descriptionText} />
            <meta property="og:image" content={siteIcon} />
            <meta property="og:url" content={url} />
        </Helmet>
    );
};
