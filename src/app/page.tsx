import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <div>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <h1>HOME</h1>
    </div>
  );
}
