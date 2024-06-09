import '../index.css';
import {createSignal, onMount} from "solid-js";

function InterestCard(props:any) {
    const showModal = (id: string) => {
        let modal = document.getElementById(id);
        document.querySelectorAll(".interest-card").forEach((card)=>{
            card.classList.add("hidden");
        });
        modal && modal.classList.contains("hidden") && modal.classList.remove("hidden");
        if (id === "basketball") {
            modal && modal.setAttribute("transition-style", "in:circle:hesitate");
        } else if (id === "ballroom") {
            modal && modal.setAttribute("transition-style", "in:diamond:hesitate");
        } else if(id === "reading") {
            modal && modal.setAttribute("transition-style", "in:square:hesitate");
        } else if(id === "camping") {
            modal && modal.setAttribute("transition-style", "in:wipe:cinematic");
        } else if(id === "family") {
            modal && modal.setAttribute("transition-style", "in:wipe:bottom-right");
        } else if(id === "cooking") {
            modal && modal.setAttribute("transition-style", "in:wipe:up");
        }
    };

    return (<div
        class="interest-card py-5 bg-regal-blue-300 dark:bg-regal-blue-800 hover:bg-regal-blue-200 dark:hover:bg-gray-900 backdrop-filter backdrop-blur rounded-[10px] h-[15rem] w-[15rem] drop-shadow-xl cursor-pointer flex flex-col justify-center items-center"
        onMouseEnter={(event) => {
            // @ts-ignore
            event.target.querySelector("h3").classList.replace("text-regal-blue-600","text-regal-blue-800");
            // @ts-ignore
            event.target.querySelector("svg").classList.replace("stroke-regal-blue-600","stroke-regal-blue-800");

        }} onMouseLeave={(event) => {
        // @ts-ignore
        event.target.querySelector("h3").classList.replace("text-regal-blue-800","text-regal-blue-600");
        // @ts-ignore
        event.target.querySelector("svg").classList.replace("stroke-regal-blue-800","stroke-regal-blue-600");
    }} onClick={() => {
        showModal(props.name)
    }}>
        {/*<img src={props.imgSrc} alt={props.name} class="h-3/4 w-3/4"/>*/}
        <div class="h-3/4 w-3/4" innerHTML={props.imgSrc}></div>
        <h3 class="text-xl text-center text-regal-blue-600 dark:text-regal-blue-100 pt-5 label">{props.label}</h3>
    </div>);
}

export default InterestCard;