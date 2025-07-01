import React from 'react';
import Avatar from 'components/panels/avatar/Avatar';
import SocialList from 'components/common/social/SocialList';


const defaultIntro = `I'm a <b>Full Stack Engineer</b>, love solving complex engineering problems, and enjoy exploring the system design of large enterprise applications. I'm passionate about <b>Frontend Development, Cloud Engineering, and Microservices.</b>
`;

function HomePageIntro({text = defaultIntro}) {
    return (
        <div className='flex flex-col justify-center text-center  md:flex-row md:text-left p-4 gap-4'>
            <Avatar className="flex justify-center md:w-3/12"/>
            <div className="md:w-9/12">
                <h1 className='font-theme text-white dark:text-slate-200 text-3xl md:text-5xl'>Hi, I'm Praveen Singh</h1>
                <p
                className='text-slate-300 dark:text-slate-400'
                    dangerouslySetInnerHTML={{
                        __html: text,
                    }}
                />
                <SocialList />
            </div>
        </div>
    );
}

export default HomePageIntro;
