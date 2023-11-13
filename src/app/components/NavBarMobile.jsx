"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faPeopleGroup,
  faHome,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import logob from "../../../public/logobrancoprincipal.webp";
import logo from "../../../public/logo-principal.webp";

import { useState } from "react";
import Image from "next/image";
export default function NavMobile() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="flex justify-around md:hidden mt-5">
      <div className=" flex justify-around items-center py-1 w-screen">
        <div className="flex justify-center items-center">
          <Image
            src={logo}
            alt="logo da Fazenda Santo Antônio"
            className="w-36"
          />
        </div>
        <svg
          onClick={() => setShowSidebar(!showSidebar)}
          className="flex justify-center items-center cursor-pointer "
          fill="#1C74BB"
          viewBox="0 0 100 50"
          width="30"
          height="30"
        >
          <rect width="100" height="10"></rect>
          <rect y="30" width="80" height="10"></rect>
          <rect y="60" width="60" height="10"></rect>
        </svg>
      </div>

      <div
        className={`text-light fixed  right-0 top-0 z-40 flex h-full w-[70vw]  flex-col backdrop-blur-md bg-gradient-to-t from-primary to-secondary transition-all duration-1000 ease-in-out ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <button
          className="fixed right-10 top-6 z-50 flex cursor-pointer items-center text-4xl text-light"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
        <a
          href="#servicos"
          className=" text-yellow1 mt-20 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-secondary"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <p>Serviços</p>
        </a>
        <a
          href="#residencial"
          className=" text-yellow1 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-secondary"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <p>Onde atuamos</p>
        </a>
        <a
          href="#perguntas"
          className=" text-yellow1 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-secondary"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <p>Perguntas Frequentes</p>
        </a>
        <a
          href="#depoimentos"
          className=" text-yellow1  flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-secondary"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <p>Depoimentos</p>
        </a>
        <a
          href="#blog"
          className=" text-yellow1 flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-secondary"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <p>Blog</p>
        </a>
        <a
          href="#contato"
          className=" text-yellow1  flex cursor-pointer items-center space-x-5 p-2 pl-5 text-sm font-semibold text-vermelho shadow-lg duration-300 ease-in-out hover:text-secondary"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <p>Contato</p>
        </a>

        <div className="flex items-center justify-center p-10">
          <Image src={logob} alt="logo" />
        </div>
      </div>
    </div>
  );
}
