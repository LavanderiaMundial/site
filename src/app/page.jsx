"use client"
import Image from "next/image";
import mocolavanderia from "../../public/mocomundial.jpeg"
import moco2mundial from "../../public/moco2mundial.jpg"
import lavagemEstofado from "../../public/lavagemEstofado.jpg"
import lavagemCouro from "../../public/lavagemCouro.jpg"
import lavagemCadeira from "../../public/lavagemCadeira.jpg"
import sofafeliz from "../../public/sofafeliz.jpg"
import mocoComercial from "../../public/mocoComercial.jpg"
import image from "../../public/sofafeliz.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBed, faChair, faCircleExclamation, faCouch, faFaceSmile, faHome, faLeaf, faMicrochip, faPersonBurst, faRug, faSearch, faSoap, faWandMagicSparkles } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Itens = ({ title, icon, text, text1 }) => {
  return (
    <div className="flex mt-5">
      <div className="h-14 rounded-full radient-container bg-gradient-to-t from-primary to-secondary">
        <FontAwesomeIcon icon={icon} className="text-light h-8 flex justify-center items-center p-3 drop-shadow-dark2" />
      </div>
      <div className="flex flex-col w-[428px]">
        <p className="text-lg font-bold px-5">
          {title}
        </p>
        <p className="p-5 px text-black/75">
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
    <div id="inicio" className=" pt-24">
      <div className="w-screen ">
        <Image src={mocolavanderia} className="w-screen" />
      </div>

      <div className="flex h-[600px]">
        <div className="w-1/2 pl-16">
          <h2 className="text-2xl text-black/90 w-96 py-5 font-bold">
            LIMPEZA DE MÓVEIS E ESTOFADOS
            <div className="gradient-container bg-gradient-to-t from-primary to-secondary h-1 w-20 rounded-xl" />
          </h2>

          <p className="text-base text-black/75">
            O estofamento pode reter sujeira, alérgenos e sujeiras que desgastam as fibras e embotam a aparência. Com a limpeza de estofados da Lavanderia Mundial, seus móveis serão revividos e renovados para uma aparência mais limpa e aprimorada. Inspecionamos o estofamento quanto ao tipo de fibra, defeitos físicos, solidez da cor e manchas. Depois, usamos produtos de limpeza adequados para tecidos que removem com segurança o máximo de sujeira.
          </p><br />
          <p className="text-base text-black/75">
            Se você precisa de limpeza de estofados para suas seções, sofás, pufes e outras peças de móveis, nós temos o que você precisa. Quer você tenha tecidos como couro ou microfibra, temos os técnicos e equipamentos especializados para fazer o trabalho da maneira certa. Agende 24 horas por dia, 7 dias por semana, por telefone ou por meio de nossa ferramenta de agendamento on-line fácil .
          </p>
          <div className="w-full flex justify-center items-center mt-5">
            <button className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300">
              Agendar agora
            </button>
          </div>
        </div>
        <div className="flex flex-col  items-center w-1/2 -mt-28 z-10">
          <div className="w-80 h-80 gradient-container bg-gradient-to-t from-primary to-secondary rounded-xl p-5 shadow-lg shadow-black/75 flex flex-col justify-center items-center">
            <h2 className="text-3xl text-amarelo drop-shadow-dark1 font-bold text-center">
              Especialistas em Limpeza de estofados.
            </h2>
            <p className="text-lg my-5  text-center mt-8 text-light ">
              Solicite seu orçamento sem compromisso!
            </p>
            <button className="font-bold text-primary bg-light px-5 py-2 rounded-xl flex justify-center items-center hover:text-light transition-all duration-300 hover:bg-amarelo ">Orçamento</button>
          </div>
          <div className="relative w-96">
            <Image src={sofafeliz} alt="foto de uma família feliz sentada em um sofá limpo"
              className="rounded-xl absolute -z-10 w-96 -top-10 opacity-70"
            />
          </div>
        </div>
      </div>
      <div id="servicos" className="pt-24 px-16 w-screen">
        <h2 className="text-center text-black/90 text-2xl font-bold my-5">
          Nossos Serviços
        </h2>
        <nav className="flex justify-center items-center divide divide-x-2">
          <button className={`text-xs px-5  p-2 h-16 ${activeDiv === 0 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"
            } hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-s-full`}
            onClick={() => setActiveDiv(0)}>
            Lavagem de Sofás
          </button>
          <button className={`text-xs px-5   p-2 h-16 ${activeDiv === 1 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"
            } hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300`}
            onClick={() => setActiveDiv(1)}>
            LIMPEZA E HIDRATAÇÃO
            EM SOFÁS DE COURO.
          </button>
          <button className={`text-xs px-5   p-2 h-16 ${activeDiv === 2 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"
            } hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300`}
            onClick={() => setActiveDiv(2)}>
            IMPERMEABILIZAÇÃO
            EM SOFÁS E CADEIRAS
          </button>
          <button className={`text-xs px-5   p-2 h-16 ${activeDiv === 3 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"
            } hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300`}
            onClick={() => setActiveDiv(3)}>
            LIMPEZA
            DE COLCHÕES
          </button>
          <button className={`text-xs px-5   p-2 h-16 ${activeDiv === 4 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"
            } hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300`}
            onClick={() => setActiveDiv(4)}>
            LIMPEZA DE POLTRONAS,
            BANCOS E ESTOFADOS
          </button>
          <button className={`text-xs px-5  p-2 h-16 ${activeDiv === 5 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"
            } hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300`}
            onClick={() => setActiveDiv(5)}>
            LIMPEZA
            DE CARPETES
          </button>
          <button className={`text-xs px-5  p-2 h-16 ${activeDiv === 6 ? "bg-gradient-to-t from-primary to-secondary text-light" : "bg-zinc-300"
            } hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300 rounded-e-full`}
            onClick={() => setActiveDiv(6)}>
            LAVAGEM
            DE TAPETES
          </button>
        </nav>
        {activeDiv === 0 && (
          <div className="mt-8 flex">
            <div className="w-1/2 h-96 mr-20 flex justify-end">
              <Image src={lavagemEstofado} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="w-1/2">
              <Itens
                icon={faCouch}
                title=" Lavagem de Sofás."
                text="A lavagem de estofados em um ambiente familiar é muito importante manter a saúde e a disposição das pessoas que ali convivem. Não raro, a limpeza incorreta em sofás, almofadas, acaba por incidir no aumento de casos de doenças respiratórias como: rinites, sinusites, resfriados e bronquite, entre outras, que têm o processo alérgico potencializado devido ao acúmulo de fungos, bactérias e ácaros nos revestimentos."
                text1=" "
              />
              <Itens
                icon={faMicrochip}
                title="A Lavanderia Mundial combina a tecnologia com o trabalho manual de nossos profissionais."
                text="Para garantir os cuidados necessários que cada tecido requer e a excelência na qualidade de nossos serviços de limpeza e higienização de estofados. Com resultados surpreendentes as poltronas, sofás, cadeiras, almofadas e outros estofados ganham vida nova com a remoção de manchas, marcas de uso e resíduos dispensando a troca de tecidos ou reformas."
              />
            </div>
          </div>
        )}


        {activeDiv === 1 && (
          <div className="mt-8 flex">
            <div className="w-1/2 h-96 mr-20 flex justify-end">
              <Image src={lavagemCouro} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="w-1/2">
              <Itens
                icon={faCouch}
                title=" LIMPEZA E HIDRATAÇÃO
                EM SOFÁS DE COURO."
                text=" Para manter seu estofado de couro lindo, limpo e hidratado são necessários alguns cuidados especiais.

                Realizamos limpeza e hidratação de couros utilizando produtos específicos fabricados por uma empresa especializada. Assim podemos garantir a qualidade e eficiência do serviço realizado."

              />
              <Itens
                icon={faSoap}
                title="Nosso serviço de limpeza e higienização de couro é a melhor opção para conservação do couro de peças novas e usadas."
                text="O tratamento do couro é realizado com profundidade, amaciando e impedindo a absorção de sujeiras e micro-organismos."
              />
            </div>
          </div>
        )}
        {activeDiv === 2 && (
          <div className="mt-8 flex">
            <div className="w-1/2 h-96 mr-20 flex justify-end">
              <Image src={lavagemCadeira} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="w-1/2">
              <Itens
                icon={faSearch}
                title=" Para manter seu estofado de couro lindo, limpo e hidratado são necessários alguns cuidados especiais."
                text=" Realizamos limpeza e hidratação de couros utilizando produtos específicos fabricados por uma empresa especializada. Assim podemos garantir a qualidade e eficiência do serviço realiza"

              />
              <Itens
                icon={faLeaf}
                title=" Nosso serviço de limpeza e higienização de couro é a melhor opção para conservação do couro de peças novas e usadas."
                text=" 
                O tratamento do couro é realizado com profundidade, amaciando e impedindo a absorção de sujeiras e micro-organismos."
              />
            </div>
          </div>
        )}
        {activeDiv === 3 && (
          <div className="mt-8 flex">
            <div className="w-1/2 h-96 mr-20 flex justify-end">
              <Image src={image} alt="image" className="rounded-xl" />
            </div>
            <div className="w-1/2">
              <Itens
                icon={faBed}
                title=" Limpeza de Colchões"
                text=" Damos ao seu Colchão um tratamento muita especial com uma super Limpeza Profissional com anti Bactericida e removendo todo tipo de sujeiras vamos manter ele Limpo com tecnologia de ultima geração. Confira!"

              />
              <Itens
                icon={faWandMagicSparkles}
                title="A Lavanderia Mundial vai muito além de sua estética."
                text="Recomendamos a limpeza de colchão a cada 6 meses é o mínimo para garantir a saúde de seu sono. Vale lembrar que ácaros e bactérias se proliferam rapidamente neste ambiente preferido deles."
              />
            </div>
          </div>
        )}
        {activeDiv === 4 && (
          <div className="mt-8 flex">
            <div className="w-1/2 h-96 mr-20 flex justify-end">
              <Image src={image} alt="image" className="rounded-xl" />
            </div>
            <div className="w-1/2">
              <Itens
                icon={faChair}
                title="A Higienização e Limpeza de Cadeiras Estofadas deve ser feita periodicamente, quer se trate de nossa casa, no escritório ou mesmo em uma sala de cinema."
                text="  As cadeiras estofadas estão sempre expostas a sujidades, por mais cuidado que tenhamos. Muitas vezes não conseguimos impedir que os acidentes aconteçam, e derramamos líquidos ou mesmo comida, principalmente quando temos crianças em casa."

              />
              <Itens
                icon={faCircleExclamation}
                title=" Devemos tentar evitar que estes danos se tornem permanentes, levando a empresas profissionais."
                text="  A Lavanderia Mundial faz a limpeza de estofados, incluindo cadeiras, até mesmo em locais comerciais. Utilizamos um processo de remoção de sujidade a vácuo com alta pressão, enxaguando a cadeira logo em seguida. Apenas com a remoção a vácuo sairá o excesso de água das cadeiras.

                Também contamos com um excelente processo em termos de manutenção de estofados, a impermeabilização. Impermeabilizar a cadeira estofada, irá ajudar na conservação do tecido, evitando que líquidos derramados penetrem no estofado, além prevenir manchas e maus odores."
              />
              <Itens
                icon={faPersonBurst}
                title="No caso de acontecer um acidente depois de impermeabilizar a cadeira estofada."
                text="Bastará passar um pano ou papel absorvente, sem ter de esfregar. Este processo é interessante no caso de serem utilizadas por crianças ou pessoas desastradas"
              />
            </div>
          </div>
        )}
        {activeDiv === 5 && (
          <div className="mt-8 flex">
            <div className="w-1/2 h-96 mr-20 flex justify-end">
              <Image src={image} alt="image" className="rounded-xl" />
            </div>
            <div className="w-1/2">
              <Itens
                icon={faRug}
                title="Quando falamos em piso, imaginamos e encontramos uma infinidade de formatos, cores e modelos, e quando falamos em carpete, essas características também são encontradas."
                text="Pois o mercado dispõe vários tipos de modelos também. O carpete reveste por completo o soalho dos cômodos, podendo ser usados para compor uma decoração e deixando um ambiente com um ar de aconchego. Por isso cada vez mais pessoas estão redescobrindo a versatilidade e a beleza que essa peça pode trazer para os ambientes que estão instalados.

                Podemos encontrar no mercado uma grande variedade de modelos e texturas, em que o cliente tem a opção de escolha de acordo com seu objetivo e o custo x benefício que ele busca, e podem trazer uma série de vantagens como isolamento térmico, conforto e aparência."

              />
              <Itens
                icon={faHome}
                title=" Pensando na sua casa, o que é melhor, acordar e pisar em um piso frio ou pisar em um tapete macio?"
                text="  Claro que o tapete traz um aconchego maior. Para ambientes que tem crianças, eles trazem mais segurança para brincar, andar, engatinhar. Nos tapetes acontecem momentos de descontração nas casas, quem não gosta de deitar no tapete e brincar com as crianças, os animaizinhos de estimação, ou atém mesmo assistir um filme?

                Além das casas, os carpetes são encontrados em vários outros lugares: escritórios, cinemas, clinica, escolas etc. Para salas comerciais e lojas, ele é responsável por trazer sofisticação. Por estarem tão presentes no cotidiano das pessoas, é necessário que sejam tomados uma série de cuidados."
              />
            </div>
          </div>
        )}
        {activeDiv === 6 && (
          <div className="mt-8 flex">
            <div className="w-1/2 h-96 mr-20 flex justify-end">
              <Image src={image} alt="image" width={400} className="rounded-xl" />
            </div>
            <div className="w-1/2">
              <Itens
                icon={faRug}
                title="Sendo o tapete um item decorativo muito utilizado em casas, apartamentos e empresas, é imprescindível mantê-los sempre higienizados e livres de agentes causadores de alergias, como os ácaros, por exemplo."
                text=" Mas, para que o seu tapete fique realmente limpo, é altamente recomendável contratar uma empresa que realize a higienização de forma profissional, já que fazê-la por conta própria não é suficiente para remover de forma efetiva todas as impurezas do tapete."

              />
              <Itens
                icon={faFaceSmile}
                title=" Ao realizar a limpeza profissional, você poderá ficar tranquilo e à vontade para usufruir de todo o conforto que os tapetes podem te proporcionar, como andar descalço ou deitar-se sobre ele."
                text="Assim, você não terá preocupações com a possibilidade de entrar em contato com impurezas que possam existir no tapete, e que podem ser prejudiciais à sua saúde e da sua família, como restos de alimentos, pelos de animais, resíduos de líquidos que, porventura, tenham sido derramados acidentalmente, entre outros."
              />
            </div>
          </div>
        )}
      </div>
      <div id="formadelimpeza" className="p-16 pt-24">
        <h2 className="font-bold text-2xl text-black/90">COMO LIMPAMOS ESTOFADOS</h2>
        <div className="gradient-container bg-gradient-to-t from-primary to-secondary h-1 w-20 rounded-xl" />
        <div className="flex justify-center gap-5">
          <div className="mt-5 w-1/2">
            <p className="text-black/75">
              1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate veniam sint fugit sapiente officiis earum libero ex molestias numquam in beatae tenetur reprehenderit dolores ad ipsum, provident, esse corporis sequi.
            </p><br />
            <p className="text-black/75">
              2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate veniam sint fugit sapiente officiis earum libero ex molestias numquam in beatae tenetur reprehenderit dolores ad ipsum, provident, esse corporis sequi.
            </p><br />
            <p className="text-black/75">
              3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate veniam sint fugit sapiente officiis earum libero ex molestias numquam in beatae tenetur reprehenderit dolores ad ipsum, provident, esse corporis sequi.
            </p><br />
            <p className="text-black/75">
              4. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate veniam sint fugit sapiente officiis earum libero ex molestias numquam in beatae tenetur reprehenderit dolores ad ipsum, provident, esse corporis sequi.
            </p><br />
            <p className="text-black/75">
              5. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate veniam sint fugit sapiente officiis earum libero ex molestias numquam in beatae tenetur reprehenderit dolores ad ipsum, provident, esse corporis sequi.
            </p><br />
            <p className="text-black/75">
              6. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate veniam sint fugit sapiente officiis earum libero ex molestias numquam in beatae tenetur reprehenderit dolores ad ipsum, provident, esse corporis sequi.
            </p><br />
          </div>
          <div className="w-1/2">
            <Image src={moco2mundial} alt="imagem da limpeza de um estofado lavanderia mundial" className="rounded-xl mt-5" />
          </div>
        </div>
      </div>

      <div className="p-16">
        <h2 className="font-bold text-2xl text-black/90">LIMPEZA COMERCIAL DE ESTOFADOS</h2>
        <div className="gradient-container bg-gradient-to-t from-primary to-secondary h-1 w-20 rounded-xl" />
        <div className="flex justify-center gap-5">

          <div className="w-1/2">
            <Image src={mocoComercial} alt="imagem da limpeza de um estofado lavanderia mundial" className="rounded-xl mt-5" />
          </div>

          <div className="mt-5 w-1/2">
            <p className="text-black/75">

              Quer se trate de sofás, cadeiras ou mesmo paredes de cubículos - podemos recuperar o estofamento da sua organização.

            </p><br />
            <p className="text-black/75">
              Nosso serviço de limpeza de estofados comerciais utiliza o mesmo processo de limpeza de nossa limpeza de estofados residenciais. Bombeamos água quente em seu estofamento para liberar qualquer sujeira e, em seguida, extraímos a água para remover a sujeira de dentro.

            </p><br />
            <p className="text-black/75">
              Você também tem a opção de complementar qualquer um desses serviços para manter seu estofamento limpo por mais tempo: tratamento local, desodorante eprotetor.
            </p><br />
          </div>
        </div>
      </div>
      <div id="contato" className="pt-24 px-16">
        <h2 className="font-bold text-2xl text-black/90">Onde Estamos</h2>
        <div className="gradient-container bg-gradient-to-t from-primary to-secondary h-1 w-20 rounded-xl" />

        <div className="mt-10 rounded-xl flex bg-gradient-to-t from-primary to-secondary">
          <div className="w-1/2 rounded-xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3821.793896370712!2d-49.220685!3d-16.687194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef12a8266be0f%3A0x8e32126a4523c014!2sLavanderia%20Mundial!5e0!3m2!1spt-BR!2sbr!4v1692900600663!5m2!1spt-BR!2sbr" width="600" allowfullscreen="" height={300} loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="rounded-xl drop-shadow-drop1 w-full h-[500px]">
            </iframe>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center gap-5 ">
            <div className=" flex flex-col justify-center items-center text-center gap-5">
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
    </div>
  )
}
