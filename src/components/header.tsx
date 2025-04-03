import Link from 'next/link';
import { Space_Grotesk } from 'next/font/google';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export default function Header() {
  return (
    <div className="w-full fixed top-0 z-50 bg-black/70 backdrop-blur-md text-white">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="font-bold text-3xl" href="/">
          <div className="w-full animate-rotate-border max-w-sm rounded-lg custom-border-gradient p-px">
            <div
              className={`px-9 py-3 rounded-lg bg-neutral-900 ${spaceGrotesk.className}`}
            >
              {`<JG />`}
            </div>
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
