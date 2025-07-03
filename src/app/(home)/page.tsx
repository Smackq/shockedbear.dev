import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/data/projects.json'
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'shockedbear.dev',
    description: 'shockedbear.dev',
};


export const revalidate = 60;

export default async function HomePage () {
    const posts = await getAllPosts();
    const aboutHtml = <div className="flex flex-col items-start justify-between gap-6 px-6 my-24">
        <h1 className="text-3xl font-medium">shockedbear.dev</h1>
        <p className="text-white/60">Hello, Im Denis — a senior programmer with extensive experience in
            software development.
            Over the years, Ive worked on a wide range of projects across various technologies, solving complex
            problems and building efficient, scalable solutions. Im passionate about clean code, system design,
            and constantly improving both my technical and team collaboration skills.
        </p>
    </div>;
    const projectsHtml = <div className="mb-24">
        <div className="flex flex-row justify-between items-center gap-6 px-6">
            <h2 className="text-lg font-medium">Projects</h2>
            <Link href="/projects"
                  className="flex items-center gap-1 text-white/60 hover:text-white transition-colors duration-100">
                <span>View all</span>
                <ArrowUpRight className="w-6 h-6" />
            </Link>
        </div>
        <hr className="mt-2 mb-6 border-t border-white/10" />
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
            { projects.slice(0, 3).map((project, index) => (
                <li key={ index }>
                    <ProjectCard project={ project } />
                </li>
            )) }
        </ul>
    </div>;
    const postsHtml = <div>
        <div className="flex flex-row justify-between items-center gap-6 px-6">
            <h2 className="text-lg font-medium">Posts</h2>
            <Link href="/posts"
                  className="flex items-center gap-1 text-white/60 hover:text-white transition-colors duration-100">
                <span>View all</span>
                <ArrowUpRight className="w-6 h-6" />
            </Link>
        </div>
        <hr className="mt-2 mb-6 border-t border-white/10" />
        <div className="flex flex-col items-start justify-between gap-6 px-6 mb-24">
            <ul className="grid grid-cols-1 gap-3 w-full">
                { posts.slice(0, 2).map((post) => (
                    <li key={ post.slug }>
                        <PostCard post={ post } />
                    </li>
                )) }
            </ul>
        </div>
    </div>;

    return (
        <div>
            { aboutHtml }
            { projectsHtml }
            { postsHtml }
        </div>
    );
}
