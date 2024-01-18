import Image from "next/image";
import Blog1 from "../../../../public/blog1.webp";
import Link from "next/link";

const Artigo1 = () => {
  return (
    <main>
      <div class="flex justify-center mt-20 bg-white">
        <div class="container mx-auto my-4 px-4 lg:px-20">
          <div class="w-full p-8 my-4 md:px-12 lg:pl-20 mr-auto rounded-2xl shadow-2xl">
            <div className="lg:flex">
              <div className="left">
                <Image
                  src={Blog1}
                  alt="Blog1"
                  width={500}
                  className="rounded-3xl pr-4"
                />
              </div>
              <div className="right">
                <h2 className="text-2xl md:text-6xl font-bold">
                  A importância de cuidar dos estofados
                </h2>
                <h4 className="text-xl mt-4 mb-4">
                  Saiba o por que é tão importante realizar uma higienização dos
                  estofados com frequência.
                </h4>
                <span className="italic">Da Redação</span>
              </div>
            </div>

            <p className="mt-8">
              Seja em casa, no escritório ou no carro, os estofados são parte
              essencial do nosso dia a dia. No entanto, muitas vezes
              subestimamos a importância de manter esses locais limpos e
              higienizados. Descubra a seguir por que é crucial realizar a
              higienização dos estofados com frequência.
            </p>

            <p className="font-bold text-xl my-4">1. Saúde e Bem-Estar</p>

            <p>
              Os estofados acumulam poeira, ácaros e outras partículas que podem
              desencadear alergias e problemas respiratórios, afetando a saúde e
              o bem-estar de quem utiliza esses espaços. A higienização regular
              dos estofados ajuda a eliminar essas ameaças invisíveis,
              promovendo um ambiente mais saudável para todos.
            </p>

            <p className="font-bold text-xl my-4">
              2. Durabilidade e Conservação
            </p>

            <p>
              Além dos aspectos relacionados à saúde, a limpeza frequente dos
              estofados também contribui para a sua durabilidade e conservação.
              A remoção de sujeira, manchas e odores preserva a qualidade dos
              tecidos, estendendo a vida útil dos estofados e mantendo sua
              beleza por mais tempo.
            </p>

            <p className="font-bold text-xl my-4">3. Estética e Conforto</p>

            <p>
              Estofados limpos e bem cuidados não apenas são mais agradáveis
              visualmente, mas também proporcionam maior conforto para quem
              deles faz uso. A sensação de frescor e limpeza é inigualável,
              tornando os ambientes mais convidativos e acolhedores.
            </p>

            <p className="my-4">
              Diante desses aspectos, fica evidente que a higienização regular
              dos estofados vai muito além de uma questão estética. Trata-se de
              um cuidado essencial para a saúde, o conforto e a preservação de
              um dos elementos mais presentes em nossas vidas cotidianas. Ao
              priorizar a manutenção dos estofados, estamos investindo no
              bem-estar de todos os que compartilham esses espaços.
            </p>

            <p className="mb-8">
              Não subestime a importância de cuidar dos estofados. Sua saúde,
              conforto e até mesmo a longevidade dos seus móveis agradecem!
            </p>

            <Link
              className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold"
              href="https://wa.me/5562982008777"
              target="_blank"
            >
              solicite seu orçamento
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Artigo1;
