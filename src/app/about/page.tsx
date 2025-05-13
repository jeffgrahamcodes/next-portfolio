import Hero from '@/components/hero';
import aboutImg from '/public/images/about.jpg';

export default function About() {
  return (
    <div>
      <Hero imgData={aboutImg} imgAlt="background" title="About Me" />

      <section className="bg-gray-900 text-white px-6 py-20">
        <div className="max-w-3xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold text-center">
            Developer. Educator. Builder of tools for equity in tech.
          </h1>

          <p className="text-lg leading-8">
            I'm <span className="font-semibold">Jeff Graham</span>, a
            full-stack developer and lifelong educator based in the DC
            Metro area. I build cloud-native applications that solve
            real problems — especially for underrepresented
            communities. My work blends technical rigor with a passion
            for access, learning, and mentorship.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-4">What I Do</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                Frontend – React, Next.js, Tailwind,
                accessibility-first design
              </li>
              <li>
                Backend – Node.js, Python, FastAPI, PostgreSQL,
                MongoDB
              </li>
              <li>
                Cloud & DevOps – AWS, GitHub Actions, Terraform,
                Render, Vercel
              </li>
              <li>
                AI & Education – OpenAI APIs, NLP tools,
                student-centered UX
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Why I Build
            </h2>
            <p>
              I'm driven by impact. Tools like{' '}
              <strong>LearnLift</strong> weren’t just technical
              challenges — they’re opportunities to empower students,
              especially those often overlooked by traditional
              systems. My goal is to keep building meaningful software
              that lifts people up.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Currently Exploring
            </h2>
            <ul className="space-y-1 list-disc list-inside">
              <li>AI workflows for student learning</li>
              <li>Advanced CI/CD and infrastructure-as-code (IaC)</li>
              <li>
                ython backends with FastAPI and async performance
              </li>
            </ul>
          </div>

          <div className="text-center mt-10">
            <p>Want to collaborate, hire, or just talk shop?</p>
            <a
              href="/contact"
              className="inline-block mt-4 px-6 py-2 bg-cyan-500 text-white font-semibold rounded hover:bg-cyan-600"
            >
              Let’s Connect →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
