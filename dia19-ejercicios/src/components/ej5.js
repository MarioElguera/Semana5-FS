import { useRouteError } from 'react-router-dom';

export default function ErrorComp() {
    const error = useRouteError();

    return (
        <div>
            <h1>Error: {error.data || error.status}</h1>
        </div>
    );
}
