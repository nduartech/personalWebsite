import App from "./App";
import { render } from 'solid-js/web';
import singleSpaSolid from '@nathanld/single-spa-solid';
import { cssLifecycleFactory } from 'vite-plugin-single-spa/ex';

const solidLifecycles = singleSpaSolid({
    solid: {render: render},
    rootComponent: App,
    domElementGetter: () => document.getElementById('app2')
});

const cssLc = cssLifecycleFactory('spa',);

let domEl: HTMLDivElement;
export const bootstrap = [cssLc.bootstrap, (props:any)=> {
    return Promise.resolve().then(()=>{
        domEl = document.createElement('div');
        domEl.id = 'app2';
        domEl.classList.add('animated');
        let root = document.getElementById('root');
        root && root.appendChild(domEl);
        solidLifecycles.bootstrap().then();
    });
}];
export const mount = [cssLc.mount, (props:any) => {
    return Promise.resolve().then(()=>{
        window.requestAnimationFrame(() => domEl.classList.add('bounceInUp'));
        solidLifecycles.mount(props).then();
    });
}];

export const unmount = [cssLc.unmount, (props:any) => {
    return Promise.resolve().then(()=>{
        domEl.classList.remove('animated', 'bounceInUp');
        solidLifecycles.unmount(props).then();
    })
}];