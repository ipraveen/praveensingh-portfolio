import React from 'react';
import { Link } from 'gatsby';
import Tag from 'components/parts/Tag/Tag';
import AppContainer from 'components/layout-dir/AppContainer';
import Card from 'components/parts/Card';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function BlogList({ data }) {
    return (
        <AppContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
            {data.allMdx.nodes.map((node) => {
                const { title, description, date, slug, keys, cardImage } = node.frontmatter;
                const image = getImage(cardImage);

                return (
                    <Card key={node.id} className="flex flex-col justify-between">
                        <div>
                            <Link to={`/blog/${slug}`}>
                                <h1 className="text-xl font-semibold text-slate-900 dark:text-white my-0"> {title}</h1>
                            </Link>

                            <div className="grid grid-flow-col gap-4 mt-6">
                                <div className="grid-cols-2">
                                    <GatsbyImage image={image} alt={title} />
                                </div>

                                <div className="grid-10">
                                    <small className="text-xs text-slate-500 dark:text-slate-300">{date}</small>
                                    <p className="text-base text-slate-600 dark:text-slate-400 mb-2">{description}</p>

                                    <div className="flex gap-2 mb-0 flex-wrap mt-2">
                                        {keys?.split(',').map((item) => (
                                            <Tag key={item} text={item.trim()} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                );
            })}
        </AppContainer>
    );
}

export default BlogList;
