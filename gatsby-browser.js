import React from 'react';
import './src/styles/app.scss';
import './src/styles/utils.module.scss';
import './src/styles/components.module.scss';
// import { rootWrapper } from "./root-wrapper";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

export const onServiceWorkerUpdateReady = () => window.location.reload(true);

// export const wrapRootElement = ({ element }) => <div>{element}</div>;

// export const wrapPageElement = rootWrapper;