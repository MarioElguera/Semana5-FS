import { useEffect, useRef, useState } from 'react';

export default function IncrementCounter() {

    const [count, setCount] = useState(0);
    const renders = useRef(1);

    useEffect(() => {
        renders.current += 1;
    });

    return (
        <div>
            <p>Contador: {count}</p>
            <p>Renders: {renders.current}</p>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}