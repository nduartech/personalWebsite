import { Component } from "solid-js";
import style from "./index.css?inline";
import Nav from "./components/nav/Nav";
import SkillBar from './components/skill/SkillBar';
import skills from "./components/skill/skills";
import Xp from "./components/skill/Xp";

const App: Component = (props: any) => {

    const nav = () => [
        {
            icon: '<svg class="nav w-7 h-7" stroke-width="0.8" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ddf2ff" viewBox="2.55 3.23 18.9 18.22"><path d="M9 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21H15M9 21V17C9 15.3431 10.3431 14 12 14V14C13.6569 14 15 15.3431 15 17V21M9 21H15" stroke="#ddf2ff" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-5"></path></svg>',
            label: "Home",
            path: "/",
            click: () => {
                setTimeout(function () {
                    let link = document.createElement('a');
                    link.onclick = () => {
                        dispatchEvent(new CustomEvent('navigate', {detail: "/"}));
                    }
                    link.classList.add("hidden");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }, 300);
                let navClicked = document.querySelector(".transition");
                navClicked && navClicked.classList.add("animated", "bounceOutUp");
            }
        }, {
            icon: '<svg class="nav w-7 h-7" stroke-width="0.9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff" width="24" height="24"><path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="#ffffff" stroke-width="0.9" stroke-linejoin="round" class="svg-elem-12"></path></svg>',
            label: "Interests",
            path: "/interests",
            click: () => {
                setTimeout(function () {
                    let link = document.createElement('a');
                    link.onclick = () => {
                        dispatchEvent(new CustomEvent('navigate', {detail: "/interests"}));
                    }
                    link.classList.add("hidden");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }, 300);
                let navClicked = document.querySelector(".transition");
                navClicked && navClicked.classList.add("animated", "bounceOutUp");
            }
        }
    ];
    return (
        <div
            id="bgSE" class="h-full w-full bg-[url('https://nduartech.tiiny.site/dist/se-light.svg')] dark:bg-[url('https://nduartech.tiiny.site/dist/se.svg')] bg-cover bg-bottom min-h-screen min-w-screen overflow-y-hidden z-0">
            <div
                class="flex h-full max-w-screen z-0">
                <div class="h-full max-h-screen w-full overflow-hidden z-0 transition">
                    <Nav navItems={nav()}></Nav>
                    <div class="page flex flex-col w-full h-full space-y-10">
                        <div class="page flex flex-row justify-center items-center w-full">
                            <SkillBar skills={skills()}></SkillBar>
                        </div>
                        <div class="page flex flex-col justify-start items-center w-full">
                            <div
                                class="mt-2 flex flex-col md:flex-row justify-center items-center bg-[rgba(_0,_0,_0,_0.55_)] [box-shadow:0_8px_32px_0_rgba(_31,_38,_135,_0.37_)] backdrop-filter backdrop-blur-[14.5px] rounded-[10px] border-[1px] border-[solid] border-[rgba(255,255,255,0.18)] dark:bg-[rgba(_0,_0,_0,_0.7_)] dark:[box-shadow:0_8px_32px_0_rgba(_31,_38,_135,_0.37_)] dark:backdrop-filter dark:backdrop-blur-[14.5px] dark:rounded-[10px] dark:border-[1px] dark:border-[solid] dark:border-[rgba(255,255,255,0.18)] p-5 w-[80vw] h-[85vh] lg:h-[65vh] min-h-fit">
                                <Xp></Xp>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
