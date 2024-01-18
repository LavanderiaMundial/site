const Formulario = () => (
  <main>
    <div class="flex justify-center items-center w-screen h-screen bg-white">
      <div class="container mx-auto my-4 px-4 lg:px-20">
        <div class="w-full p-8 my-4 md:px-12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div class="flex">
            <h1 class="font-bold uppercase text-5xl">
              Solicite seu <br /> orçamento
            </h1>
          </div>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Nome*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Sobrenome*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="E-mail*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="WhatsApp*"
            />
          </div>

          <div class="my-6 w-1/2 lg:w-1/4">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-blue-600 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
            >
              Solicitar orçamento
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default Formulario;
