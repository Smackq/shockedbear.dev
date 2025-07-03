import Image from 'next/image';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'shockedbear.dev',
  description: 'shockedbear.dev',
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const { frontmatter, content } = post;
  const { content: compiled } = await compileMDX({ source: content });

  return (
    <article className="max-w-3xl mx-auto px-6 py-12 prose dark:prose-invert bg-transparent">
      <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-center">{frontmatter.title}</h1>

      {frontmatter.image && (
        <div className="mb-10 relative w-full aspect-video overflow-hidden rounded-2xl">
          <Image
            src={frontmatter.image}
            alt={frontmatter.title}
            fill
            sizes="(max-width: 1024px) 100vw, 768px"
            className="object-contain rounded-2xl"
            priority
          />
        </div>
      )}
<article className="">
  {compiled}
</article>
    </article>
  );
}


