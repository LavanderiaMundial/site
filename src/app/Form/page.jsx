"use client";
import React, { useState } from "react";
import GAds from "../components/GAds";

const Formulario = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsapp: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const response = await fetch("api/contact-us", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log('Response:', response);
    const { success, error } = await response.json();

    if (success) {
      alert("Sua mensagem foi enviada com sucesso!");
    } else if (error) {
      console.error(error);
      alert("Houve um erro no envio de sua mensagem: ", error);
    }

    setSubmitting(false);
  };

  return (
    <main>
      <GAds />
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
                  id="firstName"
                  name="firstName"
                  placeholder="Nome*"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Sobrenome*"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="E-mail*"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
                />

                <input
                  type="number"
                  id="whatsapp"
                  name="whatsapp"
                  placeholder="WhatsApp (apenas números)*"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  onChange={handleInputChange}
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
