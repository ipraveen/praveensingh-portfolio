import React from 'react';
import { Link } from 'gatsby';
import Tag from 'components/parts/Tag/Tag';
import AppContainer from 'components/layout-dir/AppContainer';
import Card from 'components/parts/Card';

function BlogList({ data }) {
    return (
        <AppContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            {data.allMdx.nodes.map((node) => {
                const { title, description, date, slug, keys } = node.frontmatter;

                return (
                    <Card
                        key={node.id}
                        className="flex flex-col justify-between"
                    >
                        <div>
                            <Link to={`/blog/${slug}`}>
                                <h1 className="text-xl text-slate-900 dark:text-white my-0"> {title}</h1>
                            </Link>
                            <small className="text-xs text-slate-500 dark:text-slate-300">{date}</small>
                            <p className="text-base text-slate-600 dark:text-slate-400 my-4">{description}</p>
                        </div>

                        <div className="flex gap-2 mb-0 flex-wrap">
                            {keys?.split(',').map((item) => (
                                <Tag key={item} text={item.trim()} />
                            ))}
                        </div>
                    </Card>
                );
            })}
        </AppContainer>
    );
}

export default BlogList;
