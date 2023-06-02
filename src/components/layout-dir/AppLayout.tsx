import * as React from 'react';
import Footer from './Footer';
import Header from './header-dir/Header';


const Layout = ({ children, hideHeader = false }) => {
    return (
        <div className='bg-white dark:bg-slate-900'>
            {!hideHeader && <Header transparent={false} />}
            <main className="main">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
