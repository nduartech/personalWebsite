import '../index.css';

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
        class="interest-card py-5 bg-[rgba(_0,_163,_255,_0.7)] backdrop-filter backdrop-blur rounded-[10px] dark:bg-[rgba(_0,_87,_147,_0.8)] h-[15rem] w-[15rem] drop-shadow-xl cursor-pointer flex flex-col justify-center items-center"
        onMouseEnter={(event) => {
            // @ts-ignore
            event.target.querySelector("img").classList.add("drop-shadow-[0_35px_35px_rgba(221,242,255,0.7)]");

        }} onMouseLeave={(event) => {
        // @ts-ignore
        event.target.querySelector("img").classList.remove("drop-shadow-[0_35px_35px_rgba(221,242,255,0.7)]");
    }} onClick={() => {
        showModal(props.name)
    }}>
        <img src={props.imgSrc} alt={props.name} class="h-3/4 w-3/4"/>
        <h3 class="text-xl text-center text-regal-blue-100 pt-5">{props.label}</h3>
    </div>);
}

export default InterestCard;