import * as React from 'react';
import { useSiteMetadata } from 'hooks';
import siteIcon from 'assets/images/praveen.png';

const SEO = ({ title }) => {
    const { title: defaultTitle, description, siteUrl, twitterUsername } = useSiteMetadata();
    const url = siteUrl; //`${siteUrl}${pathname || ``}`;
    const fulTitle = `${title} | ${defaultTitle}`;
    return (
        <>
            <title>{fulTitle}</title>
            <html lang="en" dir="ltr" />

            <meta name="description" content={description} />
            <meta name="image" content={siteIcon} />

            <meta name="description" content={description} />
            <meta name="twitter:card" content={description} />
            <meta name="twitter:title" content={fulTitle} />
            <meta name="twitter:url" content={url} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={siteIcon} />
            <meta name="twitter:creator" content={twitterUsername} />

            {/**  COLOR SCHEME */}
            <meta name="color-scheme" content="dark light" />

            {/**  OPEN GRAPH PROTOCOL */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fulTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={siteIcon} />
            <meta property="og:url" content={url} />
        </>
    );
};

export default SEO;
