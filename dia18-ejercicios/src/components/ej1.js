import { useUser } from './context';

const UsernameDisplay = () => {
    const { username } = useUser();

    return <h1>El nombre de usuario es: {username}</h1>;
};

export default UsernameDisplay;
