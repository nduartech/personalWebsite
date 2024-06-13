function Theme(props:any) {
    document.addEventListener('DOMContentLoaded', () => {
        const page = document.documentElement;
        const metaTheme = document.querySelector('meta[name="theme-color"]');
        const dayNightButton = document.querySelector("#dayNightButton");
        const dayNightSun = document.querySelector("#dayNightSun");
        const dayNightMoon = document.querySelector("#dayNightMoon");
        const theme = (() => {
            if (typeof window.localStorage && window.localStorage.getItem("theme")) {
                return window.localStorage.getItem("theme");
            } else if (page.dataset.theme) {
                return page.dataset.theme;
            }
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                return "dark";
            }
            return "light";
        })();
        const eventClicked = () => {
            if (
                dayNightButton !== null &&
                dayNightSun !== null &&
                dayNightMoon !== null
            ) {
                const page = document.documentElement;
                const metaTheme = document.querySelector('meta[name="theme-color"]');
                page.classList.contains("dark")
                    ? page.classList.remove("dark")
                    : page.classList.add("dark");
                window.localStorage.setItem(
                    "theme",
                    window.localStorage.getItem("theme") === "light" ? "dark" : "light"
                );
                if (window.localStorage.getItem("theme") === "light") {
                    page.dataset.theme = "light";
                    dayNightSun.classList.contains("active")
                        ? dayNightSun.classList.remove("active")
                        : void 0;
                    setTimeout(function () {
                        dayNightSun.classList.remove("w-8", "h-8");
                        dayNightSun.classList.add("hidden", "w-0", "h-0");
                    }, 300);
                    setTimeout(function () {
                        dayNightMoon.classList.remove("hidden", "w-0", "h-0");
                        dayNightMoon.classList.add("w-7", "h-7");
                        setTimeout(function () {
                            dayNightMoon.classList.contains("active")
                                ? void 0
                                : dayNightMoon.classList.add("active");
                        }, 300);
                    }, 300);
                    if (metaTheme) {
                        metaTheme.setAttribute("content", "#23bcff");
                    }
                } else if (window.localStorage.getItem("theme") === "dark") {
                    page.dataset.theme = "dark";
                    dayNightMoon.classList.contains("active")
                        ? dayNightMoon.classList.remove("active")
                        : void 0;
                    setTimeout(function () {
                        dayNightMoon.classList.remove("w-7", "h-7");
                        dayNightMoon.classList.add("hidden", "w-0", "h-0");
                    }, 300);
                    setTimeout(function () {
                        dayNightSun.classList.remove("hidden", "w-0", "h-0");
                        dayNightSun.classList.add("w-8", "h-8");
                        setTimeout(function () {
                            dayNightSun.classList.contains("active")
                                ? void 0
                                : dayNightSun.classList.add("active");
                        }, 300);
                    }, 300);
                    if (metaTheme) {
                        metaTheme.setAttribute("content", "#012d50");
                    }
                }
            }
        };
        if (
            dayNightButton !== null &&
            dayNightSun !== null &&
            dayNightMoon !== null
        ) {
            if (theme === "light") {
                if (page.classList.contains("dark")) {
                    page.classList.remove("dark");
                    page.dataset.theme = "light";
                    window.localStorage.setItem("theme", theme);
                    if (metaTheme) {
                        metaTheme.setAttribute("content", "#23bcff");
                    }
                }
            } else if (theme === "dark") {
                if (!page.classList.contains("dark")) {
                    page.classList.add("dark");
                    page.dataset.theme = "dark";
                    window.localStorage.setItem("theme", theme);
                    if (metaTheme) {
                        metaTheme.setAttribute("content", "#012d50");
                    }
                }
            }
            if (window.localStorage.getItem("theme") === "light") {
                page.dataset.theme = "light";
                dayNightSun.classList.contains("active")
                    ? dayNightSun.classList.remove("active")
                    : void 0;
                setTimeout(function () {
                    dayNightSun.classList.remove("w-8", "h-8");
                    dayNightSun.classList.add("hidden", "w-0", "h-0");
                }, 300);
                setTimeout(function () {
                    dayNightMoon.classList.remove("hidden", "w-0", "h-0");
                    dayNightMoon.classList.add("w-7", "h-7");
                    setTimeout(function () {
                        dayNightMoon.classList.contains("active")
                            ? void 0
                            : dayNightMoon.classList.add("active");
                    }, 300);
                }, 300);
                if (metaTheme) {
                    metaTheme.setAttribute("content", "#23bcff");
                }
            } else if (window.localStorage.getItem("theme") === "dark") {
                page.dataset.theme = "dark";
                dayNightMoon.classList.contains("active")
                    ? dayNightMoon.classList.remove("active")
                    : void 0;
                setTimeout(function () {
                    dayNightMoon.classList.remove("w-7", "h-7");
                    dayNightMoon.classList.add("hidden", "w-0", "h-0");
                }, 300);
                setTimeout(function () {
                    dayNightSun.classList.remove("hidden", "w-0", "h-0");
                    dayNightSun.classList.add("w-8", "h-8");
                    setTimeout(function () {
                        dayNightSun.classList.contains("active")
                            ? void 0
                            : dayNightSun.classList.add("active");
                    }, 300);
                }, 300);
                if (metaTheme) {
                    metaTheme.setAttribute("content", "#012d50");
                }
            }
            dayNightButton.addEventListener("click", eventClicked);
        }
    });

    return (
        <div class="absolute top-0 right-0 z-50">
            <div
                class="dayNight z-50 cursor-pointer mt-1 mr-1 lg:mt-2 lg:mr-2 w-fit h-fit"
                id="dayNightButton"
            >
                <svg
                    class="w-8 h-8"
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
                    class="w-7 h-7"
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
}

export default Theme;
