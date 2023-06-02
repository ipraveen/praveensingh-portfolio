import React from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.scss';
import config from 'config/config';
import SettingsButton from 'components/settings/SettingsButton';
// import Avatar from 'components/panels/avatar/Avatar';

function NavLinks() {
    return (
        <div className={styles.navLinks} as={Link} to="/">
            <a target="_blank" href={config.socialLinks.youtube}>
                <span className='font-theme text-lg'>YouTube</span>
            </a>
             {/*
            <a target="_blank" href={config.socialLinks.medium}>
                Medium
            </a> */}
            <Link to="/blog">  <span className='font-theme text-lg'>Blogs</span></Link>
            <Link to="/profile" title='Click to see my Profile!'>  <span className='font-theme text-lg'>Author</span></Link>

            <SettingsButton />
        </div>
    );
}

export default NavLinks;
