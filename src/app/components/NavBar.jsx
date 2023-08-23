"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import logo from "../../../public/logo-principal.png"


const CustomLink = ({ href, title, className = "" }) => {
    const pathname = usePathname();


    return (
        <Link href={href} className={`${className} group relative z-10   font-bold  w-16 text-center justify-center items-center flex hover:text-light transition-all duration-300 ${pathname === href ? "text-light" : "text-primary"} `}>
            {title}
            <span
                className={`-z-20 h-0 w-16 inline-block rounded absolute left-0 -bottom-0.5  group-hover:h-11 transition-[height] ease duration-300 ${pathname === href ? "h-11" : "h-0"} 
                gradient-container bg-gradient-to-t from-primary to-secondary
                `}
            >
                &nbsp;
            </span>

        </Link>
    );
};

export default function NavBar() {
    return (
        <div>


            <div className="fixed z-50 backdrop-blur-lg bg-white/50 w-screen flex justify-between px-16 items-end pb-5  space-x-10">
                <Image src={logo} alt="logo da empresa" className=" w-48" />
                <div className="space-x-8 flex ">
                    <CustomLink href="/" title="Lorem" />
                    <CustomLink href="#" title="Lorem" />
                    <CustomLink href="#" title="Lorem" />
                    <CustomLink href="#" title="Lorem" />
                    <CustomLink href="#" title="Lorem" />
                    <CustomLink href="#" title="Lorem" />
                </div>
            </div>
        </div>
    )
}