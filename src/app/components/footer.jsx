
import Image from "next/image";
import rixxer from "../../../public/rixxer.png"
import logo from "../../../public/logo-principal.png"
const data = new Date()
const ano = data.getFullYear()

export default function Footer() {
    return (
        <div className="mt-10 flex flex-col justify-center items-center">
            <Image src={logo} alt="logo da lavanderia Mundial" width={500}/>
            <div className=" py-5 text-text flex flex-col items-center justify-center text-center">
                <p className="text-xs px-5">
                    Lavanderia Mundial - CNPJ: 0000000000000000000000000 Todos os Direitos Reservados, {ano}
                </p>
                <div className="flex">
                    <p className="text-sm">Developed by &nbsp; </p>{' '}
                    <a href="" className="font-bold text-text hover:text-secondary transition ease-in-out duration-300">
                        <Image src={rixxer} alt="link do site da empresa Rixxer"
                        className="w-16"
                        />
                    </a>
                </div>
            </div>
        </div >
    )
}