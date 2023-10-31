import React from "react"
import Image from "next/image";
import mocoComercial from "../../../public/mocoComercial.jpg"

const Section03 = () => {

    return (
        <div id="comercial" className="p-5 md:p-16 md:pt-10 gradient-container bg-gradient-to-t from-primary to-secondary">
            <h2 className="font-bold text-2xl text-light flex justify-center item-center">Limpeza comercial</h2>
            <p className="font-bold text-yellow-200 flex justify-center item-center pb-7">Cuidamos dos estofados e tapetes ou carpetes de sua empresa</p>
            <div className="flex flex-col md:flex-row justify-center gap-5">
                <div className="md:w-1/2">
                    <Image src={mocoComercial} alt="imagem da limpeza de um estofado lavanderia mundial" className="rounded-xl mt-5" />
                </div>
                <div className="mt-5 md:w-1/2">
                    <p className="text-light mb-6">
                        Quer se trate de sofás, cadeiras ou mesmo paredes de cubículos - podemos recuperar o estofamento da sua organização. <br /><br />
                        Nosso serviço de limpeza de estofados comerciais utiliza o mesmo processo de limpeza de nossa limpeza de estofados residenciais. Bombeamos água quente em seu estofamento para liberar qualquer sujeira e, em seguida, extraímos a água para remover a sujeira de dentro.<br /><br />
                        Você também tem a opção de complementar qualquer um desses serviços para manter seu estofamento limpo por mais tempo: tratamento local, desodorante e protetor.
                    </p>
                    <a href="https://wa.me/5562982008777" target="_blank" className="uppercase gradient-container bg-gradient-to-t from-primary to-secondary text-light py-2 px-5 rounded-3xl hover:text-amarelo transition-all duration-300 font-bold">
                        Agendar agora
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Section03;