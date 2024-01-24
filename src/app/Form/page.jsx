"use client";
import { useState } from "react";
import axios from 'axios';

const Formulario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    whatsapp: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await enviarDadosParaAPI(formData);
      console.log(response.data);
    } catch (error) {
      console.log('Erro ao enviar dados para o backend:', error.message);
    }
  };

  const enviarDadosParaAPI = async (data) => {
    try {
      const response = await axios.post('/api/email.jsx', data);
      return response;
    } catch (error) {
      throw error;
    }
  };

  return (
    <main>
      <div className="flex justify-center items-center w-screen h-screen bg-white">
        <div className="container mx-auto my-4 px-4 lg:px-20">
          <div className="w-full p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
            <div className="flex">
              <h1 className="font-bold uppercase text-5xl">
                Solicite seu <br /> orçamento
              </h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Nome*"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                />

                <input
                  type="text"
                  name="sobrenome"
                  value={formData.sobrenome}
                  onChange={handleChange}
                  placeholder="Sobrenome*"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail*"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                />

                <input
                  type="number"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="WhatsApp (apenas números)*"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                />

              </div>

              <div className="my-6 w-1/2 lg:w-1/4">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-blue-600 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
                >
                  Solicitar orçamento
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Formulario;
