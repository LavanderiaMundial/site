import React from "react";
import Image from "next/image";
import mocoComercial from "../../../public/mocoComercial.webp";
import Comercial from "../../../public/comercial.jpg";

const Section03 = () => {
  return (
    <div
      id="comercial"
      className="p-5 md:p-16 md:pt-10 gradient-container bg-gradient-to-t from-primary to-secondary"
    >
      <h2 className="font-bold text-2xl text-light flex justify-center item-center">
        Limpeza comercial
      </h2>
      <p className="font-bold text-yellow-200 flex justify-center item-center pb-7">
        Cuidamos dos estofados e tapetes ou carpetes de sua empresa
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <div className="md:w-1/2 flex flex-col md:flex-row md:flex-wrap justify-between">
          <div className="p-5">
            <Image
              src={mocoComercial}
              alt="Imagem 1"
              className="rounded-xl mt-5 imgHover"
            />
          </div>
          <div className="p-5">
            <Image
              src={Comercial}
              alt="Imagem 2"
              className="rounded-xl mt-5 imgHover"
            />
          </div>
          <div className="p-5">
            <Image
              src={mocoComercial}
              alt="Imagem 3"
              className="rounded-xl mt-5 imgHover"
            />
          </div>
        </div>
        <div className="mt-5 md:w-1/2">
          <p className="text-light mb-6">
            Os estofados e tapetes ou carpetes são itens essenciais em qualquer
            empresa, pois contribuem para a decoração e o conforto do ambiente.
            No entanto, eles também são propensos a acumular sujeira, poeira,
            ácaros e bactérias, o que pode prejudicar a saúde dos funcionários e
            clientes.
            <br />
            <br />
            Por isso, é importante realizar a limpeza comercial de estofados e
            tapetes ou carpetes com frequência. A limpeza profissional remove
            esses agentes nocivos, ajudando a manter um ambiente mais saudável e
            agradável.
            <br />
            <br />
            A limpeza comercial de estofados e tapetes ou carpetes é realizada
            por empresas especializadas que utilizam equipamentos e produtos
            adequados para o tipo de tecido. O processo geralmente inclui as
            seguintes etapas:
            <br />
            <br />
            <b>Aspiração:</b> A aspiração é a etapa inicial da limpeza, e serve
            para remover a sujeira superficial, como pó e cabelos.
            <br />
            <br />
            <b>Higienização:</b> A higienização é a etapa mais importante da
            limpeza, e serve para remover a sujeira profunda, como ácaros e
            bactérias.
            <br />
            <br />
            <b>Secagem:</b> A secagem é a etapa final da limpeza, e serve para
            remover a umidade do tecido.
            <br />
            <br />
            A frequência com que os estofados e tapetes ou carpetes devem ser
            higienizados depende de diversos fatores, como o nível de tráfego, o
            tipo de tecido e a presença de crianças ou animais de estimação. Em
            geral, é recomendado que a higienização seja feita a cada seis meses
            ou um ano.
            <br />
            <br />
            A limpeza comercial de estofados e tapetes ou carpetes é uma forma
            importante de manter sua empresa limpa, saudável e agradável. A
            contratação de uma empresa especializada pode garantir que o serviço
            seja realizado de forma eficiente e segura.
            <br />
            <br />
            Aqui estão alguns benefícios da limpeza comercial de estofados e
            tapetes ou carpetes:
            <br />
            <br />
            <b>Melhora a saúde:</b> A limpeza profissional remove os agentes nocivos
            que podem causar problemas respiratórios, como asma, rinite e
            sinusite.
            <br />
            <br />
            <b>Aumenta a durabilidade:</b> A limpeza profissional ajuda a manter os
            estofados e tapetes ou carpetes limpos e com aspecto de novo por
            mais tempo.
            <br />
            <br />
            <b>Melhora a aparência:</b> Os estofados e tapetes ou carpetes limpos
            deixam o ambiente mais bonito e agradável.
            <br />
            <br />
            Se você está procurando uma empresa especializada em limpeza
            comercial de estofados e tapetes ou carpetes, entre em contato
            conosco. Temos uma equipe experiente e qualificada que irá realizar
            o serviço de forma eficiente e segura.
          </p>
          <a
            href="https://wa.me/5562982008777"
            target="_blank"
            className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold"
          >
            Agendar agora
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section03;
