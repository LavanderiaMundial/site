import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function WhatsApp() {
  return (
    <div>
      <Link
        href="https://wa.me/5562982008777?text=Visitei%20seu%20site%20gostaria%20de%20mais%20informações"
        className="WhatsApp"
        target="_blank"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </Link>
    </div>
  );
}
