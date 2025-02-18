'use client';
import Image from "next/image";
import { UserProviderApp, CounterProviderApp, ThemeProviderApp, LanguageProviderApp, LoginProviderApp } from '../components/_app';

export default function Home() {
  return (
    <div>
      <UserProviderApp />
      <CounterProviderApp />
      <ThemeProviderApp />
      <LanguageProviderApp />
      <br></br>
      <LoginProviderApp />
    </div>
  );
}
