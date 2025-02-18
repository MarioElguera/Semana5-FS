import { useCounter } from '../components/context';

const Counter = () => {
    const { count, increment, decrement } = useCounter();

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={increment}>Incrementar</button>
            <button onClick={decrement}>Decrementar</button>
        </div>
    );
};

export default Counter;
