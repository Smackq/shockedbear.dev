
import Link from 'next/link';
import Image from 'next/image';

type Post = {
  slug: string;
  title: string;
  image?: string;
  date: string;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block rounded-xl border border-white/10 overflow-hidden bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition"
    >
      {post.image && (
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, 384px"
            className="object-cover"
            priority
          />
        </div>
      )}
      <div className="p-4">
        <h2 className="text-lg font-bold">{post.title}</h2>
        <p className="text-sm text-gray-500">{post.date}</p>
      </div>
    </Link>
  );
}
