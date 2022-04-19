import React from 'react';
import { Link } from 'gatsby';
import config from 'config/config';

function NavList({ className }) {
    return (
        <div className={`${className}`}>
            <a target="_blank" href={config.socialLinks.youtube} rel="noreferrer">
                iCodingClub
            </a>
            <a target="_blank" href={config.socialLinks.medium} rel="noreferrer">
                Medium
            </a>
            <Link to="/blogs">Blogs</Link>
        </div>
    );
}

export default NavList;
