import * as React from 'react';
import Footer from './Footer';
import Header from './header/Header';

const BlogLayout = ({ children, showHeader = true }) => {
    return (
        <div>
            {showHeader && <Header />}
            <div className="p-4">{children}</div>
            <Footer />
        </div>
    );
};

export default BlogLayout;
