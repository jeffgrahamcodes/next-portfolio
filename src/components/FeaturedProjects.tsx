'use client';

import ProjectCard from '@/components/ProjectCard';
import hallWazePreview from '/public/images/hall-waze-preview.jpg';
import {
  SiFirebase,
  SiReact,
  SiMui,
  SiChartdotjs,
} from 'react-icons/si';

export default function FeaturedProjects() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <h3 className="text-2xl font-bold mb-8 text-center">
        Featured Projects
      </h3>

      <div className="flex flex-wrap justify-center gap-10">
        <ProjectCard
          title="Hall-Waze"
          description="A full-stack hall pass management system built for schools to track student movement, enforce pass policies, and visualize data."
          imgSrc={hallWazePreview.src}
          liveUrl="https://hall-waze.com"
          githubUrl="https://github.com/jeffgrahamcodes/student-tracking-app"
          techIcons={[
            <SiReact key="react" />,
            <SiFirebase key="firebase" />,
            <SiMui key="mui" />,
            <SiChartdotjs key="chartjs" />,
          ]}
        />
        {/* Add more ProjectCard components here if you want to feature more */}
      </div>

      <div className="mt-10 text-center">
        <a
          href="/projects"
          className="inline-block text-cyan-400 hover:underline font-medium"
        >
          See All Projects →
        </a>
      </div>
    </section>
  );
}
