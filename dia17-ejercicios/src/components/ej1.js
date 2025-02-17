import { useRef } from 'react';

export default function InputAutoFocus() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
        inputRef.current.value = "Texto añadido con useRef";
    }

    return (
        <div>
            <input ref={inputRef} placeholder='Escribe aqui...' style={{ color: 'black' }} />
            <button onClick={handleFocus}>Enfocar Input</button>
        </div>
    );
}