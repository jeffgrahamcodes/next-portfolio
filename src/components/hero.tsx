import { StaticImageData } from 'next/image';
import Image from 'next/image';
import { ReactNode } from 'react';

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title?: string;
  children?: ReactNode;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative min-h-screen text-white flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgData}
          alt={props.imgAlt}
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent"></div>
      </div>

      {/* Centered Content */}
      <div className="flex flex-col items-center text-center px-6">
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
