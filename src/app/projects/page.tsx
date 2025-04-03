'use client';

import Hero from '@/components/hero';
import ProjectCard from '@/components/ProjectCard';
import projectImg from '/public/images/projects.jpg';
import hallWazePreview from '/public/images/hall-waze-preview.jpg';

import {
  SiFirebase,
  SiReact,
  SiMui,
  SiChartdotjs,
} from 'react-icons/si';

export default function ProjectsPage() {
  return (
    <div>
      <Hero
        imgData={projectImg}
        imgAlt="background"
        title="Projects"
      />

      <section className="py-16 px-6 bg-black text-white">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Featured Projects
        </h2>

        <div className="flex flex-wrap gap-10 justify-center">
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
        </div>
      </section>
    </div>
  );
}
