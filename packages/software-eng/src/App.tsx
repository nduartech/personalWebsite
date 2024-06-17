import { Component } from "solid-js";
import style from "./index.css?inline";
import SkillBar from './components/skill/SkillBar';
import skills from "./components/skill/skills";
import Xp from "./components/skill/Xp";

const App: Component = (props: any) => {


    return (
        <div
            id="bgSE" class="h-full w-full bg-[url('https://nduartech.tiiny.site/dist/se-light.svg')] dark:bg-[url('https://nduartech.tiiny.site/dist/se.svg')] bg-cover bg-bottom min-h-screen min-w-screen overflow-y-hidden z-0">
            <div
                class="flex h-full max-w-screen z-0">
                <div class="h-full max-h-screen w-full overflow-hidden z-0 transition">
                    <div class="page flex flex-col w-full h-full space-y-10">
                        <div class="page flex flex-row justify-center items-center w-full">
                            <SkillBar skills={skills()}></SkillBar>
                        </div>
                        <div class="page flex flex-col justify-start items-center w-full">
                            <div
                                class="mt-2 flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-[rgba(_0,_163,_255,_0.6)] to-[rgba(_0,_102,_179,_0.9)] backdrop-filter backdrop-blur rounded-[10px] dark:from-[rgba(_15,_23,_42,_0.9)] dark:to-[rgba(_15,_23,_42,_1)] p-5 w-[80vw] h-[85vh] lg:h-[65vh] min-h-fit">
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
