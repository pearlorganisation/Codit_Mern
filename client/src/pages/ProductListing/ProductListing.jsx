import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import ProductListingCard from "../../components/Cards/ProductListingCard/ProductListingCard";
import MultiRangeSlider from "./SupportingComponents/MultiRangeSlider";


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
    name: "dummyProduct",
    price: "200$"
  },
  {
    id: "2",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$"
  },
  {
    id: "3",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$"
  },
  {
    id: "4",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$"
  },
  {
    id: "5",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$"
  },
  {
    id: "6",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$"
  },
  {
    id: "7",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$"
  },
  {
    id: "8",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$"
  },
  {
    id: "9",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$"
  },
  {
    id: "10",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$"
  },
  {
    id: "11",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$"
  },
  {
    id: "12",
    href: '/',
    imageSrc: "dummyProduct2.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$"
  },

];



const ProductListing = () => {
  return (
    <div className="">
      <div className="p-4 flex gap-10 bg-[#F2F4F5] my-2 bg-color-black">
        <h1 className="text-blue-500">Showing 1-20 out of 2,345 Products </h1>
        <p className="font-bold text-md ">
            Men’s Winter Wear
          </p>
      </div>

      <div className="grid grid-cols-[20%_auto] gap-10 ">

        <div className="border-[0.1rem] border-dashed p-2 border-black  ">
          <div className="">
            <p className="font-bold">Category</p>
            <div className="flex flex-col py-8 gap-10 px-3 justify-between">
              <div className="flex items-center ">
                <input type="checkbox" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Everyone - All Gender Collection </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accessories & Gift Cards </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Backpacks, Weekenders & Duffle Bags </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dress Shirts & Button Downs </label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " />
                <label htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Hoodies & Sweatshirts </label>
              </div>
            </div>
          </div>

          <div className="">
            <p className="text-md font-bold py-2">Color</p>
            <div className="grid grid-cols-3   gap-4">
              <div className="flex flex-col  items-center">  <div className="w-6 h-6  bg-black rounded-full"></div><p>
                Green
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="w-6 h-6 bg-blue-400 rounded-full"></div><p>
                Blue
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="w-6 h-6 bg-[#925C37] rounded-full"></div><p>
                Brown
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="w-6 h-6 bg-black rounded-full"></div><p>
                Green
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="w-6 h-6 bg-green-400 rounded-full"></div><p>
                black
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="w-6 h-6 bg-green-400 rounded-full"></div><p>
                black
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="w-6 h-6 bg-black rounded-full"></div><p>
                Green
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="w-6 h-6 bg-green-400 rounded-full"></div><p>
                black
              </p>
              </div>
              <div className="flex flex-col items-center">  <div className="w-6 h-6 bg-green-400 rounded-full"></div><p>
                black
              </p>
              </div>
            </div>
          </div>

          <div className=" ">
            <p className="text-xl font-bold py-4">Prices</p>
          <MultiRangeSlider min={100} max={10000}/>
          </div>



        </div>


        <div className="border p-5">

          <div className="grid grid-cols-3 gap-10  justify-between items-center">
            {
            products.map((data,idx)=>{
              return(<ProductListingCard data={data} key={idx}/>)
            })
     
            }
          </div>
        </div>
      </div>


    </div>
  )
}

export default ProductListing;