// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import brewbite from "../assets/brewbite-express-home.png";
import thePipes from "../assets/the-pipes-home.png";
import bhraman from "../assets/bhraman-guide-home.png";

const MyWorks = () => {
  return (
    <>
      <section className="pb-12">
        <h2 className="text-4xl font-extrabold mb-10">
          <span className="text-green-500">My</span> Work
        </h2>
        {/* Slider */}
        <Swiper slidesPerView={3} spaceBetween={30} 
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}>
          <SwiperSlide>
            <a href="https://github.com/protamim/brewbite-express-client" target="_blank" rel="noreferrer">
              <img className="rounded-lg" src={brewbite} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://github.com/protamim/the-pipes-client" target="_blank" rel="noreferrer">
              <img className="rounded-lg" src={thePipes} alt="" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://github.com/protamim/tour-guide-client" target="_blank" rel="noreferrer">
              <img className="rounded-lg" src={bhraman} alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default MyWorks;
