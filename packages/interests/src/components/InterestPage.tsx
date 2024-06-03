import Typewriter from "./Typewriter";

function InterestPage(props:any) {

    return (<div class="typewriter w-full h-4/6 flex flex-col items-center justify-center text-regal-blue-100">
        <div class="w-1/2 h-full flex flex-col items-center justify-center space-y-10">
            {props.icon}
            <h1 class="text-5xl font-bold">{props.title}</h1>
            <p class="text-xl mt-5" id="pg-content"><Typewriter text={props.content}/></p>
        </div>
    </div>)
}

export default InterestPage;