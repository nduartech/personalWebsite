import Typewriter from "./Typewriter";

function InterestPage(props:any) {

    return (<div class="typewriter w-full h-full flex flex-col justify-start items-center text-center text-regal-blue-100 py-20">
        <div class="flex flex-col justify-center items-center absolute top-20 h-4/6 overflow-y-hidden space-y-5 px-10">
            {props.icon}
            <h1 class="text-5xl font-bold text-center">{props.title}</h1>
            <p class="text-xl mt-5 text-center overflow-y-scroll no-scrollbar lg:px-56" id="pg-content"><Typewriter text={props.content}/></p>
        </div>
    </div>)
}

export default InterestPage;