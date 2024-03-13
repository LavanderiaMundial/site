import Image from "next/image";
import Blog2 from "../../../../public/blog2.webp";
import Link from "next/link";

const Artigo2 = () => {
  return (
    <main>
      <div class="flex justify-center mt-20 bg-white">
        <div class="container mx-auto my-4 px-4 lg:px-20">
          <div class="w-full p-8 my-4 md:px-12 lg:pl-20 mr-auto rounded-2xl shadow-2xl">
            <div className="lg:flex">
              <div className="left">
                <Image
                  src={Blog2}
                  alt="Blog2"
                  width={500}
                  className="rounded-3xl pr-4"
                />
              </div>
              <div className="right">
                <h2 className="text-3xl md:text-6xl font-bold">
                  Vantagens da Impermeabilização de Estofados
                </h2>
                <h4 className="text-2xl mt-4 mb-4">
                  Confira nesse texto as vantagens de impermeabilizar seu estofado.
                </h4>
                <span className="italic">Da Redação</span>
              </div>
            </div>

            <p className="mt-8">
            Seja em casa, no escritório ou em espaços comerciais, os estofados estão sujeitos a derramamentos acidentais, manchas indesejadas e a ação do tempo. Nesse contexto, a impermeabilização surge como uma solução eficaz para proteger e preservar a beleza e funcionalidade desses itens essenciais. Confira a seguir as vantagens de optar pela impermeabilização de estofados.
            </p>

            <p className="font-bold text-xl my-4">1. Proteção contra Manchas e Derramamentos</p>

            <p>
            A impermeabilização cria uma barreira protetora que impede líquidos e sujeiras de penetrarem nas fibras do tecido, tornando os estofados mais resistentes a manchas e derramamentos. Essa camada de proteção facilita a limpeza e evita danos permanentes, mantendo a aparência dos estofados impecável por mais tempo.
            </p>

            <p className="font-bold text-xl my-4">
              2. Durabilidade e Conservação
            </p>

            <p>
            Com a impermeabilização, os estofados ganham uma camada adicional de resistência, protegendo as fibras do desgaste causado pelo uso diário e prolongando sua vida útil. Além disso, a proteção contra umidade ajuda a prevenir a formação de mofo e odores desagradáveis, contribuindo para a conservação dos estofados ao longo do tempo.
            </p>

            <p className="font-bold text-xl my-4">3. Facilidade na Limpeza e Manutenção</p>

            <p>
            Estofados impermeabilizados facilitam a rotina de limpeza, uma vez que os líquidos e sujeiras não conseguem se fixar profundamente no tecido. Com um simples papel absorvente e um pano úmido, é possível remover a maior parte das manchas sem maiores complicações, poupando tempo e esforço na manutenção dos estofados.
            </p>

            <p className="font-bold text-xl my-4">4. Saúde e Bem-Estar</p>

            <p>
            A proteção contra umidade proporcionada pela impermeabilização não apenas preserva a estética dos estofados, mas também contribui para um ambiente mais saudável, evitando a proliferação de ácaros e fungos que podem desencadear alergias e problemas respiratórios.
            </p>

            <p className="my-4">
            Diante dessas vantagens, a impermeabilização de estofados se mostra como um investimento valioso para proteger seu conforto, saúde e o aspecto visual dos ambientes que esses estofados ocupam. Ao optar por esse serviço, você estará garantindo a durabilidade, fácil manutenção e beleza dos seus estofados, promovendo um ambiente mais acolhedor e funcional.
            </p>

            <p className="mb-8">Não deixe de considerar a impermeabilização como uma medida preventiva e inteligente para manter seus estofados impecáveis por mais tempo. Sua comodidade agradece!</p>

            <Link
              className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold"
              href="https://wa.me/5562982008777?text=Visitei%20seu%20site%20gostaria%20de%20mais%20informações"
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

export default Artigo2;
