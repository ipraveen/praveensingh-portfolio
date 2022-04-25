import React from 'react';
import { Link } from 'gatsby';
import config from 'config/config';
import * as styles from './header.module.scss';

function NavLinks(props) {
    return (
        <div className={styles.navLinks} as={Link} to="/">
            <a target="_blank" href={config.socialLinks.youtube}>
                iCodingClub
            </a>
            <a target="_blank" href={config.socialLinks.medium}>
                Medium
            </a>
            <Link to="/blogs">Blogs</Link>
        </div>
    );
}

export default NavLinks;
