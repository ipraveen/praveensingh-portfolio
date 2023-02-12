import React from 'react';
import tw from 'twin.macro';
import { css } from 'styled-components';

const banner = css`
    background: #ffefba; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ffefba, #ffefba); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        #f6f1e2,
        #ffefba
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    h1 {
        color: slategray;
    }

    h2 {
        color: slategray;
    }
`;
const Container = tw.div`
flex flex-col justify-center text-white mx-auto rounded-xl my-10
`;

function BlogPageBanner({ frontmatter }) {
    const { title, subTitle } = frontmatter;
    return (
        <Container className={banner}>
            <h1 className="text-theme-800 text-5xl my-1">{title}</h1>
            <h2 className="text-theme-600 text-xl my-0 font-sans">{subTitle}</h2>
        </Container>
    );
}

export default BlogPageBanner;
