import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import YoutubePlayer from 'components/mdx/YoutubePlayer';
import Tag from 'components/parts/Tag/Tag';
import { Message } from 'theme-ui';
import { BlogPage } from './Blog.style';
import BlogPageBanner from './BlogPageBanner';
import TableOfContents from './TableOfContents';

const components = { YoutubePlayer, Message };

function BlogProvider({ children, frontmatter, tableOfContents }) {
    const {  keys } = frontmatter;
    return (
        <MDXProvider components={components}>
            <BlogPageBanner frontmatter={frontmatter} />
            <div className="grid grid-cols-12 mx-auto max-w-screen-xl gap-2">
                <BlogPage className="col-span-12 lg:col-span-9">{children}</BlogPage>
                <TableOfContents className="hidden lg:block md:col-span-3" items={tableOfContents.items} />
            </div>
            <div className="mx-auto max-w-screen-xl flex gap-2 mb-0">
                    {keys.split(',').map((key) => (
                        <Tag variant = "large" key={key} text={key.trim()} />
                    ))}
                </div>
        </MDXProvider>
    );
}

// className="grid grid-cols-1 mx-auto max-w-screen-md relative"
export default BlogProvider;
