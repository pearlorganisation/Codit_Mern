const flashSaleData = [
    {
        title: "Lorem ipsum dolor sit amet.",
        img: "FlashSale.png",
        price: "$1,500"
    },
    {
        title: "Lorem ipsum dolor sit amet.",
        img: "FlashSale.png",
        price: "$1,500"
    },
    {
        title: "Lorem ipsum dolor sit amet.",
        img: "FlashSale.png",
        price: "$1,500"
    },
    {
        title: "Lorem ipsum dolor sit amet.",
        img: "FlashSale.png",
        price: "$1,500"
    }
];



const About = () => {
    return (
        <div className="">

            <div className="grid  border-red-500 grid-cols-2 gap-80  place-content-between px-10 py-4">
                <div className="flex flex-col gap-4 ">
                    <span className="text-3xl py-6">Rabia - largest clothes retail shop in the world.</span>
                    <p className="font-thin">
                        Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit vestibulum risus, ac tincidunt diam lectus id magna. Praesent maximus lobortis neque sit amet rhoncus. Nullam tempus lectus a dui aliquet, non ultricies nibh elementum. Nulla ac nulla dolor.
                    </p>
                    <div className="flex py-4 flex-col gap-4">
                        <div className="flex gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.875 7.875L5.625 16.125L1.5 12" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22.4999 7.875L14.2499 16.125L12.0562 13.9313" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                            <p>Great 24/7 customer services.</p></div>




                        <div className="flex gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.875 7.875L5.625 16.125L1.5 12" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22.4999 7.875L14.2499 16.125L12.0562 13.9313" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                            <p>600+ Dedicated employe.</p></div>
                        <div className="flex gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.875 7.875L5.625 16.125L1.5 12" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22.4999 7.875L14.2499 16.125L12.0562 13.9313" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                            <p>50+ Branches all over the world.</p></div>
                        <div className="flex gap-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.875 7.875L5.625 16.125L1.5 12" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22.4999 7.875L14.2499 16.125L12.0562 13.9313" stroke="#2DB324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                            <p>Over 1 Million Electronics Products</p></div>






                    </div>
                </div>
                <div>
                    <img src="About.png" alt="about_us " className="" />
                </div>
            </div>


          

            <div className="grid grid-cols-4 p-10">
                <div className="p-4">
                    <h1 className="uppercase pb-4 text-[#191C1F]  font-semibold">flash sale today</h1>
                    <div className=" flex flex-col gap-8 ">
                    {flashSaleData.map((el, index) => {
                        return (
                            <>
                                <div key={index} style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} className="flex gap-8 p-5 py-4">
                                    <div>
                                        <img src={el.img} alt="flash sale" />
                                    </div>
                                    <div>
                                        <h1>{el.title}</h1>
                                        <p>{el.price}</p>
                                        <button className="text-green-500 hover:text-green-300">Go to Product</button>
                                    </div>

                                </div>
                            </>
                        );
                    })
                    }
                    </div>


                </div>
                <div className="p-4">
                    <h1 className="uppercase pb-4 text-[#191C1F]  font-semibold">flash sale today</h1>
                    <div className=" flex flex-col gap-8 ">
                    {flashSaleData.map((el, index) => {
                        return (
                            <>
                                <div key={index} style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} className="flex gap-8 p-5 py-4">
                                    <div>
                                        <img src={el.img} alt="flash sale" />
                                    </div>
                                    <div>
                                        <h1>{el.title}</h1>
                                        <p>{el.price}</p>
                                        <button className="text-green-500 hover:text-green-300">Go to Product</button>
                                    </div>

                                </div>
                            </>
                        );
                    })
                    }
                    </div>


                </div>
                <div className="p-4">
                    <h1 className="uppercase pb-4 text-[#191C1F]  font-semibold">flash sale today</h1>
                    <div className=" flex flex-col gap-8 ">
                    {flashSaleData.map((el, index) => {
                        return (
                            <>
                                <div key={index} style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} className="flex gap-8 p-5 py-4">
                                    <div>
                                        <img src={el.img} alt="flash sale" />
                                    </div>
                                    <div>
                                        <h1>{el.title}</h1>
                                        <p>{el.price}</p>
                                        <button className="text-green-500 hover:text-green-300">Go to Product</button>
                                    </div>

                                </div>
                            </>
                        );
                    })
                    }
                    </div>


                </div>
                <div className="p-4">
                    <h1 className="uppercase pb-4 text-[#191C1F]  font-semibold">flash sale today</h1>
                    <div className=" flex flex-col gap-8 ">
                    {flashSaleData.map((el, index) => {
                        return (
                            <>
                                <div key={index} style={{boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px"}} className="flex gap-8 p-5 py-4">
                                    <div>
                                        <img src={el.img} alt="flash sale" />
                                    </div>
                                    <div>
                                        <h1>{el.title}</h1>
                                        <p>{el.price}</p>
                                        <button className="text-green-500 hover:text-green-300">Go to Product</button>
                                    </div>

                                </div>
                            </>
                        );
                    })
                    }
                    </div>


                </div>
               

            </div>

            <div className="w-full h-[80vh] text-white bg-[#B13481]  flex justify-center items-center ">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl text-center">Subscribe to our newsletter </h1>
                    <div className="flex text-sm text-slate-100 justify-center items-center py-4 w-1/2 ">
                        <p>
                            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.  </p></div>
                    <div>
                        <form action="#" className="py-6" >
                            <div className="items-center  mb-3 space-y-4  sm:flex sm:space-y-0">
                                <div className="relative w-full" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                                    <label htmlFor="email" className="hidden  mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>

                                    <input className="block p-3 pl-10 w-[500px] h-[60px] text-sm text-gray-900 bg-gray-50    border-gray-300  focus:ring-primary-500 rounded-sm focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter your email" type="email" id="email" required="" />
                                    <div className="absolute top-2 right-2 ">
                                        <button type="submit" className="py-3 px-5 w-full text-sm font-medium text-center text-white   cursor-pointer bg-[#FA8232] hover:bg-[#f3731e] rounded-sm hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 ">
                                            <div className="flex gap-2">
                                                <p className="uppercase text-sm">
                                                    Subscribe
                                                </p>
                                                <div>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.125 10H16.875" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>

                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>



                </div>
            </div>





        </div>
    )
}

export default About