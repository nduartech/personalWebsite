import { createSignal, onCleanup } from 'solid-js';

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

    const interval = setInterval(type, speed);

    onCleanup(() => clearInterval(interval)); // Clean up the interval on component unmount

    return (
        <div>
            <span>{text()}</span>
        </div>
    );
};

export default Typewriter;
