import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

export interface Post {
  metadata: {
    date: string;
    url: string;
    excerpt: string;
    tags: string[];
  },
  slug: string;
  title: string;
  content: string;
}

export default function PostService() {
  return {
    async getAll(): Promise<Post[]> {
      const PATH_POSTS = path.resolve('.', '_data', 'posts');
      const postFiles = await fs.readdir(PATH_POSTS, { encoding: 'utf-8' });
      const postsPromise = postFiles.map(async (postFileName) => {
        const pathPost = path.join(PATH_POSTS, postFileName);
        const postsFile = await fs.readFile(pathPost, { encoding: 'utf-8' });
        const { data, content } = matter(postsFile);

        const post: Post = {
          metadata: {
            date: new Date(data.date).toISOString(),
            url: data.url,
            excerpt: data.excerpt,
            tags: data.tags,
          },
          slug: pathPost.replace(".md", ""),
          title: data.title,
          content,
        }

        return post;
      });

      const posts = Promise.all(postsPromise);
      return posts;
    }
  }
}