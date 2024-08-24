
const ProductListingCard = ({ data }) => {
  console.log("data", data);
  return (
      <div className="relative text-[#262626] rounded-md " >
        <span className="bg-white text-[#D0021B] text-xs tracking-wide font-extrabold  z-20 absolute top-2 left-2 p-1">
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

            <div className="">
              <h3 className="mt-4 text-sm  font-bold  ">{data?.name}</h3>
              <h3 className="text-xs">Women green & Blue Abstract Printed Cotton Stole</h3>
        <div className="flex gap-2 items-center">    <p className="mt-1 text-[20px] font-bold tracking">${data?.price}</p>
            <p className="mt-1 text-[13px] line-through text-[#737373]">${data?.price}</p>
            </div>
            <span className="text-[11px] rounded-full px-[10px] py-[2px] font-medium tracking-tight bg-[#FFCA63]">
            500+ bought in past month
            </span>

<div className="text-xs font-bold text-[#737373] mt-2">Black</div>
              <div className="flex justify-between">
              <div className="flex gap-3 py-1">
                <button className="w-5 h-5 rounded-full bg-[#514535] focus:ring-2 hover:ring-2 border-2 border-white ring-[#514535]"></button>
                <button className="w-5 h-5 rounded-full bg-[#3A3840] focus:ring-2 hover:ring-2 border-2 border-white ring-[#3A3840]" ></button>
                <button className="w-5 h-5 rounded-full bg-[#8C7058] focus:ring-2 hover:ring-2 border-2 border-white ring-[#8C7058]"></button>
                <button className="w-5 h-5 rounded-full bg-[#262525] focus:ring-2 hover:ring-2 border-2 border-white ring-[#262525]"></button>
              </div>
              <div className="flex  justify-end ">
            <button type="button" className="inline-flex items-center rounded-lg bg-pink-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
              </svg>
              Add to cart
            </button>
          </div>
              </div>
            </div>


       
   

       
      </div>

 

  )
}

export default ProductListingCard;