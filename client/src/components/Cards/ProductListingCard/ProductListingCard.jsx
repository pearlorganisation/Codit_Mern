
const ProductListingCard = ({ data }) => {
  console.log("data", data);
  return (
    <div className="relative border-pink-300  border-[0.01rem]">
      <div className="relative border  rounded-md " style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
        <span className="bg-white text-[#D0021B]  z-20 absolute top-2 left-2 p-1">
          30% OFF
        </span>
        <a href={data?.href} className="group">
          <div className="   overflow-hidden  bg-gray-200 ">
            <img
              alt={data?.imageAlt}
              src={data?.imageSrc}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
            
          </div>
          </a>
          <div className=" flex items-center  p-3   justify-between  px-4">
            <div className="">
              <h3 className="mt-4 text-xl font-thin text-black">{data?.name}</h3>
              <h3 className="text-[#737373]">Green</h3>
              <div className="grid grid-cols-4 py-4">
                <button className="w-5 h-5 rounded-full bg-green-400 focus:ring-2 hover:ring-2 border-2 border-white ring-green-400"></button>
                <button className="w-5 h-5 rounded-full bg-red-400 focus:ring-2 hover:ring-2 border-2 border-white ring-red-400" ></button>
                <button className="w-5 h-5 rounded-full bg-blue-400 focus:ring-2 hover:ring-2 border-2 border-white ring-blue-400"></button>
                <button className="w-5 h-5 rounded-full bg-yellow-400 focus:ring-2 hover:ring-2 border-2 border-white ring-yellow-400"></button>
              </div>
            </div>

            <p className="mt-1 text-lg font-medium text-blue-600">{data?.price}</p>

          </div>
          <div className="flex  justify-end p-2">
            <button type="button" className="inline-flex items-center rounded-lg bg-pink-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
              </svg>
              Add to cart
            </button>
          </div>

       
      </div>

    </div>

  )
}

export default ProductListingCard;