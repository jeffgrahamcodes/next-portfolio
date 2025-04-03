'use client';

import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiFlask,
  SiDjango,
  SiDocker,
  SiKubernetes,
} from 'react-icons/si';

const technologies = [
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiReact, name: 'React' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiPython, name: 'Python' },
  { icon: SiFlask, name: 'Flask' },
  { icon: SiDjango, name: 'Django' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiGit, name: 'Git' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiKubernetes, name: 'Kubernetes' },
];

export default function TechStack() {
  return (
    <section className="bg-black text-gray-300 py-16 text-center">
      <h3 className="text-2xl font-bold mb-8">
        Technologies I Work With
      </h3>

      <div className="flex flex-wrap justify-center gap-8 text-5xl">
        {technologies.map(({ icon: Icon, name }) => (
          <div
            key={name}
            className="flex flex-col items-center group"
          >
            <Icon
              title={name}
              className="transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-400"
            />
            <span className="text-sm mt-2 text-gray-400 group-hover:text-cyan-300">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
