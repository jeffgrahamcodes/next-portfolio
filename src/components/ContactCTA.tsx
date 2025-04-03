// components/ContactCTA.tsx
export default function ContactCTA() {
  return (
    <section className="bg-black py-20 text-center text-white">
      <h3 className="text-2xl font-bold mb-4">
        Let’s Build Something
      </h3>
      <p className="text-gray-400 mb-6">
        Open to freelance, collabs, or full-time roles.
      </p>
      <a
        href="/contact"
        className="inline-block px-6 py-3 font-semibold text-white rounded-md bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 shadow-[0_0_12px_rgba(0,191,255,0.4)] hover:shadow-[0_0_24px_rgba(0,191,255,0.8)] transition duration-300"
      >
        Get in Touch
      </a>
    </section>
  );
}
