// components/AboutPreview.tsx
export default function AboutPreview() {
  return (
    <section className="bg-gray-100 dark:bg-gray-950 py-16 px-6 text-center">
      <h3 className="text-2xl font-bold mb-4">About Me</h3>
      <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
        I’m a full-stack developer who bridges the gap between logic
        and design. I love building tools and experiences that solve
        real-world problems — and I’m always down for a challenge that
        pushes my skills further.
      </p>
      <div className="mt-6">
        <a href="/about" className="text-blue-500 hover:underline">
          Read more →
        </a>
      </div>
    </section>
  );
}
