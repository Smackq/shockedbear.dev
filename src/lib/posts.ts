import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export async function getAllPosts() {
  const filenames = await fs.readdir(postsDirectory);

  return Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as { title: string; date: string; image?: string }),
      };
    })
  );
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`);

  try {
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      frontmatter: data as { title: string; date: string; image?: string },
      content,
    };
  } catch {
    return null;
  }
}
