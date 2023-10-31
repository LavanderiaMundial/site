import React from "react"
import Image from "next/image";
import lavagemCarpete from "../../../public/lavagemCarpete.webp"

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
            <Image src={lavagemCarpete} alt="Lavagem de Tapete" className="rounded-xl mt-5 p-2" />
            <Image src={lavagemCarpete} alt="Lavagem de Tapete" className="rounded-xl mt-5 p-2" />
            <Image src={lavagemCarpete} alt="Lavagem de Tapete" className="rounded-xl mt-5 p-2" />
            <Image src={lavagemCarpete} alt="Lavagem de Tapete" className="rounded-xl mt-5 p-2" />
          </div>
          <div className="w-1/4 flex">
            <Image src={lavagemCarpete} alt="Lavagem de Tapete" className="rounded-xl mt-5 p-2" />
            <Image src={lavagemCarpete} alt="Lavagem de Tapete" className="rounded-xl mt-5 p-2" />
            <Image src={lavagemCarpete} alt="Lavagem de Tapete" className="rounded-xl mt-5 p-2" />
            <Image src={lavagemCarpete} alt="Lavagem de Tapete" className="rounded-xl mt-5 p-2" />
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