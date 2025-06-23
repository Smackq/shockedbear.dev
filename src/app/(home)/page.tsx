
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'shockedbear.dev',
  description: 'shockedbear.dev-blog',
};


export const revalidate = 60;

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
