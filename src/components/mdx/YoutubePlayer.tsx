import React from 'react';

function YoutubePlayer({ src, title }) {
    return (
        <iframe
            className="w-full aspect-video"
            src={src}
            title={title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
    );
}

export default YoutubePlayer;
