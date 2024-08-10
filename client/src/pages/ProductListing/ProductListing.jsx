import ProductListingCard from "../../components/Cards/ProductListingCard/ProductListingCard";
import MultiRangeSlider from "./SupportingComponents/MultiRangeSlider";
import { SearchBar } from "./SupportingComponents/SearchBar";
import SortByFilter from "./SupportingComponents/SortByFilter";

const categoryData=[
  {
   title:"Kurtas"
  },
  {
  title:"Pajamas"
  },
  {
  title:"Pajamas"
  },
  {
  title:"Pajamas"
  }
];

const products = [
  {
    id:"1",
    href:'/',
    imageSrc:"DummyProduct.png",
    imageAlt:"someproduct",
    name:"dummyProduct",
    price:"200$"
  },
  {
    id:"2",
    href:'/',
    imageSrc:"DummyProduct.png",
    imageAlt:"someproduct",
    name:"dummyProduct",
    price:"200$"
  },
  {
    id:"3",
    href:'/',
    imageSrc:"DummyProduct.png",
    imageAlt:"someproduct",
    name:"dummyProduct",
    price:"200$"
  },
  {
    id:"4",
    href:'/',
    imageSrc:"DummyProduct.png",
    imageAlt:"someproduct",
    name:"dummyProduct",
    price:"200$"
  },
  {
    id:"1",
    href:'/',
    imageSrc:"DummyProduct.png",
    imageAlt:"someproduct",
    name:"dummyProduct",
    price:"200$"
  },
  {
    id:"2",
    href:'/',
    imageSrc:"DummyProduct.png",
    imageAlt:"someproduct",
    name:"dummyProduct",
    price:"200$"
  },
  {
    id:"3",
    href:'/',
    imageSrc:"DummyProduct.png",
    imageAlt:"someproduct",
    name:"dummyProduct",
    price:"200$"
  },
  {
    id:"4",
    href:'/',
    imageSrc:"DummyProduct.png",
    imageAlt:"someproduct",
    name:"dummyProduct",
    price:"200$"
  },
  {
    id:"1",
    href:'/',
    imageSrc:"DummyProduct.png",
    imageAlt:"someproduct",
    name:"dummyProduct",
    price:"200$"
  },
  {
    id:"2",
    href:'/',
    imageSrc:"DummyProduct.png",
    imageAlt:"someproduct",
    name:"dummyProduct",
    price:"200$"
  },
  {
    id:"3",
    href:'/',
    imageSrc:"DummyProduct.png",
    imageAlt:"someproduct",
    name:"dummyProduct",
    price:"200$"
  },
  {
    id:"4",
    href:'/',
    imageSrc:"DummyProduct.png",
    imageAlt:"someproduct",
    name:"dummyProduct",
    price:"200$"
  },

];



const Product = () => {
  return (
    <div className="">
      <div className="p-4 bg-[#F2F4F5] my-2 bg-color-black">
        <h1 className="text-blue-500">Product  </h1>
      </div>

      <div className = "p-8 grid grid-cols-[20%_auto]">
      {/* filter div */}
   
      <div>
        {/* category */}
        <>
        <h1 className="uppercase py-2 font-semibold">Categories</h1>
        <div className="flex flex-col">
            {
              categoryData.map((el,index)=>{
                return(
                <div key={index} className="flex items-center mb-4">
                  <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600  bg-gray-100 border-gray-300  "/>
                  <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{el.title}</label>
              </div>);
              })
            }
          </div>
        </>
        
          {/* price range */}
          <div>
            <h1>Price Range</h1>
            <div>
              <div className="p-1 flex flex-col gap-4">
              <MultiRangeSlider min={5} max={10000}/>
              
               <div>
               {
              categoryData.map((el,index)=>{
                return(
                <div key={index} className="flex items-center mb-4">
                  <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600  bg-gray-100 border-gray-300  "/>
                  <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{el.title}</label>
              </div>);
              })
            }
               </div>
              </div>

          
              
            </div>
          </div>
          {/* popular trends */}
          <div className="py-2">
            <h1 className="py-2">Poplular Brands</h1>
          <div className="grid grid-cols-2">
               {
              categoryData.map((el,index)=>{
                return(
                  <div key={index} class="flex items-center mb-4">
                  <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                  <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{el.title}</label>
              </div>
              
            );
              })
            }
               </div>
          </div>
      </div>

      {/* productDiv */}
      <div className="border-4 border-green-500">
       <div className="grid justify-between grid-cols-2  ">
         <SearchBar/>
         <div className="flex  items-center justify-end pr-2 ">
          <p>Sort By : &nbsp;</p>
          <p className="w-1/3"><SortByFilter/></p>
         </div>
       </div>
       <div className="bg-[#F2F4F5] p-2 mt-2">
        <h1>Active Filters:Lorem</h1>
       </div>

       {/* product listing   */}
       <div className="border border-yellow-300">
       <div className="bg-white">
      <div className="mx-auto px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products?.map((product) => (
            <ProductListingCard key={products.id} product={product}/>
          ))}
        </div>


      </div>
    </div>
       </div>
      </div>



      </div>
    </div>
  )
}

export default Product