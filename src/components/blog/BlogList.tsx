import React from 'react';
import { Link } from 'gatsby';
import Tag from 'components/parts/Tag/Tag';
import AppContainer from 'components/layout/AppContainer';

function BlogList({ data }) {
    return (
        <AppContainer className="grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
            {data.allMdx.nodes.map((node) => {
                const { title, description, date, slug, keys } = node.frontmatter;

                return (
                    <div
                        key={node.id}
                        className="flex flex-col justify-between bg-white rounded-md px-6 py-4 border border-gray-200 border-solid"
                    >
                        <div>
                            <Link to={`/blog/${slug}`}>
                                <h1 className="text-xl text-slate-700 my-0"> {title}</h1>
                            </Link>

                            <small className="text-xs text-slate-500 my-0">{date}</small>
                            <p className="text-base text-slate-600 mt-1">{description}</p>
                        </div>

                        <div className="flex gap-2 mb-0">
                            {keys?.split(',').map((key) => (
                                <Tag key={key} text={key.trim()} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </AppContainer>
    );
}

export default BlogList;
