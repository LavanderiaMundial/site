"use client";
import React, { useRef } from "react";
import Image from "next/image";
import logo from "../../../public/logo-principal.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const CustomLink = ({ href, title, className = "", onClick }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <a
      href={href}
      className={`${className} group relative z-10 font-bold w-auto px-2 text-center justify-center items-center flex hover:text-light transition-all duration-300 text-primary uppercase`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`-z-20 h-0 w-full inline-block rounded absolute left-0 -bottom-0.5  group-hover:h-7 transition-[height] ease duration-300 
                  gradient-container bg-gradient-to-t from-primary to-secondary
                  `}
      >
        &nbsp;
      </span>
    </a>
  );
};

export default function NavBar() {
  const navbarRef = useRef();

  const handleLinkClick = () => {
    const navbarHeight = navbarRef.current.clientHeight;
    const targetId = event.target.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset = targetElement.offsetTop - navbarHeight;
      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="hidden md:block">
      <div
        ref={navbarRef}
        className="fixed z-50 backdrop-blur-lg bg-white/50 w-screen flex justify-between px-8 items-end pb-5 space-x-10"
      >
        <Link href="/">
          <Image src={logo} alt="logo da empresa" className=" w-48" />
        </Link>

        <div className="space-x-8 flex">
          <Link href="tel:+5562982008777" className="text-primary font-bold">
            <span className="font-bold text-primary">
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="font-bold text-primary"
              />{" "}
              &nbsp;(62) 98200-8777
            </span>
          </Link>
          <CustomLink
            href="#servicos"
            title="Serviços"
            onClick={handleLinkClick}
          />
          <div className="group relative cursor-pointer">
            <h2 className="text-primary font-bold uppercase">
              Onde Atuamos
              <FontAwesomeIcon
                icon={faCaretDown}
                className="ml-2 animate-bounce w-4"
              />
            </h2>
            <div className="opacity-0 group-hover:opacity-100 -bottom-14 space-y-2 absolute transition-all duration-300">
              <CustomLink
                href="#residencial"
                title="Residencial"
                className="!text-light"
                onClick={handleLinkClick}
              />
              <CustomLink
                href="#comercial"
                title="Comercial"
                className="!text-light hover:text-zinc-600"
                onClick={handleLinkClick}
              />
            </div>
          </div>
          <CustomLink
            href="#perguntas"
            title="Perguntas frequentes"
            onClick={handleLinkClick}
          />
          <CustomLink
            href="#depoimentos"
            title="Depoimentos"
            onClick={handleLinkClick}
          />
          <CustomLink href="#blog" title="Blog" onClick={handleLinkClick} />
          <CustomLink
            href="#contato"
            title="Contato"
            onClick={handleLinkClick}
          />
        </div>
      </div>
    </div>
  );
}
