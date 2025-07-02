import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "shockedbear.dev",
  description: "shockedbear.dev-portfolio",
};

export default function Projects() {

  const rows = Array.from({ length: Math.ceil(projects.length / 2) }, (_, rowIndex) =>
    projects.slice(rowIndex * 2, rowIndex * 2 + 2)
  );

  return (
    <main className="max-w-3xl mx-auto mt-10 mb-20 px-4">
      <h1 className="text-3xl font-semibold mt-13 mb-5">shockedbear.dev</h1>
      <p className="mb-13 text-white/50">
       Hello, Im Denis — a senior programmer with extensive experience in software development.
Over the years, Ive worked on a wide range of projects across various technologies, solving complex problems and building efficient, scalable solutions. Im passionate about clean code, system design,
 and constantly improving both my technical and team collaboration skills.
      </p>

      <div className="space-y-10">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {row.map((project, index) => (
                <li key={index}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>

            
          </div>
        ))}
      </div>
    </main>
  );
}
