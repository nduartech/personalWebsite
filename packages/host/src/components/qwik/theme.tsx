import { component$, useSignal } from "@builder.io/qwik";
export const Theme = component$(() => {
  const darkMode = useSignal("dark");
  return (
    <div class="absolute top-0 right-0 z-10">
      <div
        class="dayNight cursor-pointer mt-1 mr-1 lg:mt-2 lg:mr-2 w-fit h-fit z-10"
        id="dayNightButton"
        onClick$={() => {
          const theme = document.documentElement.className;
          const sun = document.getElementById("dayNightSun");
          const moon = document.getElementById("dayNightMoon");
          if (sun && moon) {
            if (theme === "light") {
              document.documentElement.className = "dark";
              localStorage.setItem("theme", "dark");
              sun.classList.remove("hidden");
              setTimeout(() => sun.classList.add("active"), 200);
              moon.classList.replace("active", "hidden");
            } else {
              document.documentElement.className = "light";
              localStorage.setItem("theme", "light");
              moon.classList.remove("hidden");
              setTimeout(() => moon.classList.add("active"), 200);
              sun.classList.replace("active", "hidden");
            }
          }
        }}
      >
        <svg
          class={["w-8", "h-8", darkMode.value === "dark" ? "active" : ""]}
          id="dayNightSun"
          stroke-width="0.9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#ddf2ff"
          viewBox="0.4 0.4 23.2 23.2"
        >
          <path
            class="svg-elem-1"
            d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
            stroke="#ddf2ff"
            stroke-width="0.9"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-2"
            d="M22 12L23 12"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-3"
            d="M12 2V1"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-4"
            d="M12 23V22"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-5"
            d="M20 20L19 19"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-6"
            d="M20 4L19 5"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-7"
            d="M4 20L5 19"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-8"
            d="M4 4L5 5"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            class="svg-elem-9"
            d="M1 12L2 12"
            stroke="#ddf2ff"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <svg
          class={["w-7", "h-7", darkMode.value === "light" ? "active" : ""]}
          id="dayNightMoon"
          stroke-width="0.9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#ddf2ff"
          viewBox="2.55 2.55 18.9 18.9"
        >
          <path
            class="svg-elem-10"
            d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z"
            stroke="#ddf2ff"
            stroke-width="0.9"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
    </div>
  );
});
