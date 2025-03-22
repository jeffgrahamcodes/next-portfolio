import Hero from '@/components/hero';
import projectImg from '/public/images/projects.jpg';

export default function Project() {
  return (
    <div>
      <Hero
        imgData={projectImg}
        imgAlt="background"
        title="Projects Page"
      />
    </div>
  );
}
