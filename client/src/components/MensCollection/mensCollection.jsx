import React from 'react'
import ProductCard from '../Cards/ProductCard/ProductCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import CollectionCard from '../CollectionCard/CollectionCard';

const homeSwipper = [
  "homeFrame.png",
  "homeFrame.png",
  "homeFrame.png",
  "homeFrame.png",
];

const mensCollection = [
  {
    name: "Jacket",
    imagePath: "jacket.jpg",
    price: 100,
  },
  {
    name: "Sweater",
    imagePath: "shirt1.jpg",
    price: 80,
  },
  {
    name: "Shirt",
    imagePath: "shirt2.jpg",
    price: 90,
  },
  {
    name: "T-Shirt",
    imagePath: "shirt3.jpg",
    price: 70,
  },
  {
    name: "Hoodie",
    imagePath: "shirt4.jpg",
    price: 85,
  },
];

const MensCollection = () => {
  return (
    <div>
      <div className="">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {homeSwipper.map((el, index) => {
          return (
            <SwiperSlide key={index}>
              <div>
                <img src={el} alt="img" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
      {/* mens collection */}

      <div className='grid space-y-4'>
        <div className='w-full bg-slate-300 flex flex-row mt-8 px-2 justify-between'><span className='text-2xl font-semibold'>Mens Collection</span><button className='text-2xl font-semibold'>See All</button></div>
        <CollectionCard data={mensCollection} />
        {/* <div className="grid grid-cols-4 justify-center items-center gap-6 shadow-md">
          {mensCollection.map((el, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-3 justify-center items-center p-5 rounded-md"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <img src={el.imagePath} alt="img" />
                <h1 className="font-semibold text-md">{el.name}</h1>
                
                <h1 className="font-semibold text-md">${el.price}</h1>
                <button className='text-white bg-pink-700 w-full rounded-md h-10'>Add To Cart</button>
              </div>
            );
          })}
        </div> */}
        <div className="flex flex-col md:flex-col lg:flex-row lg:gap-6 gap-2 w-full h-full  p-6">
          <div className="lg:w-1/2 sm:w-full bg-gray-400 flex flex-col justify-between">
            <div className="flex flex-col p-3">
              <h1 className="text-4xl font-light">
                Discover Your Perfect.
                <br />
                <span>Look Today</span>
              </h1>
              <p className="text-justify pl-3">
                Lorem ipsum dolor sit amet. Et inventore sint est veritatis rerum sit
                repellendus alias. Quo dolore illo hic numquam dolores ut inventore quod
                et fugiat quas! Et optio dolorum in dolor dolor sed dolores nostrum ut
                aspernatur illo. Eos incidunt omnis eum galisum beatae et harum
                excepturi?
              </p>
              <div className="flex flex-row justify-start gap-4 pl-3 mt-1">
                <button className="text-white bg-pink-400 w-40 text-xl">Shop Now</button>
                <button className="text-black border-2 border-black bg-inherit w-max text-xl font-semibold px-2">
                  Discover Collection
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 sm:w-full h-full flex items-stretch">
            <img src={homeSwipper[1]} alt="img" className="w-full h-full object-cover" />
          </div>
        </div>
        <CollectionCard data={mensCollection} />
      </div>
    </div>
  )
}

export default MensCollection