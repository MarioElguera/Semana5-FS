import { useState, useRef } from 'react';

export default function Temporizador() {
    const [segundos, setSegundos] = useState(0);
    const intervaloRef = useRef(null);

    const iniciarTemporizador = () => {
        if (intervaloRef.current !== null) return;

        intervaloRef.current = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000);
    };

    const detenerTemporizador = () => {
        if (intervaloRef.current !== null) {
            clearInterval(intervaloRef.current);
            intervaloRef.current = null;
        }
    };

    return (
        <div>
            <h1>Temporizador: {segundos} segundos</h1>
            <button onClick={iniciarTemporizador}>Iniciar</button>
            <button onClick={detenerTemporizador}>Detener</button>
        </div >
    );
}
