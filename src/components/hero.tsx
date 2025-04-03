import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { ReactNode } from 'react';

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title?: string; // Make optional if you want to omit
  children?: ReactNode;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen text-white">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>
      <div className="pt-48 px-6 flex flex-col items-center text-center">
        {props.title && (
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {props.title}
          </h1>
        )}
        {props.children}
      </div>
    </div>
  );
}
