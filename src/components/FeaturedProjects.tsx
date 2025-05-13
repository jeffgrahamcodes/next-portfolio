'use client';

import ProjectCard from '@/components/ProjectCard';
import hallWazePreview from '/public/images/hall-waze-preview.jpg';
import learnLiftPreview from '/public/images/learnlift-preview.png';

import {
  SiFirebase,
  SiReact,
  SiMui,
  SiChartdotjs,
  SiPython,
  SiFastapi,
  SiOpenai,
  SiNextdotjs,
} from 'react-icons/si';

export default function FeaturedProjects() {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <h3 className="text-2xl font-bold mb-8 text-center">
        Featured Projects
      </h3>

      <div className="flex flex-wrap justify-center gap-10">
        {/* LearnLift Card */}
        <ProjectCard
          title="LearnLift"
          description="An AI-powered writing feedback platform helping students grow their skills through personalized coaching. Built with Next.js, FastAPI, and OpenAI."
          imgSrc={learnLiftPreview.src}
          liveUrl="https://learnlift.vercel.app"
          githubUrl="https://github.com/jeffgrahamcodes/learnlift"
          techIcons={[
            <SiNextdotjs key="next" />,
            <SiFastapi key="fastapi" />,
            <SiOpenai key="openai" />,
            <SiPython key="python" />,
          ]}
        />

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
