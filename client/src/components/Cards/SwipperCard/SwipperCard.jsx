import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

// eslint-disable-next-line react/prop-types
const SwipperCard = ({data}) => {
    
  return (
    <Swiper
    pagination={{
      clickable: true,
    }}
    breakpoints={{
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    }}

  >
    {Array.isArray(data) && data.map((el, index) => {
      return (
        <SwiperSlide key={index}>
          <div className="flex flex-col items-center " >
            <img
              src={el.imagePath}
              alt={el.name}
              className="w-24 h-24"
            />
            <h3 className="mt-4 text-md text-center font-semibold ">
              {el.name}
            </h3>
          </div>
        </SwiperSlide>
      );
    })}
  </Swiper>

  )
}

export default SwipperCard