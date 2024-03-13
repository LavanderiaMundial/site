import Image from "next/image";
import Blog4 from "../../../../public/blog4.jpg";
import Link from "next/link";

const Artigo4 = () => {
  return (
    <main>
      <div class="flex justify-center mt-20 bg-white">
        <div class="container mx-auto my-4 px-4 lg:px-20">
          <div class="w-full p-8 my-4 md:px-12 lg:pl-20 mr-auto rounded-2xl shadow-2xl">
            <div className="lg:flex">
              <div className="left">
                <Image
                  src={Blog4}
                  alt="Blog4"
                  width={500}
                  className="rounded-3xl pr-4"
                />
              </div>
              <div className="right">
                <h2 className="text-3xl md:text-6xl font-bold">
                  O Poder dos Sofás Coloridos na Decoração das Salas
                </h2>
                <h4 className="text-2xl mt-4 mb-4">
                  Como Transformar o Ambiente com Personalidade e Estilo
                </h4>
                <span className="italic">Da Redação</span>
              </div>
            </div>

            <p className="mt-8">
              Quando se trata de criar uma atmosfera vibrante e convidativa em
              sua sala de estar, poucos elementos têm tanto poder de
              transformação quanto um sofá colorido. Ao introduzir cores vivas e
              ousadas no mobiliário central do ambiente, é possível elevar a
              decoração a um novo nível, adicionando personalidade, estilo e uma
              dose extra de alegria. Descubra o poder dos sofás coloridos e como
              eles podem revitalizar sua sala de estar.
            </p>

            <p className="font-bold text-xl my-4">
              1. Expressão da Personalidade{" "}
            </p>

            <p>
              Um sofá colorido é uma declaração de ousadia e individualidade. Ao
              escolher tons vibrantes ou estampas marcantes, você expressa sua
              personalidade e estilo através do mobiliário da sala, adicionando
              um toque autêntico e cativante ao espaço.
            </p>

            <p className="font-bold text-xl my-4">
              2. Ponto Focal dos Ambientes Neutros{" "}
            </p>

            <p>
              Em salas de cores neutras, um sofá colorido se destaca como ponto
              focal, atraindo todos os olhares e injetando energia no ambiente.
              Ele se torna o centro das atenções, adicionando vivacidade e
              dinamismo a uma paleta de cores mais suave.
            </p>

            <p className="font-bold text-xl my-4">
              3. Versatilidade na Decoração
            </p>

            <p>
              Contrastando ou harmonizando com a paleta de cores existente, um
              sofá colorido oferece versatilidade na decoração. Ele pode ser o
              ponto de partida para a escolha de elementos decorativos,
              permitindo criar composições únicas e interessantes que refletem
              seu gosto pessoal.
            </p>

            <p className="font-bold text-xl my-4">4. Impacto Visual Imediato</p>

            <p>
              A adição de um sofá colorido resulta em um impacto visual
              imediato, transformando o ambiente de forma marcante. As cores
              podem influenciar o humor, aumentar a sensação de aconchego e
              estimular a convivência, tornando o espaço mais acolhedor e
              convidativo.
            </p>

            <p className="font-bold text-xl my-4">5. Atualização Instantânea</p>

            <p>
              Em vez de investir em uma reforma completa, um sofá colorido
              oferece uma maneira instantânea de atualizar e renovar o visual da
              sala. Com uma simples mudança de estofado, é possível transformar
              completamente a atmosfera do ambiente, trazendo uma nova energia e
              vitalidade.
            </p>

            <p className="mb-8">
              Ao integrar um sofá colorido à decoração da sala de estar, você
              está incorporando uma dose extra de estilo, personalidade e
              alegria ao ambiente. A combinação de cores vibrantes com conforto
              e funcionalidade cria um espaço único que reflete seu gosto
              pessoal, tornando a sala não apenas um lugar de convívio, mas
              também uma expressão autêntica de quem você é.
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

export default Artigo4;
