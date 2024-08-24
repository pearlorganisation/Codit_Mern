import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import ProductListingCard from "../../components/Cards/ProductListingCard/ProductListingCard";
import MultiRangeSlider from "./SupportingComponents/MultiRangeSlider";
import { MdKeyboardArrowUp } from "react-icons/md";


const categoryData = [
  {
    title: "Kurtas"
  },
  {
    title: "Pajamas"
  },
  {
    title: "Pajamas"
  },
  {
    title: "Pajamas"
  }
];

const products = [
  {
    id: "1",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "The Cloud Relaxed Cardigan",
    price: "200"
  },
  {
    id: "2",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "The Cloud Relaxed Cardigan",
    price: "200"
  },
  {
    id: "3",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "The Cloud Relaxed Cardigan",
    price: "200"
  },
  {
    id: "4",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "The Cloud Relaxed Cardigan",
    price: "200"
  },
  {
    id: "5",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "The Cloud Relaxed Cardigan",
    price: "200"
  },
  {
    id: "6",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "The Cloud Relaxed Cardigan",
    price: "200"
  },
  {
    id: "7",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "The Cloud Relaxed Cardigan",
    price: "200"
  },
  {
    id: "8",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "The Cloud Relaxed Cardigan",
    price: "200"
  },
  {
    id: "9",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200"
  },
  {
    id: "10",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200"
  },
  {
    id: "11",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200"
  },
  {
    id: "12",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200"
  },

];



const ProductListing = () => {
  return (
    <div className=" py-2 ">
   
      <div className="grid grid-cols-[20%_auto] gap-10 text-[#262626] ">
<div className="space-y-4 text-sm">
  <div className="text-[#4B5563]">
<span className="font-semibold text-[#1F2937]">Showing 1 - 20</span> out of 2,356 Products
</div>
<div className="border-[0.1rem]  p-3 px-5 border-black  ">
         <div className="border-b text-xs font-extrabold pb-2">
          249 Products
         </div>
         
          <div className="pt-3">
           <div className="flex justify-between items-center "> <p className="font-extrabold">Category</p> <MdKeyboardArrowUp size={20}/></div>
            <div className="flex flex-col py-8 gap-5 px-3 justify-between">
              <div className="flex items-center ">
                <input type="checkbox" className="max-w-7 max-h-7 min-w-7 min-h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                <label htmlFor="checked-checkbox" className="ms-2 text-[13px] font-medium text-gray-900 dark:text-gray-300">Everyone - All Gender Collection </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="max-w-7 max-h-7 min-w-7 min-h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                <label htmlFor="checked-checkbox" className="ms-2 text-[13px] font-medium text-gray-900 dark:text-gray-300">Accessories & Gift Cards </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="max-w-7 max-h-7 min-w-7 min-h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                <label htmlFor="checked-checkbox" className="ms-2 text-[13px] font-medium text-gray-900 dark:text-gray-300">Backpacks, Weekenders & Duffle Bags </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="max-w-7 max-h-7 min-w-7 min-h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                <label htmlFor="checked-checkbox" className="ms-2 text-[13px] font-medium text-gray-900 dark:text-gray-300">Dress Shirts & Button Downs </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="max-w-7 max-h-7 min-w-7 min-h-7 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                <label htmlFor="checked-checkbox" className="ms-2 text-[13px] font-medium text-gray-900 dark:text-gray-300">Hoodies & Sweatshirts </label>
              </div>
            </div>
          </div>

          <div className="">
          <div className="flex justify-between items-center py-2 "> <p className="font-extrabold">Color</p> <MdKeyboardArrowUp size={20}/></div>
   
            <div className="grid grid-cols-3 font-bold tracking-tight text-sm  gap-4">
              <div className="flex flex-col  items-center">  <div className="max-w-7 max-h-7 min-w-7 min-h-7  bg-[#1A1A1A] rounded-full"></div><p>
                Black
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="max-w-7 max-h-7 min-w-7 min-h-7 bg-[#21558D] rounded-full"></div><p>
                Blue
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="max-w-7 max-h-7 min-w-7 min-h-7 bg-[#925C37] rounded-full"></div><p>
                Brown
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="max-w-7 max-h-7 min-w-7 min-h-7 bg-[#585B45] rounded-full"></div><p>
                Green
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="max-w-7 max-h-7 min-w-7 min-h-7 bg-[#E1E1E3] rounded-full"></div><p>
                Grey
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="max-w-7 max-h-7 min-w-7 min-h-7 bg-[#D38632] rounded-full"></div><p>
                Orange
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="max-w-7 max-h-7 min-w-7 min-h-7 bg-[#EFCEC9] rounded-full"></div><p>
                Pink
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="max-w-7 max-h-7 min-w-7 min-h-7 bg-[#BD2830] rounded-full"></div><p>
                Red
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="max-w-7 max-h-7 min-w-7 min-h-7 bg-[#B3A695] rounded-full"></div><p>
                Tan
              </p>
              </div>
            </div>
          </div>
          <div className="">
          <div className="flex justify-between items-center py-8 "> <p className="font-extrabold">Size</p> <MdKeyboardArrowUp size={20}/></div>
   <p className="font-extrabold text-xs text-[#4C4C4B] ps-1 pb-3">Waist</p>
            <div className="grid grid-cols-4 font-bold tracking-tight text-sm  gap-2">
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">36</div>
              </div>
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">36</div>
              </div>
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">36</div>
              </div>
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">36</div>
              </div>
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">36</div>
              </div>
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">36</div>
              </div>
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">36</div>
              </div>
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">36</div>
              </div>
             
     
     
            </div>
   <p className="font-extrabold text-xs text-[#4C4C4B] ps-1 pt-4 py-3">Clothing</p>
            <div className="grid grid-cols-4 font-bold tracking-wide text-base  gap-4">
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">xxs</div>
              </div>
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">xxs</div>
              </div>
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">xxs</div>
              </div>
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">xxs</div>
              </div>
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">xxs</div>
              </div>
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">xxs</div>
              </div>
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">xxs</div>
              </div>
              <div className="flex flex-col justify-center items-center"> 
                 <div className="w-10 h-8 bg-gray-100  rounded-sm flex flex-col justify-center items-center">xxs</div>
              </div>
             
     
     
            </div>
          </div>

          <div className=" ">
          <div className="flex justify-between items-center py-8 "> <p className="font-extrabold">Prices</p> <MdKeyboardArrowUp size={20}/></div>
   
          <MultiRangeSlider min={100} max={10000}/>
          </div>



        </div>

</div>
       

  

          <div className="grid grid-cols-3 gap-10  justify-between items-center">
            {
            products.map((data,idx)=>{
              return(<ProductListingCard data={data} key={idx}/>)
            })
     
            }
          </div>

      </div>


    </div>
  )
}

export default ProductListing;