import Image from "next/image";
import Blog3 from "../../../../public/blog3.webp";
import Link from "next/link";

const Artigo3 = () => {
  return (
    <main>
      <div class="flex justify-center mt-20 bg-white">
        <div class="container mx-auto my-4 px-4 lg:px-20">
          <div class="w-full p-8 my-4 md:px-12 lg:pl-20 mr-auto rounded-2xl shadow-2xl">
            <div className="lg:flex">
              <div className="left">
                <Image
                  src={Blog3}
                  alt="Blog3"
                  width={500}
                  className="rounded-3xl pr-4"
                />
              </div>
              <div className="right">
                <h2 className="text-3xl md:text-6xl font-bold">
                  Eliminação de ácaros em estofados
                </h2>
                <h4 className="text-2xl mt-4 mb-4">
                  A higienização ajuda na eliminação de ácaros e outros micro
                  organismos como fungos e bactérias.
                </h4>
                <span className="italic">Da Redação</span>
              </div>
            </div>

            <p className="mt-8">
              Você sabia que os estofados podem ser um verdadeiro paraíso para
              os ácaros, fungos e bactérias? Esses micro-organismos podem se
              proliferar em tecidos de estofados, desencadeando alergias,
              desconforto respiratório e afetando a qualidade do ar em casa ou
              no ambiente de trabalho. No entanto, a higienização adequada pode
              ser a solução para eliminar esses intrusos indesejáveis.
            </p>

            <p className="font-bold text-xl my-4">
              1. Combate aos Ácaros e Micro-organismos
            </p>

            <p>
              A higienização profissional de estofados é fundamental para a
              eliminação de ácaros, fungos, bactérias e outros micro-organismos
              que se alojam nas fibras do tecido. A remoção eficaz desses
              agentes alergênicos proporciona um ambiente mais saudável e
              seguro, especialmente para pessoas susceptíveis a problemas
              respiratórios.
            </p>

            <p className="font-bold text-xl my-4">
              2. Melhora da Qualidade do Ar
            </p>

            <p>
              Estofados higienizados contribuem significativamente para a
              melhora da qualidade do ar interior. Ao eliminar os ácaros e
              micro-organismos, a higienização ajuda a prevenir a dispersão de
              partículas alergênicas, promovendo um ambiente mais limpo e livre
              de agentes prejudiciais à saúde respiratória.
            </p>

            <p className="font-bold text-xl my-4">
              3. Prevenção de Alergias e Doenças Respiratórias
            </p>

            <p>
              A presença de ácaros e micro-organismos em estofados pode
              desencadear alergias e agravar condições respiratórias como
              rinite, asma e bronquite. Ao realizar a limpeza profunda dos
              estofados, é possível reduzir significativamente o risco de
              alergias e doenças respiratórias, protegendo a saúde e o bem-estar
              de todos que compartilham o ambiente.
            </p>

            <p className="font-bold text-xl my-4">
              4. Ambiente Mais Higiênico e Confortável
            </p>

            <p>
              Além dos benefícios para a saúde, a higienização de estofados
              proporciona um ambiente mais higiênico e agradável. A remoção de
              sujeiras, odores e micro-organismos contribui para a sensação de
              conforto e bem-estar, melhorando a experiência de estar em casa ou
              no escritório.
            </p>

            <p className="mb-8">
              Investir na higienização profissional de estofados é uma medida
              essencial para garantir um ambiente mais saudável e confortável,
              livrando-se dos ácaros e micro-organismos que podem comprometer a
              saúde e o bem-estar. Ao priorizar a eliminação desses intrusos,
              você estará promovendo um ambiente mais acolhedor, limpo e seguro
              para toda a família ou equipe de trabalho.
            </p>

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

export default Artigo3;
