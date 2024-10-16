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

const kidCollection = [
    {
        name: "Jacket",
        imagePath: "kid1.jpg",
        price: 100,
    },
    {
        name: "Sweater",
        imagePath: "kid2.jpg",
        price: 80,
    },
    {
        name: "Shirt",
        imagePath: "kid3.jpg",
        price: 90,
    },
    {
        name: "T-Shirt",
        imagePath: "kid4.jpg",
        price: 70,
    },
    {
        name: "Hoodie",
        imagePath: "kid5.jpg",
        price: 85,
    },
];

const KidsCollection = () => {
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
            {/* Kids collection */}

            <div className='grid space-y-4'>
                <div className='w-full bg-slate-300 flex flex-row mt-8 px-2 justify-between'><span className='text-2xl font-semibold'>Kids Collection</span><button className='text-2xl font-semibold'>See All</button></div>
                <h1 className='text-2xl font-semibold'>Boys Collection</h1>
                <CollectionCard data={kidCollection} />
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
                <h1 className='text-2xl font-semibold'>Girls Collection</h1>
                <CollectionCard data={kidCollection} />
            </div>
        </div>
    )
}

export default KidsCollection