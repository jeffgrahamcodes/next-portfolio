import Hero from '@/components/hero';
import aboutImg from '/public/images/about.jpg';

export default function About() {
  return (
    <div>
      <Hero
        imgData={aboutImg}
        imgAlt="background"
        title="About Page"
      />
    </div>
  );
}
