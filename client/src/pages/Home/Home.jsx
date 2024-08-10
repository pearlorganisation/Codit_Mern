import ProductCard from "../../components/Cards/ProductCard/ProductCard"
import SwipperCard from "../../components/Cards/SwipperCard/SwipperCard";
const dataForCards = [
  {
    title: "Kurti",
    img: "cardImg.png",
    price: "250",
  },
  {
    title: "Kurti",
    img: "cardImg.png",
    price: "250",
  },
  {
    title: "Kurti",
    img: "cardImg.png",
    price: "250",
  },


];
const collectionsData = [
  {
    name: "WOMEN'S COLLECTION",
    imagePath: "collection.png",
  },
  {
    name: "ACCESSORIES COLLECTION",
    imagePath: "collection.png",  },
  {
    name: "ISLAMIC COLLECTION",
    imagePath: "collection.png",  },
  {
    name: "KID'S COLLECTION",
    imagePath: "collection.png",  },
  {
    name: "MEN'S COLLECTION",
    imagePath: "collection.png",  },
  {
    name: "GIFT ITEMS",
    imagePath: "collection.png",  },
];

const TrendingHomeWear  = [
  {
    name: "Kalini",
    desc:"Ready To Wear Lehenga Choli",
    imagePath: "collection.png",
  },
  {
    name: "Regal Mustard",
    desc:"Ready To Wear Lehenga Choli",
    imagePath: "collection.png",
  },
  {
    name: "Satin Saree",
    desc:"Ready To Wear Lehenga Choli",
    imagePath: "collection.png",
  },
  {
    name: "White Indian Wear",
    desc:"Ready To Wear Lehenga Choli",
    imagePath: "collection.png",
  }

  
]
const Home = () => {


  return (
    <div className="p-8">
    <div>
      <h1 className="md:text-4xl text-center text-[#484848]  px-2    gupter-medium bg-white">New Arrivals </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center  p-10">
        {
          dataForCards.map((el, index) => {
            return <ProductCard key={index} data={el} />;
          })
        }

      </div>

      </div>

      <div>

      
        <h2 className="text-center text-[#484848]  gupter-medium text-4xl  font-semibold mb-8">
          OUR COLLECTIONS
        </h2>


        <div className="p-6">
         <SwipperCard data={collectionsData}  />
        </div>

      </div>

     <div className = "py-20">

      <h1 className="uppercase text-3xl font-bold text-left ">Trending in indian wear</h1>
      <div className="grid grid-cols-4 gap-4 justify-center items-center py-8">

      {
        TrendingHomeWear.map((el,index)=>
        {
          return(
            <div key={index} className="flex flex-col gap-8">
              <img src={"trendingSection.png"} />
              <p className="uppercase text-center text-xl font-bold">{el.name}</p>
              <p className="text-lg text-center font-semibold">{el.desc}</p>
              <div className=" flex justify-center">
              <button className = "bg-pink-500 rounded-md py-[0.1rem] px-2 text-base text-white hover:bg-pink-600 font-thin">Explore &gt;&gt; </button>
      
              </div>
            </div>);
        })
      }
      </div>
      
     </div>

    
    </div>
  )
}

export default Home