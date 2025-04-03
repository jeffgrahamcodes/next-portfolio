'use client';

import ProjectCard from '@/components/ProjectCard';
import hallWazePreview from '/public/images/hall-waze-preview.jpg';
import microBlogPreview from '/public/images/microblog-preview.jpg';

import {
  SiFirebase,
  SiReact,
  SiMui,
  SiChartdotjs,
  SiPython,
  SiFlask,
  SiMongodb,
  SiHtml5,
} from 'react-icons/si';

export default function FeaturedProjects() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <h3 className="text-2xl font-bold mb-8 text-center">
        Featured Projects
      </h3>

      <div className="flex flex-wrap justify-center gap-10">
        {/* Hall-Waze Card */}
        <ProjectCard
          title="Hall-Waze"
          description="A full-stack hall pass management system built for schools to track student movement, enforce pass policies, and visualize data."
          imgSrc={hallWazePreview.src}
          liveUrl="https://hall-waze.web.app"
          githubUrl="https://github.com/jeffgrahamcodes/hall-waze"
          techIcons={[
            <SiReact key="react" />,
            <SiFirebase key="firebase" />,
            <SiMui key="mui" />,
            <SiChartdotjs key="chartjs" />,
          ]}
        />

        {/* Microblog Card */}
        <ProjectCard
          title="Microblog"
          description="A lightweight blogging app built with Flask and MongoDB, ideal for journaling and quick status updates."
          imgSrc={microBlogPreview.src}
          liveUrl="https://your-live-url.com"
          githubUrl="https://github.com/jeffgrahamcodes/microblog"
          techIcons={[
            <SiPython key="python" />,
            <SiFlask key="flask" />,
            <SiMongodb key="mongodb" />,
            <SiHtml5 key="html" />,
          ]}
        />
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
