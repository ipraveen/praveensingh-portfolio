import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import YoutubePlayer from 'components/mdx/YoutubePlayer';
import { Message } from 'theme-ui';
import { BlogPage, BlogContainer } from './Blog.style';
import BlogPageBanner from './BlogPageBanner';

const components = { YoutubePlayer, Message };

function BlogProvider({ frontmatter, children }) {
    return (
        <MDXProvider components={components}>
            <div className="max-w-screen-md mx-auto">
                <BlogPageBanner frontmatter={frontmatter} />
                <BlogContainer>
                    <BlogPage>{children}</BlogPage>
                </BlogContainer>
            </div>
        </MDXProvider>
    );
}

export default BlogProvider;
