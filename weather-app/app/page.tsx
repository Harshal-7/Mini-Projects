import Image from "next/image";
import { Card } from "./card/card";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-5 bg-[url('/w1.jpeg')]">
      <div className="text-xl md:text-6xl font-bold text-[#7525ff] ">
        Weather App
      </div>
      <Card />
    </div>
  );
}
