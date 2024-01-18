import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function WhatsApp() {
  return (
    <div>
      <Link
        href="https://wa.me/5562982008777?text=Quero%20saber%20mais"
        className="WhatsApp"
        target="_blank"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </Link>
    </div>
  );
}
