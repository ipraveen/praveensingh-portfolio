import React from 'react';

function AppContainer({ children, className }) {
    return <div className={`${className} max-w-screen-xl mx-auto`}>{children}</div>;
}

export default AppContainer;
