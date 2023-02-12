import React from 'react';
import { Link } from 'gatsby';
// import config from 'config/config';
import * as styles from './header.module.scss';
import Avatar from 'components/panels/avatar/Avatar';

function NavLinks() {
    return (
        <div className={styles.navLinks} as={Link} to="/">
            {/* <a target="_blank" href={config.socialLinks.youtube}>
                YouTube
            </a>
            <a target="_blank" href={config.socialLinks.medium}>
                Medium
            </a> */}
            <Link to="/blog">Blogs</Link>
            <Link to="/profile" title='Click to see my Profile!'><Avatar size="sm"/></Link>
        </div>
    );
}

export default NavLinks;
