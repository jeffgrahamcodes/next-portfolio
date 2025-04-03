'use client';

import Hero from '@/components/hero';
import ProjectCard from '@/components/ProjectCard';
import projectImg from '/public/images/projects.jpg';
import hallWazePreview from '/public/images/hall-waze-preview.jpg';
import microBlogPreview from '/public/images/microblog-preview.jpg';

import {
  SiFirebase,
  SiReact,
  SiMui,
  SiChartdotjs,
  SiFlask,
  SiHtml5,
  SiMongodb,
  SiPython,
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
          All Projects
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
          <ProjectCard
            title="Microblog"
            description="A lightweight blogging app built with Flask and MongoDB, ideal for journaling and quick status updates."
            imgSrc={microBlogPreview.src}
            liveUrl="https://python-microblog-vyug.onrender.com/"
            githubUrl="https://github.com/jeffgrahamcodes/python-microblog"
            techIcons={[
              <SiPython key="python" />,
              <SiFlask key="flask" />,
              <SiMongodb key="mongodb" />,
              <SiHtml5 key="html" />,
            ]}
          />
        </div>
      </section>
    </div>
  );
}
