import Image from 'next/image';
import Link from 'next/link';

type Project = {
  title: string;
  image: string;
  url: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
          href={project.url}
          className="text-sm text-muted-foreground truncate block mt-1 cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
    <div className="block rounded-xl border border-white/10 overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition w-full">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          className="object-cover"
          priority
        />
      </div>

      <div className="p-4 text-center">
        <h2 className="text-lg font-bold">{project.title}</h2>
          {project.url}
      </div>
    </div>
    </Link>
  );
}