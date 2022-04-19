import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import * as style from './style.module.scss';

const SocialList = () => (
    <div className={style.list}>
        <FontAwesomeIcon size="2x" icon={faYoutube} />
        <FontAwesomeIcon size="2x" icon={faGithub} />
        <FontAwesomeIcon size="2x" className={style.icon} icon={faTwitter} />
    </div>
);

export default SocialList;
