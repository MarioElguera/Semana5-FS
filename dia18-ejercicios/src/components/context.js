import { createContext, useContext, useState } from 'react';

// ---------------------------------------------------------------------------------------
const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [username, setUsername] = useState('Mario');

    return (
        <UserContext.Provider value={{ username, setUsername }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
};

// ---------------------------------------------------------------------------------------
const CounterContext = createContext();
export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <CounterContext.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterContext.Provider>
    );
};
export const useCounter = () => {
    return useContext(CounterContext);
};

// ---------------------------------------------------------------------------------------
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export const useTheme = () => {
    return useContext(ThemeContext);
};

// ---------------------------------------------------------------------------------------
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('español');

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'español' ? 'english' : 'español'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
export const useLanguage = () => {
    return useContext(LanguageContext);
};

// ---------------------------------------------------------------------------------------
const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
    const [login, setLogin] = useState('iniciar');

    const toggleLogin = () => {
        setLogin((prevLogin) => (prevLogin === 'iniciar' ? 'cerrar' : 'iniciar'));
    };

    return (
        <LoginContext.Provider value={{ login, toggleLogin }}>
            {children}
        </LoginContext.Provider>
    );
};
export const useLogin = () => {
    return useContext(LoginContext);
};
