import { UserProvider, CounterProvider, ThemeProvider, LanguageProvider, LoginProvider } from '../components/context';

import UsernameDisplay from '../components/ej1';
import Counter from '../components/ej2';
import ThemeToggle from '../components/ej3';
import Cuadrado from '../components/ej3_cuadrado';
import LanguageToggle from '../components/ej4';
import LoginToggle from '../components/ej5';

export function UserProviderApp() {
    return (
        <UserProvider>
            <UsernameDisplay />
        </UserProvider>
    );
}

export function CounterProviderApp() {
    return (
        <CounterProvider>
            <Counter />
        </CounterProvider>
    );
}

export function ThemeProviderApp() {

    return (
        <ThemeProvider>
            <ThemeToggle />
            <Cuadrado />
        </ThemeProvider>
    );
}

export function LanguageProviderApp() {
    return (
        <LanguageProvider>
            <LanguageToggle />
        </LanguageProvider>
    );
}

export function LoginProviderApp() {
    return (
        <LoginProvider>
            <LoginToggle />
        </LoginProvider>
    );
}