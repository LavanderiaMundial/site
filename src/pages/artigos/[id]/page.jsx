import React from "react";
import Link from "next/link";

const ArtigosdoBlog = [
  { id: 1, title: 'Artigo 1 - para teste' },
  { id: 2, title: 'Artigo 2 - sobre Lavanderia' },
]

const Blog = () => {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/artigos/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;