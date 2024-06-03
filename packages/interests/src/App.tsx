import {Component} from "solid-js";
import "./index.css";
import Nav from "./components/nav/Nav";
import InterestCard from "./components/InterestCard";
const App: Component = (props: any) => {


    const nav = () => [
        {
            icon: '<svg class="nav w-7 h-7" stroke-width="0.8" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ddf2ff" viewBox="2.55 3.23 18.9 18.22"><path d="M9 21H7C4.79086 21 3 19.2091 3 17V10.7076C3 9.30887 3.73061 8.01175 4.92679 7.28679L9.92679 4.25649C11.2011 3.48421 12.7989 3.48421 14.0732 4.25649L19.0732 7.28679C20.2694 8.01175 21 9.30887 21 10.7076V17C21 19.2091 19.2091 21 17 21H15M9 21V17C9 15.3431 10.3431 14 12 14V14C13.6569 14 15 15.3431 15 17V21M9 21H15" stroke="#ddf2ff" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-5"></path></svg>',
            label: "Home",
            path: "/",
            click: () => {
                setTimeout(function () {
                    let link = document.createElement('a');
                    link.href = "";
                    link.onclick = () => {
                        dispatchEvent(new CustomEvent('navigate', {detail: "/"}));
                    }
                    link.classList.add("hidden");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }, 1000);
                let navClicked = document.querySelector(".transition");
                navClicked && navClicked.classList.add("animated", "bounceOutUp");
            }
        },
        {
            icon: '<svg viewBox="0 0 24 24" class="nav w-7 h-7" stroke-width="0.9" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M6.81815 22L6.81819 19.143C6.66235 17.592 5.63284 16.4165 4.68213 15M14.4545 22L14.4545 20.2858C19.3636 20.2858 18.8182 14.5717 18.8182 14.5717C18.8182 14.5717 21 14.5717 21 12.286L18.8182 8.8576C18.8182 4.28632 15.1094 2.04169 11.1818 2.00068C8.98139 1.97771 7.22477 2.53124 5.91201 3.5" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-10"></path><path d="M13 7L15 9.5L13 12" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-20"></path><path d="M5 7L3 9.5L5 12" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-30"></path><path d="M10 6L8 13" stroke="#ffffff" stroke-width="0.9" stroke-linecap="round" stroke-linejoin="round" class="svg-elem-40"></path></svg>',
            label: "Work",
            path: "/software-engineer",
            click: () => {
                setTimeout(function () {
                    let link = document.createElement('a');
                    link.href = "";
                    link.onclick = () => {
                        dispatchEvent(new CustomEvent('navigate', {detail: "/software-engineer"}));
                    }
                    link.classList.add("hidden");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                }, 1000);
                let navClicked = document.querySelector(".transition");
                navClicked && navClicked.classList.add("animated", "bounceOutUp");
            }
        }
    ];

    const closeModal = (id: string) => {
        let modal = document.getElementById(id);
        setTimeout(()=>document.querySelectorAll(".interest-card").forEach((card)=>{
            card.classList.remove("hidden");
        }),1000);
        modal && modal.setAttribute("transition-style", "out:wipe:bottom-left");
        setTimeout(() => modal && !modal.classList.contains("hidden") && modal.classList.add("hidden"), 1000);
    };

    return (
        <div
            class="bg-[url('./interests-light.svg')] dark:bg-[url('./interests.svg')] bg-cover bg-bottom min-h-screen min-w-screen overflow-y-hidden transition">
            <div
                class="flex h-full max-w-screen">
                <div class="h-full max-h-screen w-full overflow-hidden">
                    <Nav navItems={nav()}></Nav>
                </div>
            </div>
            <div class="h-screen w-screen flex flex-col justify-center items-center">
                <div
                    class="max-h-screen h-full w-9/12 overflow-y-scroll no-scrollbar grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 py-40">
                    <InterestCard name="family" label="Family" imgSrc="/family.svg"></InterestCard>
                    <InterestCard name="basketball" label="Basketball" imgSrc="/basketball.svg"></InterestCard>
                    <InterestCard name="ballroom" label="Ballroom" imgSrc="/ballroom.svg"></InterestCard>
                    <InterestCard name="reading" label="Reading" imgSrc="/reading.svg"></InterestCard>
                    <InterestCard name="camping" label="Camping" imgSrc="/camping.svg"></InterestCard>
                    <InterestCard name="cooking" label="Cooking" imgSrc="/cooking.svg"></InterestCard>
                </div>
            </div>
            <div
                class="hidden absolute h-screen w-full bg-purple-700 dark:bg-purple-950 bg-blend-overlay bg-opacity-75 top-0 dark:bg-blend-overlay dark:bg-opacity-75"
                id="family"
                transition-style="in:wipe:bottom-right">
                <svg class='absolute right-2 top-16 closeModal w-6 h-6 lg:mr-1 ml-1 lg:ml-0' stroke-width='0.8'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='6.31 6.31 11.39 11.39'
                     onClick={(event) => closeModal("family")} cursor="pointer">
                    <path
                        d='M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426'
                        stroke='#ddf2ff' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round'
                        class='svg-elem-4'></path>
                </svg>
            </div>
            <div
                class="hidden absolute h-screen w-full bg-orange-700 dark:bg-orange-950 bg-blend-overlay bg-opacity-75 top-0 dark:bg-blend-overlay dark:bg-opacity-75"
                id="basketball"
                transition-style="in:circle:hesitate">
                <svg class='absolute right-2 top-16 closeModal w-6 h-6 lg:mr-1 ml-1 lg:ml-0' stroke-width='0.8'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='6.31 6.31 11.39 11.39'
                     onClick={(event) => closeModal("basketball")} cursor="pointer">
                    <path
                        d='M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426'
                        stroke='#ddf2ff' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round'
                        class='svg-elem-4'></path>
                </svg>
            </div>
            <div
                class="hidden absolute h-screen w-full bg-red-700 dark:bg-red-950 bg-blend-overlay bg-opacity-75 top-0 dark:bg-blend-overlay dark:bg-opacity-75"
                id="ballroom"
                transition-style="in:diamond:hesitate">
                <svg class='absolute right-2 top-16 closeModal w-6 h-6 lg:mr-1 ml-1 lg:ml-0' stroke-width='0.8'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='6.31 6.31 11.39 11.39'
                     onClick={(event) => closeModal("ballroom")} cursor="pointer">
                    <path
                        d='M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426'
                        stroke='#ddf2ff' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round'
                        class='svg-elem-4'></path>
                </svg>
            </div>
            <div
                class="hidden absolute h-screen w-full bg-yellow-700 dark:bg-yellow-950 bg-blend-overlay bg-opacity-75 top-0 dark:bg-blend-overlay dark:bg-opacity-75"
                id="reading"
                transition-style="in:square:hesitate">
                <svg class='absolute right-2 top-16 closeModal w-6 h-6 lg:mr-1 ml-1 lg:ml-0' stroke-width='0.8'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='6.31 6.31 11.39 11.39'
                     onClick={(event) => closeModal("reading")} cursor="pointer">
                    <path
                        d='M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426'
                        stroke='#ddf2ff' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round'
                        class='svg-elem-4'></path>
                </svg>
            </div>
            <div
                class="hidden absolute h-screen w-full bg-green-700 dark:bg-green-950 bg-blend-overlay bg-opacity-75 top-0 dark:bg-blend-overlay dark:bg-opacity-75"
                id="camping"
                transition-style="in:wipe:cinematic">
                <svg class='absolute right-2 top-16 closeModal w-6 h-6 lg:mr-1 ml-1 lg:ml-0' stroke-width='0.8'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='6.31 6.31 11.39 11.39'
                     onClick={(event) => closeModal("camping")} cursor="pointer">
                    <path
                        d='M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426'
                        stroke='#ddf2ff' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round'
                        class='svg-elem-4'></path>
                </svg>
            </div>
            <div
                class="hidden absolute h-screen w-full bg-pink-700 dark:bg-pink-950 bg-blend-overlay bg-opacity-75 top-0 dark:bg-blend-overlay dark:bg-opacity-75"
                id="cooking"
                transition-style="in:wipe:up">
                <svg class='absolute right-2 top-16 closeModal w-6 h-6 lg:mr-1 ml-1 lg:ml-0' stroke-width='0.8'
                     fill='none'
                     xmlns='http://www.w3.org/2000/svg' color='#ddf2ff' viewBox='6.31 6.31 11.39 11.39'
                     onClick={(event) => closeModal("cooking")} cursor="pointer">
                    <path
                        d='M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426'
                        stroke='#ddf2ff' stroke-width='0.8' stroke-linecap='round' stroke-linejoin='round'
                        class='svg-elem-4'></path>
                </svg>
            </div>
        </div>
    );
};

export default App;
