import React from 'react';
import SocialList from 'components/common/social/SocialList';

const Footer = () => (
    <div className="footer p-8 bg-gray-100 mt-10">
        <div className="container">
                <div className="flex justify-center items-center text-base text-slate-500 w-full">
                    <span>praveensingh.net © All rights are reserved | {new Date().getFullYear()}</span>
                </div>
        </div>
    </div>
);

export default Footer;
