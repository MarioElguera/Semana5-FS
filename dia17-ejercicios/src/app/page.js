'use client';
import Image from "next/image";
import InputAutoFocus from '../components/ej1';
import IncrementCounter from '../components/ej2';
import Contador from '../components/ej3';
import Temporizador from '../components/ej4';
import DesplazamientoVertical from '../components/ej5';
import Chat from '../components/ej6';

export default function Home() {
  return (
    <div id="main">
      <InputAutoFocus />
      <IncrementCounter />
      <Contador />
      <Temporizador />
      <DesplazamientoVertical />
      <Chat />
    </div>
  );
}
