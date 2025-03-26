import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  // Optionally specify weights, default is 400
  // weights: ['400', '700'],
  display: 'swap', // Recommended for performance
});

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link className="font-bold text-3xl" href="/">
          <div className="w-full animate-rotate-border max-w-sm rounded-lg bg-conic/[from_var(--border-angle)] from-black via-blue-500 to-black p-px">
            <div
              className={`px-9 py-3 rounded-lg bg-neutral-900 ${spaceGrotesk.className}`}
            >{`<JG />`}</div>
          </div>
        </Link>
        <div className="space-x-4 text-xl">
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </div>
  );
}
