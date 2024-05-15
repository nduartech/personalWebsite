// @ts-ignore
import singleSpaSvelte from "single-spa-svelte";
import App from './App.svelte'

let domEl: HTMLDivElement;
const svelteLifecycles = singleSpaSvelte({
    component: App,
    domElementGetter: () => document.getElementById("app1"),
    intro: true
});

export const bootstrap = (props:any)=> {
    return Promise.resolve().then(()=>{
        domEl = document.createElement('div');
        domEl.id = 'app1';
        domEl.classList.add('animated');
        let root = document.getElementById('root');
        root && root.appendChild(domEl);
        svelteLifecycles.bootstrap(props);
    });
}
export const mount = (props:any) => {
    return Promise.resolve().then(()=>{
        window.requestAnimationFrame(() => domEl.classList.add('bounceInDown'));
        svelteLifecycles.mount(props);
    });
};
export const unmount = (props:any) => {
  return Promise.resolve().then(()=>{
      domEl.classList.remove('animated', 'bounceInDown');
      svelteLifecycles.unmount(props);
  })
};