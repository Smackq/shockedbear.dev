import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type Project = {
    title: string;
    image: string;
    url: string;
    description: string;
};

export default function ProjectCard ({ project }: { project: Project }) {
    return (
        <Link href={ project.url } target="_blank" rel="noopener noreferrer"
              className="group grid gap-6">
            <h2 className="text-xl font-medium flex items-center gap-2">
                {project.title}
                <ArrowUpRight className="w-6 h-6 text-white/50 group-hover:text-white transition-colors"/>
            </h2>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 384px"
                    className="object-cover object-center grayscale-50 transition group-hover:grayscale-0 transition-opacity duration-100 "
                    priority
                />
            </div>
            <p className="text-white/60 text-md leading-7 transition-colors">{project.description}</p>
        </Link>
    );
}
