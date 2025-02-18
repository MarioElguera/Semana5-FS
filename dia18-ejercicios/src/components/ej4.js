import { useLanguage } from '../components/context';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <button onClick={toggleLanguage}>
            Cambiar a {language === 'español' ? 'english' : 'español'}
        </button>
    );
};

export default LanguageToggle;
