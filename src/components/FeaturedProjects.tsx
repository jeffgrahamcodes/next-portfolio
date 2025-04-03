// components/FeaturedProjects.tsx
export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-16 px-6"
    >
      <h3 className="text-2xl font-bold mb-8 text-center">
        Featured Projects
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">CodeCraft</h4>
          <p className="text-gray-400 mb-4">
            A modular code snippet manager built with Next.js and
            MongoDB.
          </p>
          <a
            href="/projects/codecraft"
            className="text-cyan-400 hover:underline"
          >
            View Project →
          </a>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h4 className="text-xl font-semibold mb-2">DevBoard</h4>
          <p className="text-gray-400 mb-4">
            A real-time task board app with Markdown support and
            drag-and-drop.
          </p>
          <a
            href="/projects/devboard"
            className="text-cyan-400 hover:underline"
          >
            View Project →
          </a>
        </div>
      </div>

      <div className="text-center mt-10">
        <a href="/projects" className="text-cyan-400 hover:underline">
          See all projects
        </a>
      </div>
    </section>
  );
}
