import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "../../components/Cards/ProductCard/ProductCard";
import SwipperCard from "../../components/Cards/SwipperCard/SwipperCard";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "../../features/actions/productActions";
import { getAllCoupons } from "../../features/actions/couponActions";

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
    imagePath: "collection.png",
  },
  {
    name: "ISLAMIC COLLECTION",
    imagePath: "collection.png",
  },
  {
    name: "KID'S COLLECTION",
    imagePath: "collection.png",
  },
  {
    name: "MEN'S COLLECTION",
    imagePath: "collection.png",
  },
  {
    name: "GIFT ITEMS",
    imagePath: "collection.png",
  },
];

const TrendingHomeWear = [
  {
    name: "Satin Saree",
    desc: "Sky Blue Foil Net Work Party Wear Kurta",
    imagePath: "collection.png",
  },
  {
    name: "White Indian Wear",
    desc: "Sky Blue Foil Net Work Party Wear Kurta",
    imagePath: "collection.png",
  },
];

const seasonCollection = [
  {
    name: "Winter",
    imagePath: "season_Collection.png",
  },
  {
    name: "Spring",
    imagePath: "season_Collection.png",
  },
  {
    name: "Summer",
    imagePath: "season_Collection.png",
  },
  {
    name: "Autumn",
    imagePath: "season_Collection.png",
  },
];

const extrasCollection = [
  {
    title: "The Legendary Designs",
    imagePath: "legendaryCollectionWomen.png",
  },
  {
    title: "The Need Now",
    imagePath: "exclusive.png",
  },
  {
    title: "The Legendary Designs",
    imagePath: "legendaryCollection.png",
  },
  {
    title: "The Best Hijab Collection",
    imagePath: "hijabCollection.png",
  },
];

const homeSwipper = [
  "homeFrame.png",
  "homeFrame.png",
  "homeFrame.png",
  "homeFrame.png",
];

const Home = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);

  const { coupons } = useSelector((state) => state.coupon);

  console.log("Product State", productState);
  console.log("Coupon State", coupons);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCoupons());
  }, []);

  return (
    <div className=" space-y-8">
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

      <div className="space-y-4">
        <h1 className="md:text-4xl text-center text-[#484848]  px-2    gupter-medium bg-white">
          New Arrivals{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center items-center px-4 md:p-6 ">
          {dataForCards.map((el, index) => {
            return <ProductCard key={index} data={el} />;
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-2 border-2xl overflow-hidden ">
        {extrasCollection.map((el, index) => {
          return (
            <div key={index} className="relative">
              <img src={el.imagePath} className="h-[28rem] w-full" />
              <div className="w-full bg-black/20" />
              <span className="absolute top-40 left-20 right-20 text-white">
                <h1 className="text-center font-bold text-xl">{el.title}</h1>
                <a
                  href="/"
                  className="underline text-center font-semibold hover:no-underline "
                >
                  <p className="text-center">Shop Now</p>
                </a>
              </span>
            </div>
          );
        })}
      </div>

      <div className="space-y-4">
        <h2 className="text-center text-[#484848]  gupter-medium text-4xl  font-semibold mb-8">
          OUR COLLECTIONS
        </h2>

        <div className="">
          <SwipperCard data={collectionsData} />
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="uppercase text-3xl  font-bold text-[#5F6C72] text-left ">
          Trending in indian wear
        </h1>
        <div className="grid grid-cols-2 gap-4 px-4   justify-center items-center">
          {TrendingHomeWear.map((el, index) => {
            return (
              <div
                key={index}
                className="flex flex-col p-5 justify-center items-center    gap-8"
                style={{
                  boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <div>
                  <img src={"trendingSection.png"} />
                </div>
                <p className="uppercase text-center text-xl font-bold">
                  {el.name}
                </p>
                <p className="text-lg text-center font-semibold">{el.desc}</p>
                <div className=" flex justify-center">
                  <button className="bg-pink-500 rounded-md py-[0.1rem] px-2 text-base text-white hover:bg-pink-600 font-thin">
                    Explore &gt;&gt;{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* //season section */}
      <div className="grid space-y-4">
        <h1 className="text-[#3D3B40] text-semibold uppercase text-4xl">
          SEASONS COLLECTION
        </h1>
        <div className="grid grid-cols-4 justify-center items-center gap-6">
          {seasonCollection.map((el, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-5 justify-center items-center p-5 rounded-md"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <img src={el.imagePath} alt="img" />
                <h1 className="font-semibold text-md">{el.name}</h1>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid space-y-4">
        <h1> COUPONS CORNER </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {coupons.map((coupon) => (
            <div className="flex flex-row gap-3" key={coupon._id}>
              <div className="w-[50%]">
                <img src={coupon.couponImage} alt={coupon.name} className="" />
              </div>

              <div className="">
                <h1> Name : {coupon.name}</h1>

                <h3> Discount : {coupon.discount}</h3>
                <h4> CODE : {coupon.couponcode}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
