import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";
import womenCollectionImage from "../../images/Ellipse 19.png";
import accessoriesCollectionImage from "../../images/Ellipse 19 (1).png";
import islamicCollectionImage from "../../images/Ellipse 19 (2).png";
import kidsCollectionImage from "../../images/Ellipse 19 (3).png";
import mensCollectionImage from "../../images/Ellipse 19 (4).png";
import giftItemsImage from "../../images/Ellipse 20.png";

const collections = [
  {
    name: "WOMEN'S COLLECTION",
    imagePath: womenCollectionImage,
  },
  {
    name: "ACCESSORIES COLLECTION",
    imagePath: accessoriesCollectionImage,
  },
  {
    name: "ISLAMIC COLLECTION",
    imagePath: islamicCollectionImage,
  },
  {
    name: "KID'S COLLECTION",
    imagePath: kidsCollectionImage,
  },
  {
    name: "MEN'S COLLECTION",
    imagePath: mensCollectionImage,
  },
  {
    name: "GIFT ITEMS",
    imagePath: giftItemsImage,
  },
];

export function Collections() {
  return (
    <>
      <h2 className="text-center text-3xl font-semibold mb-8">
        OUR COLLECTIONS
      </h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        className="!w-full"
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
        // modules={[Pagination]}
        // className="mySwiper"
      >
        {collections?.map((collection, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <img
                  src={collection.imagePath}
                  alt={collection.name}
                  className="w-24 h-24"
                />
                <h3 className="mt-4 text-lg text-center font-medium ">
                  {collection.name}
                </h3>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
