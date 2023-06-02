
import React from 'react';

function BlogPageBanner({ frontmatter }) {
    const { title, date, group } = frontmatter;
    return (
        <div className="max-w-screen-xl mx-auto py-2 border-0 border-solid border-b-0 border-theme-200 mb-12">

            <h1 className="text-theme-800 dark:text-slate-200 text-2xl md:text-4xl lg:text-5xl my-4">{title}</h1>
            <div className="flex justify-between">
                <small className="text-gray-600 dark:text-slate-400">{date} | {group}</small>
            </div>
        </div>
    );
}

export default BlogPageBanner;
