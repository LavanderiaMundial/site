import React from "react";
import { useState } from "react";
import Image from "next/image";

import lavagemEstofado from "../../../public/lavagemEstofado.webp";
import lavagemCouro from "../../../public/lavagemCouro.webp";
import impermeabilizacaoEstofado from "../../../public/impermeabilizacaoEstofado.webp";
import lavagemTapete from "../../../public/lavagemTapete.jpg";
import lavagemCarpete from "../../../public/lavagemCarpete.webp";
import lavagemColchoes from "../../../public/limpezaColchao.jpg";

const Section02 = () => {
  const [activeDiv, setActiveDiv] = useState(0);

  const Itens = ({ title, text, text1 }) => {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-5">
        <div className="flex flex-col md:w-[428px] mt-5">
          <p className="text-2xl font-bold md:px-5 text-yellow-200">{title}</p>
          <p className="py-5 md:p-5 text-light">
            {text}
            <br />
            {text1}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div
      id="servicos"
      className="pt-10 px-5 md:px-16 w-screen md:pt-10 bg-gradient-to-t from-primary to-secondary"
    >
      <h2 className="text-3xl text-light/90 w-auto font-bold flex justify-center items-center">
        Serviços
      </h2>
      <p className="font-bold pb-10 flex justify-center items-center text-yellow-200">
        Confira abaixo os serviços que executamos
      </p>

      <nav className="flex flex-wrap md:flex-nowrap md:flex-row justify-center items-center divide-x-2">
        <a
          href="#servicos"
          className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex text-center justify-center items-center ${
            activeDiv === 0
              ? "bg-gradient-to-t from-primary to-secondary text-light"
              : "bg-zinc-300"
          } hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-s-full`}
          onClick={() => setActiveDiv(0)}
        >
          Lavagem de Tapetes
        </a>

        <a
          href="#servicos"
          className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex text-center justify-center items-center ${
            activeDiv === 1
              ? "bg-gradient-to-t from-primary to-secondary text-light"
              : "bg-zinc-300"
          } hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`}
          onClick={() => setActiveDiv(1)}
        >
          Limpeza e Higienização de estofados
        </a>

        <a
          href="#servicos"
          className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex justify-center items-center text-center ${
            activeDiv === 2
              ? "bg-gradient-to-t from-primary to-secondary text-light"
              : "bg-zinc-300 rounded-3xl md:rounded-none`"
          } hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`}
          onClick={() => setActiveDiv(2)}
        >
          Limpeza e Hidratação em couro
        </a>

        <a
          href="#servicos"
          className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex justify-center items-center text-center ${
            activeDiv === 3
              ? "bg-gradient-to-t from-primary to-secondary text-light"
              : "bg-zinc-300"
          } hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`}
          onClick={() => setActiveDiv(3)}
        >
          Impermeabilização em estofados
        </a>

        <a
          href="#servicos"
          className={`w-screen md:w-auto text-xs px-5 py-4 h-16 text-center flex justify-center items-center ${
            activeDiv === 4
              ? "bg-gradient-to-t from-primary to-secondary text-light"
              : "bg-zinc-300"
          } hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-none`}
          onClick={() => setActiveDiv(4)}
        >
          Limpeza e Higienização de colchões
        </a>

        <a
          href="#servicos"
          className={`w-screen md:w-auto text-xs px-5 py-4 h-16 flex text-center justify-center items-center ${
            activeDiv === 5
              ? "bg-gradient-to-t from-primary to-secondary text-light"
              : "bg-zinc-300"
          } hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-3xl md:rounded-e-full`}
          onClick={() => setActiveDiv(5)}
        >
          Limpeza e Higienização de carpetes
        </a>
      </nav>

      {activeDiv === 0 && (
        <div id="tapete" className="pt-5 pb-10 flex flex-col md:flex-row">
          <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
            <Image
              src={lavagemTapete}
              alt="image"
              width={400}
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/3">
            <Itens
              title="Lavagem de Tapetes"
              text="O tapete é um item decorativo muito utilizado em residências, apartamentos e empresas. É fundamental mantê-lo sempre limpo. Para que seu carpete fique realmente limpo, é altamente recomendável contratar uma empresa que faça a lavagem com profissionalismo, pois fazer você mesmo não é suficiente para remover com eficácia todas as impurezas."
            />
          </div>
        </div>
      )}

      {activeDiv === 1 && (
        <div id="lavagemSofa" className="pt-5 pb-10 flex flex-col md:flex-row">
          <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
            <Image
              src={lavagemEstofado}
              alt="image"
              width={400}
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/3">
            <Itens
              title="Limpeza e Higienização de estofados"
              text="A limpeza e higienização de estofados em um móvel que normalmente fica em ambiente familiar é muito importante manter a saúde e a disposição das pessoas que ali convivem. Não raro, a limpeza incorreta em sofás e almofadas acaba por incidir no aumento de casos de doenças respiratórias como: rinites, sinusites, resfriados e bronquite, entre outras, que têm o processo alérgico potencializado devido ao acúmulo de fungos, bactérias e ácaros nos revestimentos."
            />
          </div>
        </div>
      )}

      {activeDiv === 2 && (
        <div id="limpeza" className="pt-5 pb-10 flex flex-col md:flex-row">
          <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
            <Image
              src={lavagemCouro}
              alt="image"
              width={400}
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/3">
            <Itens
              title="Limpeza e hidratação em couro"
              text="Para manter seu estofado de couro lindo, limpo e hidratado são necessários alguns cuidados especiais. Realizamos limpeza e hidratação de couros utilizando produtos específicos fabricados por uma empresa especializada. Desta forma, podemos garantir a qualidade e eficiência do serviço realizado."
            />
          </div>
        </div>
      )}

      {activeDiv === 3 && (
        <div id="cadeira" className="pt-5 pb-10 flex flex-col md:flex-row">
          <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
            <Image
              src={impermeabilizacaoEstofado}
              alt="image"
              width={400}
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/3">
            <Itens
              title="Impermeabilização de Estofados"
              text="A maioria dos tecidos utilizados na fabricação de estofados absorvem poeira e líquidos, e podem manchar com facilidade. O processo de impermeabilização de estofados ocorre pela aplicação de um produto que protege as fibras do tecido, criando um tipo de capa que envolve o tecido e mantém qualquer líquido na superfície."
            />
          </div>
        </div>
      )}

      {activeDiv === 4 && (
        <div id="colchao" className="pt-5 pb-10 flex flex-col md:flex-row">
          <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
            <Image
              src={lavagemColchoes}
              alt="image"
              width={400}
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/3">
            <Itens
              title="Limpeza de Colchões"
              text="Damos ao seu colchão um tratamento muito especial, com uma super limpeza profissional, removendo todo tipo de sujeiras. Deixe seu colchão limpo com tecnologia de ultima geração. A Lavanderia Mundial vai muito além da estética! Recomendamos a limpeza do colchão a cada 6 meses, para garantir a saúde de seu sono. Vale lembrar que ácaros e bactérias se proliferam rapidamente neste ambiente."
            />
          </div>
        </div>
      )}

      {activeDiv === 5 && (
        <div id="carpete" className="pt-5 pb-10 flex flex-col md:flex-row">
          <div className="md:w-1/2 h-96 md:mr-20 flex justify-center md:justify-end">
            <Image
              src={lavagemCarpete}
              alt="image"
              width={400}
              className="rounded-xl"
            />
          </div>
          <div className="md:w-1/3">
            <Itens
              title="Limpeza e Higienização de carpetes"
              text="Carpetes podem acumular sujeira, poeira, ácaros e bactérias, que podem causar problemas respiratórios, como asma, rinite e sinusite. A higienização profissional remove esses agentes nocivos, ajudando a manter um ambiente mais saudável, e seu carpete pode ter maior vida útil, com aspecto de novo por mais tempo, deixando o ambiente mais bonito e agradável."
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Section02;
