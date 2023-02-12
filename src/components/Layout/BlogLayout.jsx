import * as React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

const BlogLayout = ({ children, showHeader = true }) => {
    return (
        <div>
            {showHeader && <Header />}
            <div>{children}</div>
            <Footer />
        </div>
    );
};

export default BlogLayout;
