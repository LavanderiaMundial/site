import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Depoimentos1 from "../../../public/Depoimentos1.png";
import Depoimentos2 from "../../../public/Depoimentos2.png";
import Depoimentos3 from "../../../public/Depoimentos3.png";
import Depoimentos4 from "../../../public/Depoimentos4.png";
import Depoimentos5 from "../../../public/Depoimentos5.png";
import Depoimentos6 from "../../../public/Depoimentos6.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Depoimentos = () => {
  return (
    <div
      id="depoimentos"
      className="p-5 md:p-16 md:pt-10 gradient-container bg-gradient-to-t from-primary to-secondary"
    >
      <div className="titulo">
        <h2 className="font-bold text-2xl text-light flex justify-center item-center">
          Depoimentos
        </h2>
        <h4 className="font-bold text-yellow-200 flex justify-center item-center pb-7">
          Confira os depoimentos de quem já utilizou nossos serviços:
        </h4>
      </div>

      <div className="slider desktop">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image
              src={Depoimentos1}
              alt="Depoimentos"
              width={520}
              height={356}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={Depoimentos2}
              alt="Depoimentos"
              width={520}
              height={356}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={Depoimentos3}
              alt="Depoimentos"
              width={520}
              height={356}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={Depoimentos4}
              alt="Depoimentos"
              width={520}
              height={356}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={Depoimentos5}
              alt="Depoimentos"
              width={520}
              height={356}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={Depoimentos6}
              alt="Depoimentos"
              width={520}
              height={356}
            />
          </SwiperSlide>
        </Swiper>
      </div>








      <div className="slider smartphone">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Image
              src={Depoimentos1}
              alt="Depoimentos"
              width={520}
              height={356}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={Depoimentos2}
              alt="Depoimentos"
              width={520}
              height={356}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={Depoimentos3}
              alt="Depoimentos"
              width={520}
              height={356}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={Depoimentos4}
              alt="Depoimentos"
              width={520}
              height={356}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={Depoimentos5}
              alt="Depoimentos"
              width={520}
              height={356}
            />
          </SwiperSlide>

          <SwiperSlide>
            <Image
              src={Depoimentos6}
              alt="Depoimentos"
              width={520}
              height={356}
            />
          </SwiperSlide>
        </Swiper>
      </div>




      <div className="setas pt-5 justify-center content-center align-center text-center">
        <FontAwesomeIcon icon={faLightbulb} className="text-yellow-200" />
        <span className="text-light text-sm">
          {" "}
          Dica: Arraste para os lados para ver todos os depoimentos.
        </span>
      </div>

    </div>
  );
};

export default Depoimentos;
