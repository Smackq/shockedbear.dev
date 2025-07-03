import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'shockedbear.dev',
  description: 'shockedbear.dev',
};

export default async function WritingsPage() {
  const posts = await getAllPosts();

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return <Writings posts={posts} />;
}

function Writings({ posts }: { posts: Awaited<ReturnType<typeof getAllPosts>> }) {
  return (
    <main className="max-w-3xl mx-auto mt-10 mb-20 px-4">
      <h1 className="text-3xl font-semibold mt-13 mb-5">shockedbear.dev</h1>
      <p className="mb-13 text-white/50">
       Hello, Im Denis — a senior programmer with extensive experience in software development.
Over the years, Ive worked on a wide range of projects across various technologies, solving complex problems and building efficient, scalable solutions. Im passionate about clean code, system design,
 and constantly improving both my technical and team collaboration skills.
      </p>

      <div className="space-y-10">
        <ul className="grid grid-cols-1 gap-6">
          {posts.map((post, index) => (
            <li key={index}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
