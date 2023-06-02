import React from 'react';
import SocialList from 'components/common/social/SocialList';

const Footer = () => (
    <div className="footer p-8 bg-gray-100 dark:bg-gray-800 mt-10">
        <div className="container flex flex-col justify-center items-center">
                <div className="flex justify-center items-center text-base text-slate-500 w-full mb-4">
                    <span>praveensingh.net © All rights are reserved | {new Date().getFullYear()}</span>
                </div>
                <SocialList color="gray"/>
        </div>
    </div>
);

export default Footer;
