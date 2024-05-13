/* @refresh reload */
import './index.css';
import 'solid-devtools';
import {LifeCycles, registerApplication, start} from 'single-spa';
import { bootstrap, mount, unmount } from '@nathanld/software-eng';
import { bootstrap as landingBootstrap, mount as landingMount, unmount as landingUnmount } from '@nathanld/landing';
import {render} from "solid-js/web";
import Theme from "./components/Theme";

registerApplication({
  name: '@nathanld/software-eng',
  app: () => new Promise<LifeCycles>(resolve=>resolve({
    bootstrap,
    mount,
    unmount
  })).then(),
  activeWhen: ["/software-engineer"]
});

registerApplication({
  name: '@nathanld/landing',
  app: () => new Promise<LifeCycles>(resolve=>resolve({
    bootstrap:landingBootstrap,
    mount: landingMount,
    unmount: landingUnmount
  })).then(),
  activeWhen: [(location)=>location.pathname.match(/^\/$/) !== null]
});

start();

const root = document.getElementById('theme-root');
if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
      'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() => <Theme />, root!);