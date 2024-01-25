import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import "./index.scss"
const Hero = () => {
  return (
    <section>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="bg-[url('https://preview.colorlib.com/theme/tasty/images/bg_2.jpg')] min-h-[80vh] bg-center bg-cover bg-no-repeat bg-opacity-70">
                <div className="flex justify-center items-center min-h-[80vh] flex-col">
                    <h1 className=" textFont [font-size:_clamp(2em,5vw,10em)] font-bold text-white ">
                            Tasty & Delicios
                    </h1>   
                    <div>
                        <button className="py-2 px-4 border border-white text-white hover:bg-white duration-500 hover:text-black">
                            Book a Table
                        </button>
                    </div>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[url('https://preview.colorlib.com/theme/tasty/images/bg_1.jpg')] min-h-[80vh] bg-center bg-cover bg-no-repeat bg-opacity-70">
                <div className="flex justify-center items-center min-h-[80vh] flex-col">
                    <h1 className="textFont [font-size:_clamp(2em,5vw,10em)] font-bold text-white ">
                            Tasty & Delicios
                    </h1>   
                    <div>
                        <button className="py-2 px-4 border border-white text-white hover:bg-white duration-500 hover:text-black">
                            Book a Table
                        </button>
                    </div>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
