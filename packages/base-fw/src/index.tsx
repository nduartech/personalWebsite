/* @refresh reload */
import './index.css';
import 'solid-devtools';
import {LifeCycles, registerApplication, start, navigateToUrl} from 'single-spa';
// @ts-ignore
import { bootstrap, mount, unmount } from 'software-eng';
// @ts-ignore
import { bootstrap as landingBootstrap, mount as landingMount, unmount as landingUnmount } from 'landing';
// @ts-ignore
import { bootstrap as interestsBootstrap, mount as interestsMount, unmount as interestsUnmount } from 'interests';
import {render} from "solid-js/web";
import Theme from "./components/Theme";

registerApplication({
  name: 'software-eng',
  app: () => new Promise<LifeCycles>(resolve=>resolve({
    bootstrap,
    mount,
    unmount
  })).then(),
  activeWhen: ["/software-engineer"]
});

registerApplication({
  name: 'interests',
  app: () => new Promise<LifeCycles>(resolve=>resolve({
    bootstrap:interestsBootstrap,
    mount: interestsMount,
    unmount: interestsUnmount
  })).then(),
  activeWhen: ["/interests"]
});

registerApplication({
  name: 'landing',
  app: () => new Promise<LifeCycles>(resolve=>resolve({
    bootstrap:landingBootstrap,
    mount: landingMount,
    unmount: landingUnmount
  })).then(),
  activeWhen: [(location)=>location.pathname === "/"]
});

start();

// @ts-ignore
window.addEventListener('navigate', (event: CustomEvent) => {
    navigateToUrl(event.detail);
});

const root = document.getElementById('theme-root');
if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
      'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <Theme />, root!);