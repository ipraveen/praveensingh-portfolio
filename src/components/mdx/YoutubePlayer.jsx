import React from 'react';

function YoutubePlayer({ src, title }) {
    return (
        <div>
            <h1>Video Tutorial</h1>
            <iframe
                width="800"
                height="450"
                src={src}
                title={title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>
        </div>
    );
}

export default YoutubePlayer;
