import Hero from '@/components/hero';
import homeImg from '/public/images/home.jpg';

export default function Home() {
  return (
    <div>
      <Hero imgData={homeImg} imgAlt="background" title="<JG />">
        <h2 className="text-2xl md:text-4xl font-medium mb-4">
          Hey, I’m Jeff Graham.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6">
          I build creative, scalable software that’s as clean under
          the hood as it looks on the surface.
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-3 font-semibold text-white rounded-md bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 shadow-[0_0_12px_rgba(0,191,255,0.4)] hover:shadow-[0_0_24px_rgba(0,191,255,0.8)] transition duration-300"
        >
          View My Work
        </a>
      </Hero>
    </div>
  );
}
