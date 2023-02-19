import React from 'react';
import { YouTube, GitHub, Twitter, LinkedIn } from '@mui/icons-material';

const list = [
    {
        url: 'https://www.youtube.com/channel/UCpWyMAAKdvAUs6nSuelIgOA',
        Icon: YouTube,
    },
    {
        url: 'https://github.com/ipraveen',
        Icon: GitHub,
    },
    // {
    //     url: 'https://twitter.com/i_praveensingh',
    //     Icon: Twitter,
    // },
    {
        url: 'https://www.linkedin.com/in/praveenkumarsingh84/',
        Icon: LinkedIn,
    },
];

const SocialList = ({ color = 'inherit' }) => (
    <div className="flex gap-4 items-center justify-center md:justify-start">
        {list.map(({ url, Icon }) => (
            <a className=" text-gray-100" key={url} target="_blank" rel="noreferrer" href={url}>
                <Icon sx={{ fontSize: 36, color }} />
            </a>
        ))}
    </div>
);

export default SocialList;
