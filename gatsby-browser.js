import React from 'react';
import './src/styles/app.scss';
import './src/styles/utils.module.scss';
import './src/styles/components.module.scss';

export const onServiceWorkerUpdateReady = () => window.location.reload(true);

export const wrapRootElement = ({ element }) => <div>{element}</div>;
