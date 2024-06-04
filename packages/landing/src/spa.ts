// @ts-ignore
import singleSpaSvelte from "single-spa-svelte";
import App from './App.svelte';


let domEl: HTMLDivElement;
const svelteLifecycles = singleSpaSvelte({
    component: App,
    domElementGetter: () => document.getElementById("app1"),
    intro: true
});

export const bootstrap = async (props: any) => {
    await Promise.resolve();
    domEl = document.createElement('div');
    domEl.id = 'app1';
    let root = document.getElementById('root');
    root && root.appendChild(domEl);
    svelteLifecycles.bootstrap(props);
};
export const mount = async (props: any) => {
    await Promise.resolve();
    window.requestAnimationFrame(() => domEl.classList.add('animated','bounceInDown'));
    svelteLifecycles.mount(props);
};
export const unmount = async (props: any) => {
    await Promise.resolve();
    domEl.classList.remove('animated', 'bounceInDown');
    svelteLifecycles.unmount(props);
};