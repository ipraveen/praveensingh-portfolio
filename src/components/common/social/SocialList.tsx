import React from 'react';
import { YouTube, GitHub, Twitter, LinkedIn } from '@mui/icons-material';

const list = [
    {
        url: 'https://www.youtube.com/channel/UCpWyMAAKdvAUs6nSuelIgOA',
        Icon: YouTube,
        fontSize: 44
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
        {list.map(({ url, Icon, fontSize = 36 }) => (
            <a className="text-gray-100 dark:text-slate-300 mt-4" key={url} target="_blank" href={url}>
                <Icon sx={{ fontSize, color }} />
            </a>
        ))}
    </div>
);

export default SocialList;
