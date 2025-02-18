import { useTheme } from '../components/context';

const Cuadrado = () => {
    const { theme } = useTheme();
    return (
        <div className={theme} style={{ height: '50px', width: '50px' }} >
        </div>
    );
};

export default Cuadrado;
