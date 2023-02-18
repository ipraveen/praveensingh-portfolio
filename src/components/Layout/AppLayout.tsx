import * as React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './header/Header';

const Container = styled.div``;

const Layout = ({ children, hideHeader = false }) => {
    return (
        <Container>
            {!hideHeader && <Header transparent={false} />}
            <main className="main">{children}</main>
            <Footer />
        </Container>
    );
};

export default Layout;
