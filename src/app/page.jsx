"use client"
import Image from "next/image";
import lavagemEstofado from "../../public/lavagemEstofado.jpg"
import lavagemCouro from "../../public/lavagemCouro.jpg"
import impermeabilizacaoEstofado from "../../public/impermeabilizacaoEstofado.jpg"
import mocoComercial from "../../public/mocoComercial.jpg"
import lavagemTapete from "../../public/lavagemTapete.jpg"
import lavagemCarpete from "../../public/lavagemCarpete.jpg"
import lavagemColchoes from "../../public/lavagemColchoes.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion"

import Slideshow from "./components/Slider"; // Slider
import Perguntas from "./components/faq"; // Perguntas e Respostas
import Section01 from "./components/Section01"; // Section01


const Itens = ({ title, icon, text, text1 }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-5">
      <div className="h-14 rounded-full radient-container bg-gradient-to-t from-primary to-secondary mr-1">
        <FontAwesomeIcon icon={icon} className="text-light h-8 flex justify-center items-center p-3 drop-shadow-dark2" />
      </div>
      <div className="flex flex-col md:w-[428px] mt-5">
        <p className="text-2xl font-bold md:px-5 text-yellow-200">
          {title}
        </p>
        <p className="py-5 md:p-5 text-light">
          {text}<br />
          {text1}
        </p>
      </div>
    </div>
  )
}

export default function Home() {

  const [activeDiv, setActiveDiv] = useState(0);

  return (
    <div className="pt-5 md:pt-24">
      <Slideshow /> {/* SlideShow */}
      <div className="flex flex-col md:flex-row md:h-[600px]">
        <Section01 /> { /* Section01 */}
      </div>

      <div id="servicos" className="pt-10 px-5 md:px-16 w-screen md:pt-10 bg-gradient-to-t from-primary to-secondary">
        <h2 className="text-3xl text-light/90 w-auto font-bold flex justify-center items-center">Serviços</h2>
        <p className="font-bold pb-10 flex justify-center items-center text-yellow-200">Confira abaixo os serviços que executamos</p>

        <nav className="flex flex-wrap md:flex-nowrap md:flex-row justify-center items-center divide-x-2">

          <a href="#servicos" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex text-center justify-center items-center ${activeDiv === 0 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-s-full`} onClick={() => setActiveDiv(0)}>Lavagem de Tapetes</a>

          <a href="#servicos" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex text-center justify-center items-center ${activeDiv === 1 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`} onClick={() => setActiveDiv(1)}>Limpeza e Higienização de estofados</a>

          <a href='#servicos' className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex justify-center items-center text-center ${activeDiv === 2 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300 rounded-3xl md:rounded-none`"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`} onClick={() => setActiveDiv(2)}>Limpeza e Hidratação em couro</a>

          <a href="#servicos" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex justify-center items-center text-center ${activeDiv === 3 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`} onClick={() => setActiveDiv(3)}>Impermeabilização em estofados</a>

          <a href="#servicos" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 text-center flex justify-center items-center ${activeDiv === 4 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`} onClick={() => setActiveDiv(4)}>Limpeza e Higienização de colchões</a>

          <a href="#servicos" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex text-center justify-center items-center ${activeDiv === 5 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-e-full`} onClick={() => setActiveDiv(5)}>Limpeza e Higienização de carpetes</a>

        </nav>

        {activeDiv === 0 && (
          <div id="tapete" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemTapete} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Lavagem de Tapetes" text="O tapete é um item decorativo muito utilizado em residências, apartamentos e empresas. É fundamental mantê-lo sempre limpo. Para que seu carpete fique realmente limpo, é altamente recomendável contratar uma empresa que faça a lavagem com profissionalismo, pois fazer você mesmo não é suficiente para remover com eficácia todas as impurezas." />
            </div>
          </div>
        )}

        {activeDiv === 1 && (
          <div id="lavagemSofa" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemEstofado} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Limpeza e Higienização de estofados" text="A limpeza e higienização de estofados em um móvel que normalmente fica em ambiente familiar é muito importante manter a saúde e a disposição das pessoas que ali convivem. Não raro, a limpeza incorreta em sofás e almofadas acaba por incidir no aumento de casos de doenças respiratórias como: rinites, sinusites, resfriados e bronquite, entre outras, que têm o processo alérgico potencializado devido ao acúmulo de fungos, bactérias e ácaros nos revestimentos." />
            </div>
          </div>
        )}

        {activeDiv === 2 && (
          <div id="limpeza" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemCouro} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Limpeza e hidratação em couro" text="Para manter seu estofado de couro lindo, limpo e hidratado são necessários alguns cuidados especiais. Realizamos limpeza e hidratação de couros utilizando produtos específicos fabricados por uma empresa especializada. Desta forma, podemos garantir a qualidade e eficiência do serviço realizado." />
            </div>
          </div>
        )}

        {activeDiv === 3 && (
          <div id="cadeira" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={impermeabilizacaoEstofado} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Impermeabilização de Estofados" text="A maioria dos tecidos utilizados na fabricação de estofados absorvem poeira e líquidos, e podem manchar com facilidade. O processo de impermeabilização de estofados ocorre pela aplicação de um produto que protege as fibras do tecido, criando um tipo de capa que envolve o tecido e mantém qualquer líquido na superfície." />
            </div>
          </div>
        )}

        {activeDiv === 4 && (
          <div id="colchao" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemColchoes} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Limpeza de Colchões" text="Damos ao seu colchão um tratamento muito especial, com uma super limpeza profissional, removendo todo tipo de sujeiras. Deixe seu colchão limpo com tecnologia de ultima geração. A Lavanderia Mundial vai muito além da estética! Recomendamos a limpeza do colchão a cada 6 meses, para garantir a saúde de seu sono. Vale lembrar que ácaros e bactérias se proliferam rapidamente neste ambiente." />
            </div>
          </div>
        )}

        {activeDiv === 5 && (
          <div id="carpete" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemCarpete} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Limpeza e Higienização de carpetes" text="Por que limpar o carpete? Prevenção de alergias e doenças: os carpetes são locais ideais para o aparecimento de mofo e ácaros. Esses micro-organismos podem causar crises de asma, renite, sinusite, além de outras crises alérgicas e respiratórias." />
            </div>
          </div>
        )}

      </div>

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

      <div id="comercial" className="p-5 md:p-16 md:pt-10 gradient-container bg-gradient-to-t from-primary to-secondary">
        <h2 className="font-bold text-2xl text-light flex justify-center item-center">Limpeza comercial</h2>
        <p className="font-bold text-yellow-200 flex justify-center item-center pb-7">Cuidamos dos estofados e tapetes ou carpetes de sua empresa</p>
        <div className="flex flex-col md:flex-row justify-center gap-5">

          <div className="md:w-1/2">
            <Image src={mocoComercial} alt="imagem da limpeza de um estofado lavanderia mundial" className="rounded-xl mt-5" />
          </div>

          <div className="mt-5 md:w-1/2">
            <p className="text-light mb-6">
              Quer se trate de sofás, cadeiras ou mesmo paredes de cubículos - podemos recuperar o estofamento da sua organização. <br /><br />
              Nosso serviço de limpeza de estofados comerciais utiliza o mesmo processo de limpeza de nossa limpeza de estofados residenciais. Bombeamos água quente em seu estofamento para liberar qualquer sujeira e, em seguida, extraímos a água para remover a sujeira de dentro.<br /><br />
              Você também tem a opção de complementar qualquer um desses serviços para manter seu estofamento limpo por mais tempo: tratamento local, desodorante e protetor.
            </p>
            <a href="https://wa.me/5562982008777" target="_blank" className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold">
              Agendar agora
            </a>
          </div>
        </div>
      </div>

      <Perguntas /> {/* // Perguntas e Respostas */}

      <div id="contato" className="pt-12 pb-12 px-5 md:px-16 bg-zinc-100">
        <h2 className="font-bold text-2xl text-black/90">Onde Estamos</h2>
        <div className="item-center mt-3 gradient-container bg-gradient-to-t from-primary to-secondary h-1 w-20 rounded-xl" />

        <div className="mt-10 rounded-xl md:flex">
          <div className="md:w-1/2 rounded-xl z-20">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3821.793896370712!2d-49.220685!3d-16.687194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef12a8266be0f%3A0x8e32126a4523c014!2sLavanderia%20Mundial!5e0!3m2!1spt-BR!2sbr!4v1692900600663!5m2!1spt-BR!2sbr" width="600" height={300} loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=" mb-5 rounded-xl  drop-shadow-drop1 w-full md:h-[500px]">
            </iframe>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center gap-5 z-10">
            <motion.div initial={{ x: -400 }} whileInView={{ x: 0 }} transition={{ duration: 1, delay: 0.5 }} exit={{ x: -400 }} className="hidden -z-10 md:flex flex-col justify-center items-center text-center gap-5 bg-gradient-to-t from-primary to-secondary rounded-e-xl h-96">
              <h2 className="text-xl px-5"><span className="text-light font-bold">Endereço:</span> <span className="text-yellow-200 font-bold">R. Colômbia, Quadra 14 - lote 20 - Vila Maria Luiza, Goiânia - GO, 74720-190</span></h2>
              <h2><span className="text-light font-bold">E-mail:</span> <span className="text-yellow-200 font-bold">lavanderiamundial.mkt@gmail.com</span></h2>
              <div className="space-x-5">
                <Link href="https://instagram.com/lavanderia_mundial" target="_blank" className="">
                  <FontAwesomeIcon icon={faInstagram} className="text-light h-10" />
                </Link>
                <Link href="https://facebook.com/mundial.lavanderia" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} className="text-light h-10" />
                </Link>
                <Link href="https://wa.me/5562982008777" target="_blank">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-light h-10" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 md:hidden flex flex-col  justify-center items-center gap-5 ">
            <div
              className=" -z-10 flex flex-col justify-center items-center text-center gap-5 bg-gradient-to-t from-primary to-secondary rounded-xl h-96">
              <h2 className="text-xl px-5"><span className="text-light font-bold">Endereço:</span> R. Colômbia, Quadra 14 - lote 20 - Vila Maria Luiza, Goiânia - GO, 74720-190</h2>
              <h2><span className="text-light font-bold">E-mail:</span> contato@lavanderiamundial.com.br</h2>
              <div className="space-x-5">
                <Link href="#" target="_blank" className="">
                  <FontAwesomeIcon icon={faInstagram} className="text-light h-10" />
                </Link>
                <Link href="#" target="_blank">
                  <FontAwesomeIcon icon={faFacebook} className="text-light h-10" />
                </Link>
                <Link href="#" target="_blank">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-light h-10" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  )
}
