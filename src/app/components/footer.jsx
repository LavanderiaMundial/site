import Image from "next/image";
import rixxer from "../../../public/rixxer.webp";
import logo from "../../../public/logo-principal.webp";
const data = new Date();
const ano = data.getFullYear();

export default function Footer() {
  return (
    <div className="mt-10 mb-10 flex flex-col justify-center items-center">
      <Image src={logo} alt="logo da lavanderia Mundial" width={300} />
      <div className=" py-5 text-text flex flex-col items-center justify-center text-center">
        <p className="text-xs px-5">
          {ano} Lavanderia Mundial - CNPJ: 35.483.069/0001-06 - Todos os
          Direitos Reservados
        </p>
        <div className="flex">
          <p className="text-xs">Developed by &nbsp; </p>{" "}
          <a
            href="https://rixxer.com.br"
            className="font-bold text-text hover:text-secondary transition ease-in-out duration-300"
          >
            <Image src={rixxer} alt="Rixxer Corp" className="w-12" />
          </a>
        </div>
      </div>
    </div>
  );
}
