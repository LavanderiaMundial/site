"use client"
import Image from "next/image";
import mocolavanderia from "../../public/mocomundial.jpg"
import moco2mundial from "../../public/moco2mundial.jpg"
import lavagemEstofado from "../../public/lavagemEstofado.jpg"
import lavagemCouro from "../../public/lavagemCouro.jpg"
import impermeabilizacaoEstofado from "../../public/impermeabilizacaoEstofado.jpg"
import sofafeliz from "../../public/sofafeliz.jpg"
import mocoComercial from "../../public/mocoComercial.jpg"
import lavagemTapete from "../../public/lavagemTapete.jpg"
import lavagemCarpete from "../../public/lavagemCarpete.jpg"
import lavagemColchoes from "../../public/lavagemColchoes.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion"
// Aqui começa o SLIDER
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://blog.coldwellbanker.com/wp-content/uploads/2018/07/Untitled-design-1.jpg'
  },
  {
    url: 'https://organizinglady.com/wp-content/uploads/2015/06/organizedhome2.jpg'
  },
  {
    url: 'https://www.yourhappyhome.company/wp-content/uploads/2014/04/Cleaners-in-Bournemouth1.jpg'
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

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

{/*perguntas frequentes*/ }
const Perguntas = ({ pergunta, resposta }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mt-5">
      <div className="flex flex-col justify-between w-full bg-slate-100 p-3 group rounded-xl">
        <div className="flex justify-between items-center w-full cursor-pointer py-5" onClick={toggleOpen}>
          <h2>{pergunta}</h2>
          <FontAwesomeIcon icon={faCaretSquareDown} className={`ml-2 text-primary h-10 ${isOpen ? 'rotate-180' : ''} cursor-pointer`} />
        </div>
        <div
          className={`overflow-hidden ${isOpen ? 'max-h-96 opacity-100 bg-primary p-2 text-light rounded-xl' : 'max-h-0 opacity-0'} transition-all duration-300 `}>
          {resposta}
        </div>
      </div>
    </div>
  );
};

export default function Home() {

  const [activeDiv, setActiveDiv] = useState(0);
  const perguntasERespostas = [
    {
      pergunta: 'Quanto tempo leva para realizar o serviço?',
      resposta: 'Depende do tamanho do sofá mas, em média, 2 horas.',
    },
    {
      pergunta: 'Quanto tempo leva para secar?',
      resposta: 'Em média, de 2 à 5 horas. O tempo exato depende do clima no dia.',
    },
    {
      pergunta: 'O produto tem cheiro forte e precisa sair durante a higienização?',
      resposta: 'O produto não tem cheiro, é totalmente indolor, não precisa sair do local no momento da higienização, é biodegradável e autorizado pela ANVISA.',
    },
    {
      pergunta: 'Como funciona o processo?',
      resposta: 'Aplicamos o produto no seu móvel, realizamos a esfregação, extração da sujeira e finalizamos com um neutralizador de odores.',
    },
  ];

  return (
    <div className="pt-5 md:pt-24">
      <div className="w-screen">
        {/* <Image src={mocolavanderia} className="w-screen" alt="Lavanderia Mundial" /> */}
        <Slideshow />
      </div>

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

          <p className="text-base text-black/75">Os estofados são peças essenciais na decoração de qualquer ambiente. Eles são confortáveis, aconchegantes e trazem um toque de personalidade à casa. No entanto, com o uso e o tempo, eles podem acumular sujeira, poeira e manchas.</p><br />
          
          <p className="text-base text-black/75">Para manter os estofados sempre limpos e bonitos, é importante realizar uma limpeza regular. No entanto, em alguns casos, a limpeza doméstica pode não ser suficiente para remover as manchas mais difíceis ou para eliminar ácaros e bactérias, que podem causar alergias.</p><br />
          
          <p className="text-base text-black/75">Nesses casos, é recomendado contratar um serviço de limpeza profissional de estofados e a Lavanderia Mundial é a mais recomendada. Somos uma lavanderia de estofados especializada que conta com equipamentos e produtos específicos para limpeza profunda de móveis e estofados, além de profissionais qualificados para realizar o serviço de forma segura e eficaz.</p><br />

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
            <Image src={sofafeliz} alt="foto de uma família feliz sentada em um sofá limpo" width={384}
              className="rounded-xl absolute -z-10 -top-10 opacity-70"
            />
          </div>
        </div>
      </div>

      <div id="servicos" className="pt-10 px-5 md:px-16 w-screen md:pt-10 bg-gradient-to-t from-primary to-secondary">
        <h2 className="text-3xl text-light/90 w-auto font-bold flex justify-center items-center">Serviços</h2>
        <p className="font-bold pb-10 flex justify-center items-center text-yellow-200">Confira abaixo os serviços que executamos</p>

          <nav className="flex flex-wrap md:flex-nowrap md:flex-row justify-center items-center divide-x-2">

            <a href="#servicos" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex text-center justify-center items-center ${activeDiv === 0 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-s-full`} onClick={() => setActiveDiv(0)}>Lavagem de Tapetes</a>

            <a href="#servicos" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex text-center justify-center items-center ${activeDiv === 1 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`} onClick={() => setActiveDiv(1)}>Limpeza e Higienização de estofados</a>

            <a href='#servicos' className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex justify-center items-center text-center ${activeDiv === 2 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300 rounded-3xl md:rounded-none`"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`} onClick={() => setActiveDiv(2)}>Limpeza e Hidratação em couro</a>

            <a href="#servicos" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex justify-center items-center text-center ${activeDiv === 3 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`} onClick={() => setActiveDiv(3)}>Impermeabilização em estofados</a>

            <a href="#servicos" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 text-center flex justify-center items-center ${activeDiv === 4 ? "bg-gradient-to-t from-primary to-secondary text-light":"bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`} onClick={() => setActiveDiv(4)}>Limpeza e Higienização de colchões</a>
            
            <a href="#servicos" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex text-center justify-center items-center ${activeDiv === 5 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-e-full`} onClick={() => setActiveDiv(5)}>Limpeza e Higienização de carpetes</a>

        </nav>

        { activeDiv === 0 && (
          <div id="tapete" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemTapete} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Lavagem de Tapetes" text="Sendo o tapete um item decorativo muito utilizado em casas, apartamentos e empresas, é imprescindível mantê-los sempre higienizados. Mas, para que o seu tapete fique realmente limpo, é altamente recomendável contratar uma empresa que realize a lavagem de forma profissional, já que fazê-la por conta própria não é suficiente para remover de forma efetiva todas as impurezas do tapete." />
            </div>
          </div>
        )}
        
        { activeDiv === 1 && (
          <div id="lavagemSofa" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemEstofado} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Limpeza e Higienização de estofados" text="A limpeza e higienização de estofados em um móvel que normalmente fica em ambiente familiar é muito importante manter a saúde e a disposição das pessoas que ali convivem. Não raro, a limpeza incorreta em sofás e almofadas acaba por incidir no aumento de casos de doenças respiratórias como: rinites, sinusites, resfriados e bronquite, entre outras, que têm o processo alérgico potencializado devido ao acúmulo de fungos, bactérias e ácaros nos revestimentos." />
            </div>
          </div>
        )}

        { activeDiv === 2 && (
          <div id="limpeza" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemCouro} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Limpeza e hidratação em couro" text="Para manter seu estofado de couro lindo, limpo e hidratado são necessários alguns cuidados especiais. Realizamos limpeza e hidratação de couros utilizando produtos específicos fabricados por uma empresa especializada. Desta forma, podemos garantir a qualidade e eficiência do serviço realizado." />
            </div>
          </div>
        )}

        { activeDiv === 3 && (
          <div id="cadeira" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={impermeabilizacaoEstofado} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Impermeabilização de Estofados" text="A maioria dos tecidos utilizados na fabricação de estofados absorvem poeira e líquidos, e podem manchar com facilidade. O processo de impermeabilização de estofados ocorre pela aplicação de um produto que protege as fibras do tecido, criando um tipo de capa que envolve o tecido e mantém qualquer líquido na superfície." />
            </div>
          </div>
        )}

        { activeDiv === 4 && (
          <div id="colchao" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemColchoes} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Limpeza de Colchões" text="Damos ao seu colchão um tratamento muito especial, com uma super limpeza profissional, removendo todo tipo de sujeiras. Deixe seu colchão limpo com tecnologia de ultima geração. A Lavanderia Mundial vai muito além da estética! Recomendamos a limpeza do colchão a cada 6 meses, para garantir a saúde de seu sono. Vale lembrar que ácaros e bactérias se proliferam rapidamente neste ambiente." />
            </div>
          </div>
        )}

        { activeDiv === 5 && (
          <div id="carpete" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemCarpete} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Limpeza e Higienização de carpetes" text="O carpete reveste por completo o assoalho dos cômodos, podendo ser usados para compor uma decoração e deixando um ambiente com um ar de aconchego. Por isso cada vez mais pessoas estão redescobrindo a versatilidade e a beleza que essa peça pode trazer para os ambientes que estão instalados. Podemos encontrar no mercado uma grande variedade de modelos e texturas, e as vantagens são diversas, como isolamento térmico, conforto e aparência." />
            </div>
          </div>
        )}

      </div>

      <div id="residencial" className="p-5 md:p-16 md:pt-12">
        <h2 className="font-bold text-2xl text-black/90">
          Como limpamos estofados
        </h2>
        
        <div className="mt-3 gradient-container bg-gradient-to-t from-primary to-secondary h-1 w-20 rounded-xl" />

        <div className="flex flex-col md:flex-row justify-center gap-5">
          <div className="block md:hidden ">
            <Image src={moco2mundial} alt="imagem da limpeza de um estofado lavanderia mundial" className="rounded-xl mt-5" />
          </div>
          <div className="mt-5 lg:w-1/1">
            <p className="text-black/75">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde sunt provident quos, fuga aperiam praesentium nesciunt, fugiat delectus illo expedita accusamus ab blanditiis doloremque enim at molestias voluptatum. Eligendi, non?
            </p>
            <div className="w-full flex mt-5">
            <a href="https://wa.me/5562982008777" target="_blank" className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold">
              Agendar agora
            </a>
          </div>
          </div>
          
          <div className="hidden md:block w-1/2">
            <Image src={moco2mundial} alt="imagem da limpeza de um estofado lavanderia mundial" className="rounded-xl mt-5" />
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

      {/* Início da Seção de Perguntas e Respostas */}
      <div id="perguntas" className="p-5 md:p-16 md:pt-12">
        <h2 className="font-bold text-2xl text-black/90">
          Perguntas frequentes
        </h2>
        <div className="gradient-container bg-gradient-to-t from-primary to-secondary h-1 w-20 rounded-xl mt-3"/>
          {perguntasERespostas.map((par, index) => (
            <Perguntas key={index} pergunta={par.pergunta} resposta={par.resposta} />
          ))}
        </div>
      {/* Fim da Seção de Perguntas e Respostas */}

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
