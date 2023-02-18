import React from 'react';

import AppLayout from 'components/layout/AppLayout';
import SEO from 'components/SEO';
import config from 'config/config';
import ProfilePage from 'components/pages/ProfilePage';

const IndexPage = () => (
    <AppLayout hideHeader={true}>
        <ProfilePage />
    </AppLayout>
);

export const Head = () => <SEO title={config.defaultTitle} />;

export default IndexPage;
