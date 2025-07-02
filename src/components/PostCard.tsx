import Link from 'next/link';

type Post = {
  slug: string;
  title: string;
  date: string;
};

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`writings/${post.slug}`}
      className="flex items-center justify-between rounded-lg border border-white/10 bg-muted px-4 py-3 text-sm transition-colors "
    >
      <span className="truncate">{post.title}</span>
      <span className="text-muted-foreground whitespace-nowrap">{formatDate(post.date)}</span>
    </Link>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
