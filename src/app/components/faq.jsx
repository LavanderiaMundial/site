import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretSquareDown } from "@fortawesome/free-solid-svg-icons";

const Perguntas = () => {
  const perguntasERespostas = [
    {
      pergunta: 'Quanto tempo leva para realizar o serviço?',
      resposta: 'Depende do tamanho do sofá mas, em média, 2 horas.',
    },
    {
      pergunta: 'Quanto tempo leva para secar?',
      resposta: 'Em média, de 2 à 5 horas. O tempo exato depende do clima no dia.',
    },
    {
      pergunta: 'O produto tem cheiro forte e precisa sair durante a higienização?',
      resposta: 'O produto não tem cheiro, é totalmente indolor, não precisa sair do local no momento da higienização, é biodegradável e autorizado pela ANVISA.',
    },
    {
      pergunta: 'Como funciona o processo?',
      resposta: 'Aplicamos o produto no seu móvel, realizamos a esfregação, extração da sujeira e finalizamos com um neutralizador de odores.',
    },
  ];

  const [isOpenArray, setIsOpenArray] = useState(new Array(perguntasERespostas.length).fill(false));

  const toggleOpen = (index) => {
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index];
    setIsOpenArray(updatedIsOpenArray);
  };

  return (
    <div id="perguntas" className="p-5 md:p-16 md:pt-12">
      <h2 className="font-bold text-2xl text-black/90">Perguntas frequentes</h2>
      <div className="gradient-container bg-gradient-to-t from-primary to-secondary h-1 w-20 rounded-xl mt-3" />

      {perguntasERespostas.map((par, index) => (
        <div key={index} className="mt-5">
          <div className="flex flex-col justify-between w-full bg-slate-100 p-3 group rounded-xl">
            <div className="flex justify-between items-center w-full cursor-pointer py-5" onClick={() => toggleOpen(index)}>
              <h2>{par.pergunta}</h2>
              <FontAwesomeIcon
                icon={faCaretSquareDown}
                className={`ml-2 text-primary h-10 ${isOpenArray[index] ? 'rotate-180' : ''} cursor-pointer`}
              />
            </div>
            <div className={`overflow-hidden ${isOpenArray[index] ? 'max-h-96 opacity-100 bg-primary p-2 text-light rounded-xl' : 'max-h-0 opacity-0'} transition-all duration-300`}>
              {par.resposta}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Perguntas;
