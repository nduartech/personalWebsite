import App from "./App";
import { render } from 'solid-js/web';
import singleSpaSolid from '@nathanld/single-spa-solid';
import { cssLifecycleFactory } from 'vite-plugin-single-spa/ex';

const cssLc = cssLifecycleFactory('spa', /* optional factory options */);

const solidLifecycles = singleSpaSolid({
    solid: {render: render},
    rootComponent: App,
    domElementGetter: () => document.getElementById('app3')
});
let domEl: HTMLDivElement;
export const bootstrap = (props:any)=> {
    return Promise.resolve().then(()=>{
        domEl = document.createElement('div');
        domEl.id = 'app3';
        let root = document.getElementById('root');
        root && root.appendChild(domEl);
        cssLc.bootstrap(props).then();
        solidLifecycles.bootstrap().then();
    });
};
export const mount = (props:any) => {
    return Promise.resolve().then(()=>{
        window.requestAnimationFrame(() => domEl.classList.add('animated','bounceInUp'));
        cssLc.mount(props).then();
        solidLifecycles.mount(props).then();
    });
};
export const unmount = (props:any) => {
    return Promise.resolve().then(()=>{
        domEl.classList.remove('animated', 'bounceInUp');
        cssLc.unmount(props).then();
        solidLifecycles.unmount(props).then();
    })
};