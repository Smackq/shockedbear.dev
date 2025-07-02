import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json'
import { ArrowUpRight } from 'lucide-react';


export const metadata: Metadata = {
  title: 'shockedbear.dev',
  description: 'shockedbear.dev-blog',
};


export const revalidate = 60;

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-3xl mx-auto  px-4">
      <h1 className="text-3xl font-semibold mt-13 mb-5">shockedbear.dev</h1>
      <p className='mb-13 text-white/50'>Hello, Im Denis — a senior programmer with extensive experience in software development.
Over the years, Ive worked on a wide range of projects across various technologies, solving complex problems and building efficient, scalable solutions. Im passionate about clean code, system design,
 and constantly improving both my technical and team collaboration skills.</p>
        <div className="flex justify-between items-center">
  <h2 className="font-semibold">Projects</h2>
  <Link href="/projects" className="flex items-center gap-1 text-white/50 hover:text-white transition-colors duration-100">
    <span>View all</span>
    <ArrowUpRight className="w-4 h-4" />
  </Link>
</div>
<hr className='mt-2 mb-5 border-t border-white/10 />'/>

    <ul className="grid grid-cols-1 sm:grid-cols-2  gap-7 mb-13">
      {projects.slice(0, 2).map((project, index) => (
        <li key={index}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
<div className='flex justify-between items-center'>
          <h2 className="font-semibold ">Writings</h2>
          <Link href="/writings" className="flex items-center gap-1 text-white/50 hover:text-white transition-colors duration-100">
            <span className='text-white/50 hover:text-white duration-100'>View all</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
<hr className='mt-2  border-t border-white/10 />'/>
<p className='mt-5 mb-8 text-white/50'>Hello, Im Denis — a senior programmer with extensive experience in software development.
Over the years, Ive worked on a wide range of projects across various technologies, solving complex problems and building efficient, scalable solutions. Im passionate about clean code, system design,
 and constantly improving both my technical and team collaboration skills.</p>

      <ul className="grid grid-cols-1  gap-6 mb-20">
        {posts.slice(0, 2).map((post) => (
          <li key={post.slug}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
