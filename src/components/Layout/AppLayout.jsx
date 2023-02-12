import * as React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = ({ children, hideHeader = false }) => {
    return (
        <div>
            {!hideHeader && <Header transparent={false}/>}
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
