import React from 'react';
import './src/styles/app.scss';

export const onServiceWorkerUpdateReady = () => window.location.reload(true);

export const wrapRootElement = ({ element }) => <div>{element}</div>;
