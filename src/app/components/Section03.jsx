import React from "react"
import Image from "next/image";
import residencial1 from "../../../public/residencial1.jpg"
import residencial2 from "../../../public/residencial2.jpg"
import residencial3 from "../../../public/residencial3.jpg"
import residencial4 from "../../../public/residencial4.jpg"
import residencial5 from "../../../public/residencial5.jpg"
import residencial6 from "../../../public/residencial6.jpg"
import residencial7 from "../../../public/residencial7.jpg"
import residencial8 from "../../../public/residencial8.jpg"

const Section03 = () => {
  return (
    <div id="residencial" className="p-5 md:p-16 md:pt-12">
      <h2 className="font-bold text-2xl text-black/90 text-center">
        Limpeza Residencial
      </h2>
      <div className="w-full flex align-center justify-center">
        <div className="mt-3 gradient-container bg-gradient-to-t from-primary to-secondary h-1 w-20 rounded-xl justify-center align-center" />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-5">
        <div className="mt-5 lg:w-1/1 text-center">
          <p className="text-black/75">
            Sofás, poltronas e cadeiras são itens indispensáveis em qualquer lar. Além de estarem relacionados ao conforto da casa, eles podem deixar os ambientes mais elegantes. Porém, para que eles possam cumprir bem essas funções, a limpeza de estofados deve ser feita regularmente.
          </p>
          <div className="w-full flex mt-5 align-center justify-center">
          </div>
          <div className="w-1/4 flex">
            <Image src={residencial1} alt="Residencial" className="rounded-xl mt-5 p-2 imgHover" />
            <Image src={residencial2} alt="Residencial" className="rounded-xl mt-5 p-2 imgHover" />
            <Image src={residencial3} alt="Residencial" className="rounded-xl mt-5 p-2 imgHover" />
            <Image src={residencial4} alt="Residencial" className="rounded-xl mt-5 p-2 imgHover" />
          </div>
          <div className="w-1/4 flex">
            <Image src={residencial5} alt="Residencial" className="rounded-xl mt-5 p-2 imgHover" />
            <Image src={residencial6} alt="Residencial" className="rounded-xl mt-5 p-2 imgHover" />
            <Image src={residencial7} alt="Residencial" className="rounded-xl mt-5 p-2 imgHover" />
            <Image src={residencial8} alt="Residencial" className="rounded-xl mt-5 p-2 imgHover" />
          </div>
          <div className="w-full flex align-center justify-center mt-5">
            <a href="https://wa.me/5562982008777" target="_blank" className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold">
              Agendar agora
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section03;