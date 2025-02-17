import { useState, useRef } from 'react';

export default function Contador() {
    const [contador, setContador] = useState(0);
    const contadorAnterior = useRef(0);

    const incrementarContador = () => {
        contadorAnterior.current = contador;
        setContador(contador + 1);
    };

    return (
        <div>
            <h1>Contador actual: {contador}</h1>
            <h2>Contador anterior: {contadorAnterior.current}</h2>
            <button onClick={incrementarContador}>Incrementar</button>
        </div>
    );
}
