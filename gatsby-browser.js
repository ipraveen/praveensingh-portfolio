import './src/styles/app.scss';
import './src/styles/components.module.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



// import { rootWrapper } from "./root-wrapper";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();
//export const onServiceWorkerUpdateReady = () => window.location.reload(true);