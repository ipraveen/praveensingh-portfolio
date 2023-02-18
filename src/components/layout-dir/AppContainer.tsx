import React from 'react';

interface Props{
    className?: string;
    children: React.ReactNode;
}

function AppContainer({ children, className }: Props) {
    return <div className={`${className} max-w-screen-xl mx-auto`}>{children}</div>;
}

export default AppContainer;
