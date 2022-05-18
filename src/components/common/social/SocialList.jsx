import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import * as style from './style.module.scss';

const SocialList = () => (
    <div className={style.list}>
        <a target="_blank" href="https://www.youtube.com/channel/UCpWyMAAKdvAUs6nSuelIgOA">
            <FontAwesomeIcon size="2x" icon={faYoutube} />
        </a>
        <a target="_blank" href="https://github.com/ipraveen">
            <FontAwesomeIcon size="2x" icon={faGithub} />
        </a>
        <a target="_blank" href="https://twitter.com/i_praveensingh">
            <FontAwesomeIcon size="2x" icon={faTwitter} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/praveenkumarsingh84/">
            <FontAwesomeIcon size="2x" icon={faLinkedin} />
        </a>
    </div>
);

export default SocialList;
