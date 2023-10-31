import React from "react"
import { motion } from "framer-motion"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contato = () => {

    return (
        <div id="contato" className="pt-12 pb-12 px-5 md:px-16 bg-zinc-100">
            <h2 className="font-bold text-2xl text-black/90">Onde Estamos</h2>
            <div className="item-center mt-3 gradient-container bg-gradient-to-t from-primary to-secondary h-1 w-20 rounded-xl" />
            <div className="mt-10 rounded-xl md:flex">
                <div className="md:w-1/2 rounded-xl z-20">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3821.793896370712!2d-49.220685!3d-16.687194!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef12a8266be0f%3A0x8e32126a4523c014!2sLavanderia%20Mundial!5e0!3m2!1spt-BR!2sbr!4v1692900600663!5m2!1spt-BR!2sbr" width="600" height={300} loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=" mb-5 rounded-xl  drop-shadow-drop1 w-full md:h-[500px]">
                    </iframe>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center gap-5 z-10">
                    <motion.div initial={{ x: -400 }} whileInView={{ x: 0 }} transition={{ duration: 1, delay: 0.5 }} exit={{ x: -400 }} className="hidden -z-10 md:flex flex-col justify-center items-center text-center gap-5 bg-gradient-to-t from-primary to-secondary rounded-e-xl h-96">
                        <h2 className="text-xl px-5"><span className="text-light font-bold">Endereço:</span> <span className="text-yellow-200 font-bold">R. Colômbia, Quadra 14 - lote 20 - Vila Maria Luiza, Goiânia - GO, 74720-190</span></h2>
                        <h2><span className="text-light font-bold">E-mail:</span> <span className="text-yellow-200 font-bold">lavanderiamundial.mkt@gmail.com</span></h2>
                        <div className="space-x-5">
                            <Link href="https://instagram.com/lavanderia_mundial" target="_blank" className="">
                                <FontAwesomeIcon icon={faInstagram} className="text-light h-10" />
                            </Link>
                            <Link href="https://facebook.com/mundial.lavanderia" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} className="text-light h-10" />
                            </Link>
                            <Link href="https://wa.me/5562982008777" target="_blank">
                                <FontAwesomeIcon icon={faWhatsapp} className="text-light h-10" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="md:w-1/2 md:hidden flex flex-col  justify-center items-center gap-5 ">
                    <div
                        className="-z-10 flex flex-col justify-center items-center text-center gap-5 bg-gradient-to-t from-primary to-secondary rounded-xl h-96">
                        <h2 className="text-xl px-5"><span className="text-light font-bold">Endereço:</span> R. Colômbia, Quadra 14 - lote 20 - Vila Maria Luiza, Goiânia - GO, 74720-190</h2>
                        <h2><span className="text-light font-bold">E-mail:</span> contato@lavanderiamundial.com.br</h2>
                        <div className="space-x-5">
                            <Link href="#" target="_blank" className="">
                                <FontAwesomeIcon icon={faInstagram} className="text-light h-10" />
                            </Link>
                            <Link href="#" target="_blank">
                                <FontAwesomeIcon icon={faFacebook} className="text-light h-10" />
                            </Link>
                            <Link href="#" target="_blank">
                                <FontAwesomeIcon icon={faWhatsapp} className="text-light h-10" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contato;