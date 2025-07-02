import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  image: string;
  url: string;
  description: string; 
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group block w-full max-w-md mx-auto cursor-default">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          className="object-cover object-center transition-opacity duration-100 "
          priority
        />
      </div>

      <h2 className="font-semibold mt-6 mb-4 flex items-center gap-2 cursor-pointer">
        <Link href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-inherit no-underline group-hover:text-white transition-colors">
          {project.title}
          <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
        </Link>
      </h2>

      <p className="text-white/50 text-sm">{project.description}</p>
    </div>
  );
}
