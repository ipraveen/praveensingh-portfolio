
import React from 'react';

function BlogPageBanner({ frontmatter }) {
    const { title, date } = frontmatter;
    return (
        <div className="max-w-screen-xl mx-auto py-2 border-0 border-solid border-b-2 border-theme-200 mb-12">
            <div className="flex justify-between">
                <small className="text-gray-600">{date}</small>
            </div>

            <h1 className="text-theme-800 text-5xl my-4">{title}</h1>
        </div>
    );
}

export default BlogPageBanner;
