import React from 'react'

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
        imagePath: "season_Collection.png",
        price: 100,
    },
    {
        name: "Sweater",
        imagePath: "season_Collection.png",
        price: 80,
    },
    {
        name: "Shirt",
        imagePath: "season_Collection.png",
        price: 90,
    },
    {
        name: "T-Shirt",
        imagePath: "season_Collection.png",
        price: 70,
    },
    {
        name: "Hoodie",
        imagePath: "season_Collection.png",
        price: 85,
    },
];

const WomensCollection = () => {
    return (
        <div>
            <div
                className="h-96"
                style={{
                    backgroundImage: `url('/homeFrame.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
            </div>
            {/* womens collection */}

            <div className='grid space-y-4'>
                <div className='w-full bg-slate-300 flex flex-row mt-8 px-2 justify-between'><span className='text-2xl font-semibold'>Womens Collection</span><button className='text-2xl font-semibold'>See All</button></div>
                <CollectionCard data={mensCollection} />
                
             
         
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

export default WomensCollection