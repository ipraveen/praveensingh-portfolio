import React from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';

const Container = tw.div`
grid grid-cols-2 gap-4
`;
const BlogCard = tw.div`
bg-white rounded-md px-6 py-4 border border-gray-200 border-solid
`;

function BlogList({ data }) {
    return (
        <Container className="container">
            {data.allMdx.nodes.map((node) => (
                <BlogCard key={node.id}>
                    <Link to={`/blog/${node.frontmatter.slug}`}>
                        <h1 className="text-xl text-slate-700 my-0"> {node.frontmatter.title}</h1>
                    </Link>

                    <small className="text-sm text-slate-500">{node.frontmatter.date}</small>
                    <p className='text-base text-slate-600 mt-2'>{node.excerpt}</p>
                </BlogCard>
            ))}
        </Container>
    );
}

export default BlogList;
