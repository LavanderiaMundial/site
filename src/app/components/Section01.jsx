import React from "react"
import Link from "next/link"
import Image from "next/image"
import fotoSofaTopo from "../../../public/sofa.webp"

const Section01 = () => {
    return (
      <div className="flex flex-col md:flex-row md:h-[600px]">
        <div className="flex flex-col md:flex-row md:h-[600px]">
        <div className="md:hidden flex flex-col items-center z-10">
          <div className="w-screen gradient-container bg-gradient-to-t from-primary to-secondary p-5 shadow-lg shadow-black/75 flex flex-col justify-center items-center">
            <h2 className="text-2xl text-yellow-200 font-bold text-center">
              Especialistas em Limpeza de estofados.
            </h2>
            <p className="text-lg my-5  text-center mt-8 text-light ">
              Solicite seu orçamento sem compromisso!
            </p>
            <Link href="https://wa.me/5562982008777" target="_blank"className="font-bold text-primary bg-light px-5 py-2 rounded-xl flex justify-center items-center transition-all duration-300 ">
              Chama a gente no WhatsApp
            </Link>
          </div>
        </div>
        <div className="w-screen px-5 md:w-1/2 md:pl-16">
          <h2 className="text-2xl text-black/90 w-auto py-5 font-bold mt-7">
            Limpeza de Estofados
            <div className="gradient-container bg-gradient-to-t from-primary to-secondary h-1 w-20 rounded-xl mt-3" />
          </h2>

          <p className="text-base text-black/75">
          Para manter os estofados sempre limpos e bonitos, é importante realizar uma limpeza regular. No entanto, em alguns casos, a limpeza doméstica pode não ser suficiente para remover as manchas mais difíceis ou para eliminar ácaros e bactérias, que podem causar alergias. Nesses casos, é recomendado contratar um serviço de limpeza profissional de estofados e a Lavanderia Mundial é a mais recomendada. Somos uma lavanderia de estofados especializada que conta com equipamentos e produtos específicos para limpeza profunda de móveis e estofados, além de profissionais qualificados para realizar o serviço de forma segura e eficaz.

          </p>

          {/* <p className="text-base text-black/75">Os estofados são peças essenciais na decoração de qualquer ambiente. Eles são confortáveis, aconchegantes e trazem um toque de personalidade à casa. No entanto, com o uso e o tempo, eles podem acumular sujeira, poeira e manchas.</p><br />
          
          <p className="text-base text-black/75">Para manter os estofados sempre limpos e bonitos, é importante realizar uma limpeza regular. No entanto, em alguns casos, a limpeza doméstica pode não ser suficiente para remover as manchas mais difíceis ou para eliminar ácaros e bactérias, que podem causar alergias.</p><br />
          
          <p className="text-base text-black/75">Nesses casos, é recomendado contratar um serviço de limpeza profissional de estofados e a Lavanderia Mundial é a mais recomendada. Somos uma lavanderia de estofados especializada que conta com equipamentos e produtos específicos para limpeza profunda de móveis e estofados, além de profissionais qualificados para realizar o serviço de forma segura e eficaz.</p><br /> */}

          <div className="w-full flex mt-5 mb-10">
            <a href="https://wa.me/5562982008777" target="_blank" className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold">
              Agendar agora
            </a>
          </div>
        </div>
        <div className="hidden md:flex flex-col items-center md:w-1/2 md:-mt-28 z-10">
          <div className="w-80 h-80 gradient-container bg-gradient-to-t from-primary to-secondary rounded-xl p-5 shadow-lg shadow-black/75 flex flex-col justify-center items-center">
            <h2 className="text-3xl text-yellow-200 font-bold text-center">
              Especialistas em limpeza de estofados
            </h2>
            <p className="text-lg my-5 text-center mt-3 text-light ">
              Solicite seu orçamento sem compromisso
            </p>
            <Link href="https://wa.me/5562982008777" target="_blank" className="font-bold text-primary bg-light px-5 py-2 rounded-xl flex justify-center items-center transition-all duration-30 hover:text-amarelo duration-300">
              Chama a gente no WhatsApp
            </Link>
          </div>
          <div className="relative w-96">
            <Image src={fotoSofaTopo} alt="foto de uma família feliz sentada em um sofá limpo" width={384}
              className="rounded-xl absolute -z-10 -top-10 opacity-70"
            />
          </div>
        </div>
      </div>
      </div>
    )
}

export default Section01;
