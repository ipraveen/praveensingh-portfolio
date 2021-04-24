import React from 'react';
import { Layout } from 'components/theme/Layout';
import { Highlights } from 'components/highlights';
import { Intro } from 'components/landing';

export default () => (
    <Layout>
        <Intro />
        <Highlights />
    </Layout>
);
