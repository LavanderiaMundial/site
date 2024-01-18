import Image from "next/image";
import React from "react";
import Link from "next/link";

export const ArtigosdoBlog = [
  {
    id: 4,
    image: '/blog4.jpg',
    title: "O poder dos sofás coloridos na decoração das salas",
    texto: "Como transformar o ambiente com personalidade e estilo.",
    href: '/Blog/Artigo4',
  },
  {
    id: 3,
    image: '/blog3.webp',
    title: "Eliminação de ácaros em estofados",
    texto:
      "A higienização ajuda na eliminação de ácaros e outros micro organismos como fungos e bactérias.",
    href: '/Blog/Artigo3',
  },
  {
    id: 2,
    image: '/blog2.webp',
    title: "Vantagens da Impermeabilização de Estofados",
    texto: "Confira nesse texto as vantagens de impermeabilizar seu estofado.",
    href: '/Blog/Artigo2',
  },
  {
    id: 1,
    image: '/blog1.webp',
    title: "A importância de cuidar dos estofados",
    texto:
      "Saiba o por que é tão importante realizar uma higienização dos estofados com frequência.",
    href: '/Blog/Artigo1',
  },
];

const Blog = () => {
  return (
    <div className="mainBlog pb-10" id="blog">
      <div className="pt-12 pb-12 px-5 md:px-16">
        <h2 className="font-bold text-2xl text-black/90 text-center">Blog</h2>
        <div className="w-full flex align-center justify-center">
          <div className="mt-3 gradient-container bg-gradient-to-t from-primary to-secondary h-1 w-20 rounded-xl justify-center align-center" />
        </div>
        <p className="font-bold flex justify-center item-center pt-5">
          Confira as dicas da Lavanderia Mundial
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center artigosBlog">
        {ArtigosdoBlog.map((blog) => (
          <div key={blog.id} className="w-full md:w-1/3 text-center p-6">
            <div className="materiaBlog order-solid border-2 border-light-blue-500 rounded-lg p-3">
              <Image
                src={ blog.image }
                alt="Blog"
                width={670}
                height={450}
                layout="responsive"
                className="rounded-lg"
              />
              <p className="text-xl font-bold py-2">{blog.title}</p>
              <p className="pt-2 pb-6">{blog.texto}</p>
              <div className="button pb-4">
                <Link
                  href={blog.href}
                  className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold"
                >
                  Ver mais
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
