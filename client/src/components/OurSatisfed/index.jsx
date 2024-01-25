import React from "react";
import SectionTitle from "../sectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const OurSatisfed = () => {

    const breakpoints = {
            968: {
              spaceBetween: 30,
              slidesPerView: 3,
            },
            640: {
                spaceBetween: 20,
                slidesPerView: 2,
              },

            0: {
              spaceBetween: 20,
              slidesPerView: 1,
            },
    }
  return (
    <section className="py-20">
      <div className="wrapper">
        <SectionTitle />
        <div className="py-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            breakpoints={breakpoints}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className=" shadow-md flex justify-center items-center flex-col gap-4 py-6 px-6">
                <div>
                  <img
                    src="https://preview.colorlib.com/theme/tasty/images/person_3.jpg"
                    className="w-28  h-28 rounded-full"
                    alt=""
                  />
                </div>
                <div className="flex justify-center items-center text-center gap-4 flex-col">
                  <span className="flex gap-2 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  <p className="w-8/12">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam
                  </p>
                  <p>Dennis Green</p>
                  <p>Guests FROM itALY</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="  flex justify-center items-center flex-col gap-4 py-6 px-6">
                <div>
                  <img
                    src="https://preview.colorlib.com/theme/tasty/images/person_2.jpg"
                    className="w-28  h-28 rounded-full"
                    alt=""
                  />
                </div>
                <div className="flex justify-center items-center text-center gap-4 flex-col">
                  <span className="flex gap-2 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  <p className="w-8/12 text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam
                  </p>
                  <p>Dennis Green</p>
                  <p>Guests FROM itALY</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" shadow-md flex justify-center items-center flex-col gap-4 py-6 px-6">
                <div>
                  <img
                    src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg"
                    className="w-28  h-28 rounded-full"
                    alt=""
                  />
                </div>
                <div className="flex justify-center items-center text-center gap-4 flex-col">
                  <span className="flex gap-2 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  <p className="w-8/12">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam
                  </p>
                  <p>Dennis Green</p>
                  <p>Guests FROM itALY</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" shadow-md flex justify-center items-center flex-col gap-4 py-6 px-6">
                <div>
                  <img
                    src="https://preview.colorlib.com/theme/tasty/images/person_4.jpg"
                    className="w-28  h-28 rounded-full"
                    alt=""
                  />
                </div>
                <div className="flex justify-center items-center text-center gap-4 flex-col">
                  <span className="flex gap-2 text-yellow-500">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  <p className="w-8/12">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam
                  </p>
                  <p>Dennis Green</p>
                  <p>Guests FROM itALY</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurSatisfed;
