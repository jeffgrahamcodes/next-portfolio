import Hero from '@/components/hero';
import homeImg from '/public/images/home.jpg';

export default function Home() {
  return (
    <div>
      <Hero imgData={homeImg} imgAlt="background" title="Home" />
    </div>
  );
}
