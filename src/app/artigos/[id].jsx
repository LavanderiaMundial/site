"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArtigosdoBlog } from "../../components/Blog";

import { useRouter } from 'next/router'

const BlogPost = ({ id }) => {
  const [blogPost, setBlogPost] = useState(null);

  const { query } = useRouter();
  console.log(query.id);

  useEffect(() => {
    console.log("ID recebido:", id);
    const parsedId = parseInt(id, 10);
    console.log("ID parseado:", parsedId);
    const post = ArtigosdoBlog.find((post) => post.id === parsedId);
    console.log("Post encontrado:", post);  

    if (post) {
      setBlogPost(post);
    }
  }, [id]);

  if (!blogPost) {
    return <div style={{ marginTop: '15rem' }}>Artigo não encontrado</div>;
  }

  return (
    <div style={{ marginTop: '15rem' }}>
      <h1>{blogPost.title}</h1>
      <img src={blogPost.image} alt={blogPost.title} />
      <p>{blogPost.texto}</p>
      <Link href="/artigos" as="/artigos">
        <a>Ver mais artigos</a>
      </Link>
    </div>
  );
};

export default BlogPost;
