import * as React from 'react';
import Footer from './Footer';
import Header from './header-dir/Header';

const BlogLayout = ({ children, showHeader = true }) => {
    return (
        <div>
            {showHeader && <Header />}
            <div className=" dark:bg-slate-800">{children}</div>
            <Footer />
        </div>
    );
};

export default BlogLayout;
