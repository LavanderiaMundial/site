"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import logo from "../../../public/logo-principal.png"


const CustomLink = ({ href, title, className = "" }) => {
    return (
        <a href={href} className={`${className} group relative z-10   font-bold  w-auto px-2 text-center justify-center items-center flex hover:text-light transition-all duration-300 text-primary uppercase`}>
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
    return (
        <div>
            <div className="fixed z-50 backdrop-blur-lg bg-white/50 w-screen flex justify-between px-16 items-end pb-5 space-x-10">
                <Image src={logo} alt="logo da empresa" className=" w-48" />
                <div className="space-x-8 flex ">
                    <CustomLink href="#inicio" title="Inicio" />
                    <CustomLink href="#servicos" title="Serviços" />
                    <CustomLink href="#formadelimpeza" title="Formas de Limpeza" />
                    <CustomLink href="#contato" title="Contato" />
                </div>
            </div>
        </div>
    )
}