import App from "./App";
import { render } from 'solid-js/web';
import singleSpaSolid from '@nathanld/single-spa-solid';

const solidLifecycles = singleSpaSolid({
    solid: {render: render},
    rootComponent: App,
    domElementGetter: () => document.getElementById('root')
});


export const bootstrap = solidLifecycles.bootstrap;
export const mount = solidLifecycles.mount;
export const unmount = solidLifecycles.unmount;