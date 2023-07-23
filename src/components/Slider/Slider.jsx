import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderData from "./sliderData";

const Slider = () => {
  return (
    <div className="container my-5 py-5">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        //   onSwiper={(swiper) => console.log(swiper)}
        //   onSlideChange={() => console.log("slide change")}
      >
        {sliderData.map((slide) => {
          const { id, image } = slide;
          return (
            <SwiperSlide key={id}>
              <img src={image} alt="grocery-banner" className="w-100" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
