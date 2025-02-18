import { useTheme } from '../components/context';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme}>
            Cambiar a {theme === 'light' ? 'modo oscuro' : 'modo claro'}
        </button>
    );
};

export default ThemeToggle;
