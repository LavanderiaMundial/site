"use client"
import Image from "next/image";
import mocolavanderia from "../../public/mocomundial.jpg"
import moco2mundial from "../../public/moco2mundial.jpg"
import lavagemEstofado from "../../public/lavagemEstofado.jpg"
import lavagemCouro from "../../public/lavagemCouro.jpg"
import lavagemCadeira from "../../public/lavagemCadeira.jpg"
import sofafeliz from "../../public/sofafeliz.jpg"
import mocoComercial from "../../public/mocoComercial.jpg"
import lavagemTapete from "../../public/lavagemTapete.jpg"
import lavagemCarpete from "../../public/lavagemCarpete.jpg"
import lavagemPoltrona from "../../public/lavagemPoltrona.jpg"
import lavagemColchoes from "../../public/lavagemColchoes.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion"


const Itens = ({ title, icon, text, text1 }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-5">
      <div className="h-14 rounded-full radient-container bg-gradient-to-t from-primary to-secondary mr-1">
        <FontAwesomeIcon icon={icon} className="text-light h-8 flex justify-center items-center p-3 drop-shadow-dark2" />
      </div>
      <div className="flex flex-col md:w-[428px] mt-5">
        <p className="text-lg font-bold md:px-5 text-light">
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
          <FontAwesomeIcon
            icon={faCaretSquareDown}
            className={`ml-2 text-primary h-10 ${isOpen ? 'rotate-180' : ''
              } cursor-pointer`}
          />

        </div>
        <div
          className={`overflow-hidden ${isOpen ? 'max-h-96 opacity-100 bg-primary p-2 text-light rounded-xl' : 'max-h-0 opacity-0'
            } transition-all duration-300 `}
        >
          {resposta}
        </div>
      </div>
    </div>
  );
};


export default function Home() {

  const [activeDiv, setActiveDiv] = useState(0);

  {/*perguntas e respostas -------------------------- */ }
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
        <Image src={mocolavanderia} className="w-screen" alt="Lavanderia Mundial" />
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
            Limpeza de Móveis e Estofados
            <div className="gradient-container bg-gradient-to-t from-primary to-secondary h-1 w-20 rounded-xl mt-3" />
          </h2>

          <p className="text-base text-black/75">Os móveis e estofados são peças essenciais na decoração de qualquer ambiente. Eles são confortáveis, aconchegantes e trazem um toque de personalidade à casa. No entanto, com o uso e o tempo, eles podem acumular sujeira, poeira e manchas.</p><br />
          
          <p className="text-base text-black/75">Para manter os móveis e estofados sempre limpos e bonitos, é importante realizar uma limpeza regular. No entanto, em alguns casos, a limpeza doméstica pode não ser suficiente para remover as manchas mais difíceis ou para eliminar ácaros e bactérias, que podem causar alergias.</p><br />
          
          <p className="text-base text-black/75">Nesses casos, é recomendado contratar um serviço de limpeza profissional de estofados e a Lavanderia Mundial é a mais recomendada. Somos uma lavanderia de estofados especializada que conta com equipamentos e produtos específicos para limpeza profunda de móveis e estofados, além de profissionais qualificados para realizar o serviço de forma segura e eficaz.</p><br />

          <div className="w-full flex mt-5 mb-10">
            <button className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold">
              Agendar agora
            </button>
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

          <nav className="flex flex-wrap md:flex-nowrap md:flex-row justify-center items-center divide divide-x-2 divide-y-2">

            <a href="#lavagemSofa" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex text-center justify-center items-center ${activeDiv === 0 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-s-full`} onClick={() => setActiveDiv(0)}>Lavagem de Sofás</a>

            <a href='#limpeza' className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex justify-center items-center text-center ${activeDiv === 1 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300 rounded-3xl md:rounded-none`"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`} onClick={() => setActiveDiv(1)}>Limpeza e hidratação em sofás de couro</a>

            <a href="#cadeira" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex justify-center items-center text-center ${activeDiv === 2 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`} onClick={() => setActiveDiv(2)}>Impermeabilização em sofás e cadeiras</a>

            <a href="#colchao" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 text-center flex justify-center items-center ${activeDiv === 3 ? "bg-gradient-to-t from-primary to-secondary text-light":"bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`} onClick={() => setActiveDiv(3)}>Limpeza de colchões</a>

            <a href="#poltrona" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex justify-center items-center text-center ${activeDiv === 4 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`} onClick={() => setActiveDiv(4)}>Limpeza de Poltronas, bancos e estofados</a>
            
            <a href="#carpete" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex text-center justify-center items-center ${activeDiv === 5 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`} onClick={() => setActiveDiv(5)}>Limpeza de Carpetes</a>

            <a href="#tapete" className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex text-center justify-center items-center ${activeDiv === 6 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"} hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl  md:rounded-e-full`} onClick={() => setActiveDiv(6)}>Lavagem de Tapetes</a>

        </nav>
        
        { activeDiv === 0 && (
          <div id="lavagemSofa" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemEstofado} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Lavagem de Sofás" text="A lavagem de estofados em um ambiente familiar é muito importante manter a saúde e a disposição das pessoas que ali convivem. Não raro, a limpeza incorreta em sofás e almofadas, acaba por incidir no aumento de casos de doenças respiratórias como: rinites, sinusites, resfriados e bronquite, entre outras, que têm o processo alérgico potencializado devido ao acúmulo de fungos, bactérias e ácaros nos revestimentos." />
            </div>
          </div>
        )}

        { activeDiv === 1 && (
          <div id="limpeza" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemCouro} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Limpeza e hidratação em sofás de couro" text="Para manter seu estofado de couro lindo, limpo e hidratado são necessários alguns cuidados especiais. Realizamos limpeza e hidratação de couros utilizando produtos específicos fabricados por uma empresa especializada. Desta forma, podemos garantir a qualidade e eficiência do serviço realizado." />
            </div>
          </div>
        )}

        { activeDiv === 2 && (
          <div id="cadeira" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemCadeira} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title=" Para manter seu estofado de couro lindo, limpo e hidratado são necessários alguns cuidados especiais." text="Realizamos limpeza e hidratação de couros utilizando produtos específicos fabricados por uma empresa especializada. Assim podemos garantir a qualidade e eficiência do serviço realiza" />
            </div>
          </div>
        )}

        { activeDiv === 3 && (
          <div id="colchao" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemColchoes} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Limpeza de Colchões" text=" Damos ao seu Colchão um tratamento muita especial com uma super Limpeza Profissional com anti bactericida e removendo todo tipo de sujeiras vamos manter ele Limpo com tecnologia de ultima geração. Confira!" />
            </div>
          </div>
        )}

        { activeDiv === 4 && (
          <div id="poltrona" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemPoltrona} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="A Higienização e Limpeza de Cadeiras Estofadas deve ser feita periodicamente, quer se trate de nossa casa, no escritório ou mesmo em uma sala de cinema." text="As cadeiras estofadas estão sempre expostas a sujidades, por mais cuidado que tenhamos. Muitas vezes não conseguimos impedir que os acidentes aconteçam, e derramamos líquidos ou mesmo comida, principalmente quando temos crianças em casa." />
            </div>
          </div>
        )}

        { activeDiv === 5 && (
          <div id="carpete" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemCarpete} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Existem vários tipos e modelos de carpetes no mercado." text="O carpete reveste por completo o assoalho dos cômodos, podendo ser usados para compor uma decoração e deixando um ambiente com um ar de aconchego. Por isso cada vez mais pessoas estão redescobrindo a versatilidade e a beleza que essa peça pode trazer para os ambientes que estão instalados. Podemos encontrar no mercado uma grande variedade de modelos e texturas, e as vantagens são diversas, como isolamento térmico, conforto e aparência." />
            </div>
          </div>
        )}

        { activeDiv === 6 && (
          <div id="tapete" className="pt-5 pb-10 flex flex-col md:flex-row">
            <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
              <Image src={lavagemTapete} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="md:w-1/3">
              <Itens title="Sendo o tapete um item decorativo muito utilizado em casas, apartamentos e empresas, é imprescindível mantê-los sempre higienizados." text="Mas, para que o seu tapete fique realmente limpo, é altamente recomendável contratar uma empresa que realize a higienização de forma profissional, já que fazê-la por conta própria não é suficiente para remover de forma efetiva todas as impurezas do tapete." />
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
              A limpeza de estofados é uma tarefa importante para manter a casa sempre limpa e bonita. Os estofados são peças essenciais na decoração de qualquer ambiente, mas com o uso e o tempo, eles podem acumular sujeira, poeira e manchas. <br /><br />

              Para remover essa sujeira e manter os estofados sempre limpos e bonitos, é importante contratar um serviço de limpeza profissional. <br /><br />

              Aqui na Lavanderia Mundial, utilizamos um processo de limpeza completo e eficaz, que garante a remoção de manchas, sujeira e ácaros, sem danificar o tecido do estofado. <br /><br />

              O nosso processo de limpeza inclui as seguintes etapas: <br /><br />

              <span className="font-bold">Aspiração</span> <br />
              A primeira etapa é a aspiração, que serve para remover poeira, pelos e outros resíduos do estofado. <br /><br />

              <span className="font-bold">Aplicação de produtos</span> <br />
              Após a aspiração, são aplicados produtos específicos para limpeza de estofados. Esses produtos são desenvolvidos para remover manchas, sujeira e ácaros. <br /><br />

              <span className="font-bold">Esfregação</span> <br />
              Em alguns casos, é necessário esfregar o estofado para remover manchas mais difíceis. <br /><br />

              <span className="font-bold">Enxágue</span> <br />
              Após a esfregação, o estofado é enxaguado para remover os resíduos de produtos. <br /><br />

              <span className="font-bold">Secagem</span> <br />
              O estofado é seco com um aspirador de pó ou um secador profissional. <br /><br />

              Além do processo de limpeza completo, também utilizamos equipamentos e produtos de alta qualidade para garantir um resultado impecável. <br /><br />

              Nossos profissionais são qualificados e experientes, e estão prontos para atender às suas necessidades com excelência. <br /><br />

              Entre em contato conosco e solicite um orçamento para limpeza de estofados.
            </p>
            <div className="w-full flex mt-5">
            <button className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold">
              Agendar agora
            </button>
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
            <p className="text-light">
              Quer se trate de sofás, cadeiras ou mesmo paredes de cubículos - podemos recuperar o estofamento da sua organização. <br /><br />
              Nosso serviço de limpeza de estofados comerciais utiliza o mesmo processo de limpeza de nossa limpeza de estofados residenciais. Bombeamos água quente em seu estofamento para liberar qualquer sujeira e, em seguida, extraímos a água para remover a sujeira de dentro.<br /><br />
              Você também tem a opção de complementar qualquer um desses serviços para manter seu estofamento limpo por mais tempo: tratamento local, desodorante e protetor.
            </p>
            <button className="mt-7 uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold">
              Agendar agora
            </button>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3821.793896370712!2d-49.220685!3d-16.687194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef12a8266be0f%3A0x8e32126a4523c014!2sLavanderia%20Mundial!5e0!3m2!1spt-BR!2sbr!4v1692900600663!5m2!1spt-BR!2sbr" width="600" allowfullscreen="" height={300} loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=" mb-5 rounded-xl  drop-shadow-drop1 w-full md:h-[500px]">
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
