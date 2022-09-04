import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import c1 from "../assets/img/carousel/c1.jpg";
import c2 from "../assets/img/carousel/c2.jpg";
import c3 from "../assets/img/carousel/c3.jpg";
import c4 from "../assets/img/carousel/c4.jpg";
import c5 from "../assets/img/carousel/c5.jpg";
// import c6 from "../assets/img/carousel/c6.jpg";
// import c7 from "../assets/img/carousel/c7.jpg";
// import c8 from "../assets/img/carousel/c8.jpg";
// import c9 from "../assets/img/carousel/c9.jpg";
import c10 from "../assets/img/carousel/c10.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper bg-sky-800"
      >
        <SwiperSlide>
          <div className="imgContainer">
            <h1 className="text-white font-extrabold text-5xl imgText"> </h1>
            <img
              className="object-fill w-full max-h-screen"
              src={c10}
              alt="slide 1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <h1 className="text-white font-extrabold text-5xl imgText"> </h1>
            <img
              className="object-fill w-full max-h-screen"
              src={c4}
              alt="slide 2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <h1 className="text-white font-extrabold text-5xl imgText"> </h1>
            <img
              className="object-fill w-full max-h-screen"
              src={c5}
              alt="slide 2"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <h1 className="text-white font-extrabold text-5xl imgText"> </h1>
            <img
              className="object-fill w-full max-h-screen"
              src={c2}
              alt="slide 3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="imgContainer">
            <h1 className="text-white font-extrabold text-5xl imgText"> </h1>
            <img
              className="object-fill w-full max-h-screen"
              src={c3}
              alt="slide 3"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
