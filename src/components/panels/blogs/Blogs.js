import React, { useEffect, useState } from 'react';
import * as style from './style.module.scss';

export default () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://ipraveen.medium.com/feed?t=1618604793`)
            .then((res) => res.json())
            .then((data) => {
                const res = data.items; // This is an array with the content. No feed, no info about author etc..
                const posts = res.filter((item) => item.categories.length > 0); // That's the main trick* !
                setPosts(posts);
            });
    }, []);

    function toText(node) {
        const tag = document.createElement('div');
        tag.innerHTML = node;
        return tag.querySelector('blockquote') ? tag.querySelector('blockquote').innerText : '';
    }

    return (
        <div className="container">
            <div className={style.wrapper}>
                <div className={style.posts}>
                    {posts.map(({ title, content, link, thumbnail }) => (
                        <a target="_blank" href={link} rel="noreferrer">
                            <div className={`card ${style.post}`}>
                                <img alt="" src={thumbnail} className="topImg"></img>
                                <div className={style.postContent}>
                                    <div className="preview">
                                        <h2 className="title">{title}</h2>
                                        <p className="intro">{toText(content)}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
