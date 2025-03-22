import Hero from '@/components/hero';
import contactImg from '/public/images/contact.jpg';

export default function Contact() {
  return (
    <div>
      <Hero
        imgData={contactImg}
        imgAlt="background"
        title="Contact Page"
      />
    </div>
  );
}
