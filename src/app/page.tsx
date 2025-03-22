import Image from 'next/image';
import homeImg from '/public/images/home.jpg';

export default function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <div className="absolute -z-10 inset-0">
        <Image
          src={homeImg}
          alt="TODO"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
