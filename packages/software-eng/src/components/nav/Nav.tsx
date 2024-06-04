import {
  Show,
  For,
  on,
  createEffect,
  createMemo,
  createSignal,
} from "solid-js";
import '../../index.css';
import NavButton from "./NavButton";

function Nav(props:any) {
  const [isClosed, setIsClosed] = createSignal(true);

  const onUpdateFn_0_isClosed__ = createMemo(() => isClosed());
  function onUpdateFn_0() {
    if (isClosed() || !isClosed()) {
      setTimeout(() => {
        document
          .querySelectorAll("svg.nav")
          .forEach((svg) => svg.classList.add("active"));
      }, 300);
      setTimeout(() => {
        document
          .querySelectorAll("p.navIconLabel")
          .forEach((svg) => svg.classList.add("active"));
      }, 300);
    }
  }
  createEffect(on(() => [onUpdateFn_0_isClosed__()], onUpdateFn_0));

  return (
    <div class="flex flex-row md:flex-col items-start justify-start w-full h-fit absolute p-1.5">
      <div class="flex flex-col items-start justify-start w-fit h-fit navDiv mt-0.5 ml-0.5 lg:mt-2 lg:ml-2">
        <Show when={isClosed()}>
          <NavButton
            icon="<svg class='nav w-6 h-6' stroke-width='0.9' fill='none' xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='2.55 4.55 18.9 14.9'><path d='M3 5H21' stroke='#ddf2ff' stroke-width='0.9' stroke-linecap='round' stroke-linejoin='round' class='svg-elem-1'></path><path d='M3 12H21' stroke='#ddf2ff' stroke-width='0.9' stroke-linecap='round' stroke-linejoin='round' class='svg-elem-2'></path><path d='M3 19H21' stroke='#ddf2ff' stroke-width='0.9' stroke-linecap='round' stroke-linejoin='round' class='svg-elem-3'></path></svg>"
            label="Menu"
            onClick={() => {
              document
                .querySelectorAll("svg.nav")
                .forEach((svg) => svg.classList.remove("active"));
              document
                .querySelectorAll("p.navIconLabel")
                .forEach((svg) => svg.classList.remove("active"));
              setTimeout(function () {
                setIsClosed(false);
                let navClosed = new Event("navClosed");
                let navOpened = new Event("navOpened");
                if (!isClosed()) {
                  document.dispatchEvent(navOpened);
                }
                if (isClosed()) {
                  document.dispatchEvent(navClosed);
                }
              }, 300);
            }}
          ></NavButton>
        </Show>
        <ul class="flex flex-row lg:flex-col items-start justify-center w-fit h-fit list-none portrait:space-x-3 landscape:space-x-0 portrait:space-y-0 landscape:space-y-3">
          <Show when={!isClosed()}>
            <NavButton
              icon='<svg class="nav w-7 h-7" viewBox="0 0 24 24" stroke-width="0.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" width="24" height="24"><path d="M5 7H6" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-11"></path><path d="M2 17.7143V6.28571C2 5.02335 2.99492 4 4.22222 4H19.7778C21.0051 4 22 5.02335 22 6.28571V17.7143C22 18.9767 21.0051 20 19.7778 20H4.22222C2.99492 20 2 18.9767 2 17.7143Z" stroke="#ffffff" stroke-width="0.9" class="svg-elem-21"></path><path d="M10 14L12 12M12 12L14 10M12 12L10 10M12 12L14 14" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-31"></path></svg>'
              label="Close"
              onClick={() => {
                document
                    .querySelectorAll("svg.nav")
                    .forEach((svg) => svg.classList.remove("active"));
                document
                    .querySelectorAll("p.navIconLabel")
                    .forEach((svg) => svg.classList.remove("active"));
                setTimeout(function () {
                  setIsClosed(true);
                  let navClosed = new Event("navClosed");
                  let navOpened = new Event("navOpened");
                  if (!isClosed()) {
                    document.dispatchEvent(navOpened);
                  }
                  if (isClosed()) {
                    document.dispatchEvent(navClosed);
                  }
                }, 300);
              }}
            ></NavButton>
            <For each={props.navItems}>
              {(item, _index) => {
                const index = _index();
                return (
                  <NavButton
                    icon={item.icon}
                    label={item.label}
                    path={item.path}
                    onClick={item.click}
                  ></NavButton>
                );
              }}
            </For>
          </Show>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
