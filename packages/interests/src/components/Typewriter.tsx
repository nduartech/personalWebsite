import {createSignal, onCleanup, onMount} from 'solid-js';

const Typewriter = (props:any) => {
    const [text, setText] = createSignal('');
    let index = 0;
    const fullText = props.text;
    const speed = props.speed || 20; // Default speed of 100ms per character

    const type = () => {
        if (index < fullText.length) {
            setText((prev) => prev + fullText.charAt(index));
            index++;
        } else {
            clearInterval(interval);
        }
    };

    let interval = setInterval(type, speed);

    onMount(()=>interval = setInterval(type, speed));

    onCleanup(() => clearInterval(interval)); // Clean up the interval on component unmount
    document.addEventListener('interestModalClosed', () => {
        setTimeout(()=>{index = 0;
        setText('');
        clearInterval(interval);}, 1000);
    });
    return (
        <div>
            <span>{text()}</span>
        </div>
    );
};

export default Typewriter;
