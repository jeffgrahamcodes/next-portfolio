import Hero from '@/components/hero';
import contactImg from '/public/images/contact.jpg';

export default function Contact() {
  return (
    <div>
      <Hero
        imgData={contactImg}
        imgAlt="background"
        title="Contact Me"
      />

      <section className="bg-gray-900 text-white px-6 py-20">
        <div className="max-w-xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-center">
            Let’s Connect
          </h2>
          <p className="text-center text-lg">
            Whether you&apos;re interested in collaborating, hiring,
            or just saying hi — I&apos;m always open to great
            conversations.
          </p>

          <div className="flex flex-col gap-6">
            <a
              href="mailto:jeffgrahamcodes@gmail.com"
              className="block text-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded"
            >
              Email Me
            </a>

            <a
              href="https://linkedin.com/in/jeffgrahamcodes"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded"
            >
              Connect on LinkedIn
            </a>

            <a
              href="https://github.com/jeffgrahamcodes"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded"
            >
              View My GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
