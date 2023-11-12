"use client"
import Slideshow from "./components/Slider";
import Perguntas from "./components/faq";
import Section01 from "./components/Section01";
import Section02 from "./components/Section02";
import Section03 from "./components/Section03";
import Section04 from "./components/Section04";
import Contato from "./components/Contato";
import Depoimentos from "./components/Depoimentos";

export default function Home() {

  return (
    <div className="pt-5 md:pt-24">
      <Slideshow />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Perguntas />
      <Depoimentos />
      <Contato />
    </div >
  )
}
