import Image from "next/image";
import React from "react";
import Blog1 from "../../../public/blog1.webp";
import Blog2 from "../../../public/blog2.webp";
import Blog3 from "../../../public/blog3.webp";
import Blog4 from "../../../public/blog4.webp";

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
        <div className="w-full md:w-1/3 text-center p-6">
          <div className="materiaBlog order-solid border-2 border-light-blue-500 rounded-lg p-3">
            <Image
              src={Blog1}
              alt="Blog"
              width={670}
              height={450}
              layout="responsive"
              className="rounded-lg"
            />
            <p className="text-xl font-bold py-2">
              A importância de cuidar dos estofados
            </p>
            <p className="pt-2 pb-6">
              Saiba o por que é tão importante realizar uma higienização dos
              estofados com frequência.
            </p>
            <div className="button pb-4">
              <a
                href="#"
                className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold"
              >
                Ver artigo
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 text-center p-6">
          <div className="materiaBlog border-solid border-2 border-light-blue-500 rounded-lg p-3">
            <Image
              src={Blog2}
              alt="Blog"
              width={670}
              height={450}
              layout="responsive"
              className="rounded-lg"
            />
            <p className="text-xl font-bold py-2">
              Vantagens da Impermeabilização de Estofados
            </p>
            <p className="pt-2 pb-6">
              Confira nesse texto as vantagens de impermeabilizar seu estofado.
            </p>
            <div className="button pb-4">
              <a
                href="#"
                className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold"
              >
                Ver artigo
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 text-center p-6">
          <div className="materiaBlog border-solid border-2 border-light-blue-500 rounded-lg p-3">
            <Image
              src={Blog3}
              alt="Blog"
              width={670}
              height={450}
              layout="responsive"
              className="rounded-lg"
            />
            <p className="text-xl font-bold py-2">
              Eliminação de ácaros em estofados.
            </p>
            <p className="pt-2 pb-6">
              A higienização ajuda na eliminação de ácaros e outros micro
              organismos como fungos e bactérias.
            </p>
            <div className="button pb-4">
              <a
                href="#"
                className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold"
              >
                Ver artigo
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 text-center p-6">
          <div className="materiaBlog border-solid border-2 border-light-blue-500 rounded-lg p-3">
            <Image
              src={Blog4}
              alt="Blog"
              width={670}
              height={450}
              layout="responsive"
              className="rounded-lg"
            />
            <p className="text-xl font-bold py-2">
              A Importância da Impermeabilização de estofados
            </p>
            <p className="pt-2 pb-6">
              Mantenha seu ambiente agradável e limpo em todo o tempo.
            </p>
            <div className="button pb-4">
              <a
                href="#"
                className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold"
              >
                Ver artigo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
