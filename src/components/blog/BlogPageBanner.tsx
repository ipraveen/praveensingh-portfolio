import styled from '@emotion/styled';
import React from 'react';

const Container = styled.div`
    background-color: rgb(246, 246, 246);
    border-bottom-color: rgb(210, 212, 215);
`;

function BlogPageBanner({ frontmatter }) {
    const { title, date, group, description } = frontmatter;
    return (
        <Container>
            <div className="max-w-screen-xl mx-auto py-16 border-0 border-solid border-b-0 border-theme-200 mb-12">
                <label className="text-gray-800 dark:text-slate-400 uppercase text-xs">
                    {group} | {date}
                </label>

                <h1 className="font-semibold dark:text-slate-200 text-2xl md:text-3xl lg:text-4xl my-2">
                    {title}
                </h1>

                <p className="text-gray-500 dark:text-slate-400 mt-6">{description}</p>
            </div>
        </Container>
    );
}

export default BlogPageBanner;
