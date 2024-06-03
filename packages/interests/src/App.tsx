import {Component} from "solid-js";
import "./index.css";
import Nav from "./components/nav/Nav";
import InterestCard from "./components/InterestCard";
import InterestPage from "./components/InterestPage";
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
                <InterestPage title="Family"
                              content="As the proud father to a beautiful baby girl and the best dog, a grateful husband to the most incredible woman in the world, and eldest son of supportive and caring parents, I am honored to be part of my family. Everyone has different answers to the question 'What get's you up in the morning? What drives you?' Throughout my life, my family has been my why." icon={()=><svg width="64px" height="64px" stroke-width="0.9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M22 8.86222C22 10.4087 21.4062 11.8941 20.3458 12.9929C17.9049 15.523 15.5374 18.1613 13.0053 20.5997C12.4249 21.1505 11.5042 21.1304 10.9488 20.5547L3.65376 12.9929C1.44875 10.7072 1.44875 7.01723 3.65376 4.73157C5.88044 2.42345 9.50794 2.42345 11.7346 4.73157L11.9998 5.00642L12.2648 4.73173C13.3324 3.6245 14.7864 3 16.3053 3C17.8242 3 19.2781 3.62444 20.3458 4.73157C21.4063 5.83045 22 7.31577 22 8.86222Z" stroke="#ffffff" stroke-width="0.9" stroke-linejoin="round"></path></svg>}>
                </InterestPage>
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
                <InterestPage title="Basketball"
                              content="Favorite Team: Heat, Favorite Player: Dwyane Wade, GOAT: Michael Jordan. Now that that's out of the way, let's dive in. As an Indian growing up in a predominantly Hispanic community, basketball helped me make friends, overcoming language barriers and stereotypes. I can still remember being told not to bother playing, because I was brown. The number of times I got told to go back to my computer and future in tech support. Part of what kept me out for hours every summer was proving those people wrong. Proving I did belong, in my community and on those courts. I also just loved to win, and hated losing enough to wait until I could get back on the court and win again. During my childhood my friends and I stayed out for hours, summer after summer, playing and sometimes beating grown men, who never seemed to take it easy on us. Those were some of the best days of my life. While the summers of basketball have since ended, they left an ember that flares up occassionally, a competitive spirit and will to succeed that burns a bit deeper down."
                                icon={() => <svg width="64px" height="64px" stroke-width="0.9" viewBox="0 0 24 24"
                                                 fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff">
                                    <path
                                        d="M17.7357 20.1916C22.2597 17.0238 23.3592 10.7884 20.1914 6.2643C17.0237 1.74025 10.7882 0.640771 6.26415 3.80855C1.7401 6.97632 0.640621 13.2118 3.8084 17.7358C6.97617 22.2599 13.2116 23.3594 17.7357 20.1916Z"
                                        stroke="#ffffff" stroke-width="0.9" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path d="M17.7357 20.1916L6.26416 3.80853" stroke="#ffffff" stroke-width="0.9"
                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M19.5774 5.47348C15.8066 11.3693 11.069 14.6867 3.27527 16.8884"
                                          stroke="#ffffff" stroke-width="0.9" stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                    <path d="M13.0597 2.05625C13.4732 7.29607 16.4517 11.55 21.7065 14.4052"
                                          stroke="#ffffff" stroke-width="0.9" stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                    <path d="M2.29333 9.59491C7.0757 11.7757 10.0544 16.0294 10.9402 21.9439"
                                          stroke="#ffffff" stroke-width="0.9" stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                </svg>}>
                </InterestPage>
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
                <InterestPage title="Ballroom Dance" content="Coming from a musical family, my parents had us acting, singing, and playing instruments from an early age. And, when I was in the fifth grade my mother 'forced' me to sign up for the ballroom program at my middle school, courtesy of Dancing Classrooms. I was surprised how much fun I had, and when the program ended, I found myself asking to take the lessons the dance company offered in New York (my parents somehow made it work every weekend). I was a shy kid, and I didn't enjoy performing, but I loved learning to dance, and took pride in not being too shabby at it. Years later, I tried out for the ballroom dance team at my university as an undergraduate freshman. It was on that team that I met my wife. And the rest is history." icon={() => <svg class="w-20 h-20" fill="transparent" version="1.1"
                                                                                     id="Layer_1"
                                                                                     xmlns="http://www.w3.org/2000/svg"

                                                                                     viewBox="0 0 256 256"
                                                                                     enable-background="new 0 0 256 256"
                                                                                     stroke="#ffffff" stroke-width="6px"><g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"
                       stroke-width="3.072"></g>
                    <g id="SVGRepo_iconCarrier"> <path
                        d="M87.002,70.047c4.24,10.293,16.021,15.2,26.315,10.96c6.352-2.617,10.643-8.108,12.009-14.347l16.375,4.657l2.249-6.608 l-16.786-11.215l1.627-13.675c0.305-2.567-1.299-4.975-3.785-5.682l-21.375-6.079c-2.486-0.707-5.118,0.497-6.209,2.84 l-5.668,12.175L72.12,44.281l-2.249,6.607l16.784,4.774C85.058,60.178,85.034,65.269,87.002,70.047z M127.515,131.464H103.24 L90.648,85.99c-1.821-8.031-8.992-14.15-17.406-14.15H28.81c-3.065,0-6.129,1.628-7.849,4.309L3.343,106.947 c-2.68,4.299-0.961,9.699,3.257,12.339c3.843,2.397,9.538,0.931,12.329-3.065l15.04-26.115h23.303L28.588,139.57 c-3.346,5.771-3.663,12.812-0.848,18.86l14.36,30.856l-12.663,48.457c-1.77,6.999,2.397,14.018,9.214,15.849 c6.999,1.77,14.008-2.397,15.849-9.214l13.401-53.029c0.718-2.721,0.627-5.947-0.809-8.678l-1.224-2.589l17.204,9.912L66.1,236.236 c-2.468,6.706,0.708,14.362,7.373,16.901c6.766,2.579,14.221-0.819,16.719-7.596l20.744-56.69 c2.569-7.009-0.293-14.827-6.766-18.529l-36.664-20.926l14.342-25.053l5.234,18.492c1.184,4.05,4.898,6.834,9.117,6.834h31.314 c5.065,0.183,8.862-3.65,9.052-8.616C136.739,136.519,132.368,131.908,127.515,131.464z M190.205,60.283 c16.823-6.387,25.937-24.044,22.136-41.086c-0.049,0.876-0.442,1.597-0.804,2.401c-2.273,5.056-8.353,7.364-13.409,5.09 c-0.804-0.362-1.557-0.838-2.195-1.263c-5.544-4.565-13.392-6.16-20.387-3.504c-10.494,3.984-16.014,15.798-11.935,26.542 C167.69,59.206,179.462,64.361,190.205,60.283z M253.942,204.308c0,0-4.046-64.753-29.837-88.016 c-0.17-0.153-0.337-0.295-0.506-0.443V69.487l21.414-9.347c5.463-2.386,8.391-8.52,6.81-14.269L241.496,8.319 c-1.258-4.578-5.99-7.268-10.569-6.01c-4.578,1.259-7.269,5.991-6.009,10.569l9.151,33.277l-18.992,8.29l-38.175,16.952 c-7.452,3.31-12.559,10.408-13.325,18.525l-1.897,20.062l-22.306-12.783c-4.12-2.361-9.373-0.936-11.734,3.184 c-2.361,4.12-0.935,9.373,3.184,11.734l30.013,17.2c1.772,1.016,3.736,1.526,5.703,1.526c1.805,0,3.612-0.429,5.275-1.29 c3.478-1.801,5.775-5.204,6.146-9.106l1.797-19.007l8.947,20.92c0,0,1.934,13.718-22.757,31.354 c-28.32,20.228-18.711,62.202-18.711,62.202s8.44-2.941,20.734-4.623v31.425c0.008,6.093,5.169,11.046,11.126,11.126 c6.093-0.008,11.038-5.166,11.126-11.126v-32.395c4.144,0.236,8.392,0.733,12.656,1.583l-0.259,0.118l8.408,33.344 c1.498,5.906,7.713,9.447,13.508,8.068c5.906-1.498,9.44-7.708,8.068-13.508l-6.186-24.531 C250.962,216.192,253.942,204.308,253.942,204.308z"></path> </g></svg>}></InterestPage>
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
