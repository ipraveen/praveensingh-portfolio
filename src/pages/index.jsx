import Header from 'components/panels/header/Header';
import React from 'react';
import IntroBanner from 'components/panels/intro-banner/IntroBanner';
import Skills from 'components/panels/skills/Skills';

export default function App() {
    return (
        <div>
            <Header />
            <IntroBanner />
            <Skills />
        </div>
    );
}
