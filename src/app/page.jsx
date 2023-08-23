import Image from "next/image";
import mocolavanderia from "../../public/mocomundial.jpeg"
import sofafeliz from "../../public/sofafeliz.jpg"
import image from "../../public/sofafeliz.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Itens = ({ title, icon, text }) => {
  return (
    <div className="flex mt-5">
      <FontAwesomeIcon icon={icon} className="gradient-container bg-gradient-to-t from-primary to-secondary text-light h-14 rounded-full flex justify-center items-center p-3" />
      <div className="flex flex-col w-[428px]">
        <p className="text-lg font-bold px-5">{title}</p>
        <p className="p-5 px text-blac/75">{text}</p>

      </div>
    </div>
  )
}



export default function Home() {
  return (
    <div className="relative pt-24">
      <div className="w-screen h-[500px]">

        <Image src={mocolavanderia} className="absolute h-[500px] w-screen" />
      </div>

      <div className="flex h-[600px]">
        <div className="w-1/2 pl-16">
          <h2 className="text-2xl text-black/75 w-96 py-5 font-bold">
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
            <button className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl">Agendar agora</button>
          </div>
        </div>
        <div className="flex flex-col  items-center w-1/2 -mt-28 z-10">
          <div className="w-80 h-80 gradient-container bg-gradient-to-t from-primary to-secondary rounded-xl p-5 shadow-lg shadow-black/75">
            <h2 className="text-3xl text-light font-bold text-center">
              Lorem ipsum dolor sit, amet.
            </h2>
            <p className="text-base text-black/75 text-center mt-8  ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt inventore nisi veniam repudiandae.
            </p>
          </div>
          <div className="relative w-96">
            <Image src={sofafeliz} alt="foto de uma família feliz sentada em um sofá limpo"
              className="rounded-xl absolute -z-10 w-96 -top-10 opacity-70"
            />
          </div>
        </div>
      </div>
      <div className=" px-16 w-screen">
        <nav className="flex justify-center items-center">

          <button className="w-[203px] px-10 py-4 bg-zinc-300 hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300">
            Lorem
          </button>
          <button className="w-[203px] px-10 py-4 bg-zinc-300 hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300">
            Lorem
          </button>
          <button className="w-[203px] px-10 py-4 bg-zinc-300 hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300">
            Lorem
          </button>
          <button className="w-[203px] px-10 py-4 bg-zinc-300 hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300">
            Lorem
          </button>
          <button className="w-[203px] px-10 py-4 bg-zinc-300 hover:bg-gradient-to-t from-primary to-secondary font-bold text-black/75 hover:text-light transition-all duration-300">
            Lorem
          </button>
        </nav>
        <div className="mt-8 flex">
          <div className="w-1/2">
            <Image src={image} alt="image" width={400}/>
            </div>
          <div className="w-1/2">
            <Itens
              icon={faSearch}
              title=" Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit."
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repudiandae hic inventore error laudantium officiis quo velit. Voluptates molestiae eos maiores architecto?"
            />
            <Itens
              icon={faLeaf}
              title=" Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit."
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repudiandae hic inventore error laudantium officiis quo velit. Voluptates molestiae eos maiores architecto?"
            />
            <Itens
              icon={faClock}
              title=" Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit."
              text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repudiandae hic inventore error laudantium officiis quo velit. Voluptates molestiae eos maiores architecto?"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
