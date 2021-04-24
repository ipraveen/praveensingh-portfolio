import React from 'react';
import { Layout } from 'components/theme/Layout';
import { Highlights } from 'components/panels/highlights';
import { Intro } from 'components/landing';
import Skills from 'components/panels/skills/Skills'

export default () => (
    <Layout>
        <Intro />
        <Skills />
        <Highlights />
    </Layout>
);
