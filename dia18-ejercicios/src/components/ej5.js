import { useLogin } from '../components/context';

const LoginToggle = () => {
    const { login, toggleLogin } = useLogin();

    return (
        <button onClick={toggleLogin}>
            Cambiar a {login === 'iniciar' ? 'cerrar' : 'iniciar'} sesiòn
        </button>
    );
};

export default LoginToggle;
