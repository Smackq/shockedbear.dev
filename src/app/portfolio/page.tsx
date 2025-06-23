import ProjectCard  from "@/components/ProjectCard"
import projects from '@/data/projects.json'
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'shockedbear.dev',
  description: 'shockedbear.dev-portfolio',
};




export default function Portfolio() {
    return(
       <main className="max-w-3xl mx-auto py-10 px-4">
             <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {projects.map((project, index) => (
                 <li key={index}>
                   <ProjectCard project={project} />
                 </li>
               ))}
             </ul>
           </main>
    );
} 