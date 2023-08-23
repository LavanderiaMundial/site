import Image from "next/image";
import mocolavanderia from "../../public/mocomundial.jpeg"
import sofafeliz from "../../public/sofafeliz.jpg"

export default function Home() {
  return (
    <div className="relative pt-24">
      <div className="w-screen h-96">
        
        <Image src={mocolavanderia} className="absolute h-96" />
      </div>

      <div className="flex">
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
            <Image src={sofafeliz}  alt="foto de uma família feliz sentada em um sofá limpo"
            className="rounded-xl absolute -z-10 w-96 -top-10 opacity-70"
            />
          </div>
        </div>
      </div>
      <div>
        <nav>
          Link
        </nav>
      </div>
    </div>  
  )
}
