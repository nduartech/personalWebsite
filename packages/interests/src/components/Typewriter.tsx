import {createSignal, onCleanup, onMount} from 'solid-js';

const Typewriter = (props:any) => {
    const [text, setText] = createSignal('');
    let index = 0;
    const fullText = props.text;
    const speed = props.speed || 10; // Default speed of 100ms per character

    const type = () => {
        if (index < fullText.length) {
            setText((prev) => prev + fullText.charAt(index));
            index++;
        } else {
            clearInterval(interval);
        }
    };

    let interval = setInterval(type, speed);

    onMount(()=>{
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            setText(fullText)
        } else interval = setInterval(type, speed);
    });

    onCleanup(() => clearInterval(interval)); // Clean up the interval on component unmount
    document.addEventListener('interestModalClosed', () => {
        setTimeout(()=>{index = 0;
        setText('');
        clearInterval(interval);}, 1000);
    });
    return (
        <div class="overflow-y-scroll no-scrollbar h-full">
            <span>{text()}</span>
        </div>
    );
};

export default Typewriter;
