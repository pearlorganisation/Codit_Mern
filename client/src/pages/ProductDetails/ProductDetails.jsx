import { CiHeart, CiShare2, CiBookmark, CiStar } from "react-icons/ci";
import { BiShoppingBag, BiSolidCommentDetail } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import ProductListingCard from "../../components/Cards/ProductListingCard/ProductListingCard";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../features/actions/productActions";
import { useEffect, useState } from "react";

const products = [
  {
    id: "1",
    href: "/",
    imageSrc: "DummyProduct.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$",
  },
  {
    id: "2",
    href: "/",
    imageSrc: "DummyProduct.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$",
  },
  {
    id: "3",
    href: "/",
    imageSrc: "DummyProduct.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$",
  },
  {
    id: "4",
    href: "/",
    imageSrc: "DummyProduct.png",
    imageAlt: "someproduct",
    name: "dummyProduct",
    price: "200$",
  },
];

const content = [
  [
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      featureList: [
        {
          id: 1,
          icon: <CiBookmark />,
          title: "Free 1 year warranty",
        },
        {
          id: 2,
          icon: <CiShare2 />,
          title: "Free Shipping and fastened delivery",
        },
        {
          id: 3,
          icon: <CiHeart />,
          title: "100% Money Back Guarantee",
        },
        {
          id: 4,
          icon: <CiHeart />,
          title: "24 Hour Customer Support",
        },
        {
          id: 5,
          icon: <CiHeart />,
          title: "Secure Payment Method",
        },
      ],
      shippingInfo: [
        {
          id: 1,

          title: "Courier",
          subtitle: "2-4 days free shipping",
        },
        {
          id: 2,
          subtitle: "up to one week $19.00",
          title: "Local Shipping",
        },
        {
          id: 3,
          subtitle: "4-6 days, $29.00 ",
          title: "UPS Ground Shipping",
        },
        {
          id: 4,
          title: "Ubishop Global Export",
          subtitle: "3-4 days, $39.00",
        },
      ],
    },
  ],
  [
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      featureList: [
        {
          id: 1,
          icon: <CiBookmark />,
          title: "Free 1 year warranty",
        },
        {
          id: 2,
          icon: <CiShare2 />,
          title: "Free Shipping and fastened delivery",
        },
        {
          id: 3,
          icon: <CiHeart />,
          title: "100% Money Back Guarantee",
        },
        {
          id: 4,
          icon: <CiHeart />,
          title: "24 Hour Customer Support",
        },
        {
          id: 5,
          icon: <CiHeart />,
          title: "Secure Payment Method",
        },
      ],
      shippingInfo: [
        {
          id: 1,

          title: "Courier",
          subtitle: "2-4 days free shipping",
        },
        {
          id: 2,
          subtitle: "up to one week $19.00",
          title: "Local Shipping",
        },
        {
          id: 3,
          subtitle: "4-6 days, $29.00 ",
          title: "UPS Ground Shipping",
        },
        {
          id: 4,
          title: "Ubishop Global Export",
          subtitle: "3-4 days, $39.00",
        },
      ],
    },
  ],
  [
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      featureList: [
        {
          id: 1,
          icon: <CiBookmark />,
          title: "Free 1 year warranty",
        },
        {
          id: 2,
          icon: <CiShare2 />,
          title: "Free Shipping and fastened delivery",
        },
        {
          id: 3,
          icon: <CiHeart />,
          title: "100% Money Back Guarantee",
        },
        {
          id: 4,
          icon: <CiHeart />,
          title: "24 Hour Customer Support",
        },
        {
          id: 5,
          icon: <CiHeart />,
          title: "Secure Payment Method",
        },
      ],
      shippingInfo: [
        {
          id: 1,

          title: "Courier",
          subtitle: "2-4 days free shipping",
        },
        {
          id: 2,
          subtitle: "up to one week $19.00",
          title: "Local Shipping",
        },
        {
          id: 3,
          subtitle: "4-6 days, $29.00 ",
          title: "UPS Ground Shipping",
        },
        {
          id: 4,
          title: "Ubishop Global Export",
          subtitle: "3-4 days, $39.00",
        },
      ],
    },
  ],
  [
    {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      featureList: [
        {
          id: 1,
          icon: <CiBookmark />,
          title: "Free 1 year warranty",
        },
        {
          id: 2,
          icon: <CiShare2 />,
          title: "Free Shipping and fastened delivery",
        },
        {
          id: 3,
          icon: <CiHeart />,
          title: "100% Money Back Guarantee",
        },
        {
          id: 4,
          icon: <CiHeart />,
          title: "24 Hour Customer Support",
        },
        {
          id: 5,
          icon: <CiHeart />,
          title: "Secure Payment Method",
        },
      ],
      shippingInfo: [
        {
          id: 1,

          title: "Courier",
          subtitle: "2-4 days free shipping",
        },
        {
          id: 2,
          subtitle: "up to one week $19.00",
          title: "Local Shipping",
        },
        {
          id: 3,
          subtitle: "4-6 days, $29.00 ",
          title: "UPS Ground Shipping",
        },
        {
          id: 4,
          title: "Ubishop Global Export",
          subtitle: "3-4 days, $39.00",
        },
      ],
    },
  ],
];

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [activeContentIndex, setActiveContentIndex] = useState(0);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    dispatch(getSingleProduct(id));
  };

  const handleAddTocart = () => {};

  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-8">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                alt="Product"
                className="w-full h-auto rounded-lg mb-4"
                id="mainImage"
              />
              <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                <img
                  src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Thumbnail 1"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Thumbnail 2"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Thumbnail 3"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                  alt="Thumbnail 4"
                  className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                />
              </div>
            </div>

            <div className="w-full md:w-1/2 px-4">
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold mb-2">Embrace Sideboard</h2>

                <div className="flex items-center gap-2">
                  <div>
                    <CiHeart size="20" color="red" />
                  </div>
                  <div>
                    <h5>109</h5>
                  </div>
                  <div>
                    <CiBookmark size="20" color="yellow" />
                  </div>

                  <div>
                    <CiShare2 size="20" color="yellow" />
                  </div>
                </div>
              </div>

              <p className="text-gray-200 mb-4">Texeria Design Studio</p>
              <div className="flex mb-4 mr-2">
                <span className="text-2xl font-bold mr-2 text-yellow-600">
                  $76.99
                </span>

                <div className="flex items-center px-3">
                  <CiStar size="20" color="golden" />
                  <span>4.8</span>
                </div>

                <div className="flex items-center px-3">
                  <BiSolidCommentDetail size="20" />
                  <span>67 Comments</span>
                </div>
              </div>

              <div>
                <span className="text-gray-500 line-through">$70.99</span>
              </div>

              <p className="text-gray-700 mb-6">
                Experience premium sound quality and industry-leading noise
                cancellation with these wireless headphones. Perfect for music
                lovers and frequent travelers.
              </p>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Choose a Color:</h3>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
                  <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
                  <button className="w-8 h-8 bg-yellow-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"></button>
                  <button className="w-8 h-8 bg-pink-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"></button>
                  <button className="w-8 h-8 bg-yellow-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"></button>
                  <button className="w-8 h-8 bg-green-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"></button>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Choose a Size:</h3>

                <div className="flex items-center gap-4">
                  <div className="flex items-center ps-1 border border-gray-200 rounded">
                    <input
                      id="bordered-radio-1"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="bordered-radio-1"
                      className="w-15 py-4 ms-2 text-sm font-medium text-gray-900"
                    >
                      Small
                    </label>
                  </div>
                  <div className="flex items-center ps-1 border border-gray-200 rounded">
                    <input
                      checked
                      id="bordered-radio-2"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="bordered-radio-2"
                      className="w-15 py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Medium
                    </label>
                  </div>

                  <div className="flex items-center ps-1 border border-gray-200 rounded">
                    <input
                      checked
                      id="bordered-radio-2"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="bordered-radio-2"
                      className="w-15 py-4 ms-2 text-sm font-medium text-gray-900"
                    >
                      Large
                    </label>
                  </div>

                  <div className="flex items-center ps-1 border border-gray-200 rounded">
                    <input
                      checked
                      id="bordered-radio-2"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="bordered-radio-2"
                      className="w-15 py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Extra Large
                    </label>
                  </div>

                  <div className="flex items-center ps-1 border border-gray-200 rounded">
                    <input
                      checked
                      id="bordered-radio-2"
                      type="radio"
                      value=""
                      name="bordered-radio"
                      className="w-4 h-4 text-yellow-600 bg-gray-100 border-gray-300 "
                    />
                    <label
                      htmlFor="bordered-radio-2"
                      className="w-20 py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      XXL
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4 mb-6">
                <div className="w-40 border border-gray-500 rounded-xl items-center justify-center">
                  <form className="max-w-xs mx-auto">
                    <div className="flex divide-x border w-max rounded-lg overflow-hidden">
                      <button
                        type="button"
                        onClick={() => {}}
                        className="flex items-center justify-center bg-gray-100 w-10 h-10 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 124 124"
                        >
                          <path
                            d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        className="bg-transparent w-10 h-10 font-semibold text-gray-800 text-base"
                      >
                        3
                      </button>
                      <button
                        type="button"
                        onClick={() => {}}
                        className="flex justify-center items-center bg-gray-100 text-gray-800 w-10 h-10 font-semibold"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 fill-current"
                          viewBox="0 0 42 42"
                        >
                          <path
                            d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"
                            data-original="#000000"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
                <button className="bg-pink-600 flex gap-2 items-center text-white px-6 py-2 rounded-xl hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
                  <BiShoppingBag size="20" />
                  Add to Cart
                </button>
              </div>

              <hr />

              <div className="flex justify-start">
                <div>
                  <TbTruckDelivery size="30" color="pink" />
                </div>
                <div className="px-2">
                  <h3 className="text-lg font-semibold mb-2">Free Delivery</h3>
                  <h5 className="text-md font-normal mb-2">
                    Enter your postal code for delivery area
                  </h5>
                </div>
              </div>

              <div className="flex justify-start">
                <div>
                  <BiShoppingBag size="30" color="pink" />
                </div>
                <div className="px-2">
                  <h3 className="text-lg font-semibold mb-2">
                    Return Delivery
                  </h3>
                  <h5 className="text-md font-normal mb-2">
                    Free 30 day delivery Return. Details.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto -x4 py-8">
          <div className="items-center justify-center">
            <div className="items-center justify-center text-sm font-medium text-center text-gray-500 border-b border-gray-200">
              <ul className="flex flex-wrap -mb-px items-center justify-center">
                <li className="me-2">
                  <button
                    onClick={() => setActiveContentIndex(0)}
                    className={`inline-block p-4  active ${
                      activeContentIndex === 0
                        ? "text-yellow-600 border-b-2 border-yellow-600"
                        : ""
                    }   rounded-t-lg hover:text-gray-600 hover:border-gray-300`}
                  >
                    DESCRIPTION
                  </button>
                </li>
                <li className="me-2">
                  <button
                    onClick={() => setActiveContentIndex(1)}
                    className={`inline-block p-4  active ${
                      activeContentIndex === 1
                        ? "text-yellow-600 border-b-2 border-yellow-600"
                        : ""
                    }   rounded-t-lg hover:text-gray-600 hover:border-gray-300`}
                  >
                    ADDITIONAL INFORMATION
                  </button>
                </li>
                <li className="me-2">
                  <button
                    onClick={() => setActiveContentIndex(2)}
                    className={`inline-block p-4  active ${
                      activeContentIndex === 2
                        ? "text-yellow-600 border-b-2 border-yellow-600"
                        : ""
                    }   rounded-t-lg hover:text-gray-600 hover:border-gray-300`}
                  >
                    SPECIFICATION
                  </button>
                </li>
                <li className="me-2">
                  <button
                    onClick={() => setActiveContentIndex(3)}
                    className={`inline-block p-4  active ${
                      activeContentIndex === 3
                        ? "text-yellow-600 border-b-2 border-yellow-600"
                        : ""
                    }   rounded-t-lg hover:text-gray-600 hover:border-gray-300`}
                  >
                    REVIEW
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <hr />

          {activeContentIndex === 0 && (
            <div className="flex grid-cols-3 gap-3 mt-20 items-start justify-between">
              <div className="px-3 w-[40%]">
                <h3 className="font-bold text-lg ">Description</h3>

                {content[activeContentIndex][0].description}
              </div>

              <div className="w-[20%]">
                <h3 className="font-bold text-lg ">Features</h3>

                <div className="mt-4">
                  {content[activeContentIndex][0].featureList.map((f) => (
                    <ul key={f.id} className="flex gap-2 items-center">
                      {f.icon}
                      <li>{f.title}</li>
                    </ul>
                  ))}
                </div>
              </div>

              <div className="w-[30%]">
                <h3 className="font-bold text-lg ">Shipping Information</h3>

                <div className="mt-4">
                  {content[activeContentIndex][0].shippingInfo.map((f) => (
                    <ul key={f.id} className="flex gap-2 items-center">
                      <li>{f.title}</li>
                      <li> {f.subtitle}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeContentIndex === 1 && (
            <div className="flex grid-cols-3 gap-3 mt-20 items-start justify-between">
              <div className="px-3 w-[40%]">
                <h3 className="font-bold text-lg "> Additional Info</h3>

                {content[activeContentIndex][0].description}

                <p className="mt-4 font-normal text-md"></p>
              </div>

              <div className="w-[20%]">
                <h3 className="font-bold text-lg ">Features</h3>

                <div className="mt-4">
                  {content[activeContentIndex][0].featureList.map((f) => (
                    <ul key={f.id} className="flex gap-2 items-center">
                      {f.icon}
                      <li>{f.title}</li>
                    </ul>
                  ))}
                </div>
              </div>

              <div className="w-[30%]">
                <h3 className="font-bold text-lg ">Shipping Information</h3>

                <div className="mt-4">
                  {content[activeContentIndex][0].shippingInfo.map((f) => (
                    <ul key={f.id} className="flex gap-2 items-center">
                      <li>{f.title}</li>
                      <li> {f.subtitle}</li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="ml-12">
          <h1>Featured Products</h1>

          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products?.map((product) => (
              <ProductListingCard key={products.id} product={product} />
            ))}
          </div>
        </div>

        <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <div className="flex items-center justify-center mt-8">
            <h3 className="text-xl font-bold text-gray-800">Reviews</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2 mt-4">
            <div className="space-y-3">
              <div className="flex flex-col items-center">
                <p className="text-sm text-gray-800 font-bold">
                  5.0 Overall Rating
                </p>

                <div className="flex flex-row gap-2">
                  <svg
                    className="w-5 fill-yellow-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>

                  <svg
                    className="w-5 fill-yellow-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>

                  <svg
                    className="w-5 fill-yellow-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>

                  <svg
                    className="w-5 fill-yellow-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>

                  <svg
                    className="w-5 fill-yellow-600 ml-1"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-bold">5.0</p>
                <svg
                  className="w-5 fill-yellow-600 ml-1"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                  <div className="w-2/3 h-full rounded bg-yellow-600"></div>
                </div>
                <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
              </div>

              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-bold">4.0</p>
                <svg
                  className="w-5 fill-yellow-600 ml-1"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                  <div className="w-1/3 h-full rounded bg-yellow-600"></div>
                </div>
                <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
              </div>

              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-bold">3.0</p>
                <svg
                  className="w-5 fill-yellow-600 ml-1"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                  <div className="w-1/6 h-full rounded bg-yellow-600"></div>
                </div>
                <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
              </div>

              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-bold">2.0</p>
                <svg
                  className="w-5 fill-yellow-600 ml-1"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                  <div className="w-1/12 h-full rounded bg-yellow-600"></div>
                </div>
                <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
              </div>

              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-bold">1.0</p>
                <svg
                  className="w-5 fill-yellow-600 ml-1"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                  <div className="w-[6%] h-full rounded bg-yellow-600"></div>
                </div>
                <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
              </div>
            </div>

            <div>
              <div className="flex items-start">
                <div className="ml-8">
                  <h4 className="text-sm font-bold text-gray-800">
                    Runs Slightly large
                  </h4>

                  <div className="flex flex-row gap-2 mt-4">
                    <div className="bg-gray-400 h-2 w-12"></div>
                    <div className="bg-gray-400 h-2 w-12"></div>
                    <div className="bg-gray-400 h-2 w-12"></div>
                    <div className="bg-black h-2 w-12"></div>
                    <div className="bg-gray-400 h-2 w-12"></div>
                  </div>

                  <div className="flex flex-row justify-between mt-2">
                    <h4 className="text-xs">Run Small</h4>
                    <h4 className="text-xs">Run Large</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Details*/}

        <div className="flex items-start mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(900px,_1fr)_100px] relative">
            <div className="">
              <p className="flex items-baseline">
                <span className="text-gray-600 font-bold">Elizabeth RBKYN</span>
              </p>

              <p className="mt-3">
                <div className="flex flex-row gap-2">
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0.6875C6.55373 0.6875 5.13993 1.11637 3.9374 1.91988C2.73486 2.72339 1.7976 3.86544 1.24413 5.20163C0.690668 6.53781 0.545856 8.00811 0.828011 9.4266C1.11017 10.8451 1.80661 12.148 2.82928 13.1707C3.85196 14.1934 5.15492 14.8898 6.57341 15.172C7.99189 15.4541 9.46219 15.3093 10.7984 14.7559C12.1346 14.2024 13.2766 13.2651 14.0801 12.0626C14.8836 10.8601 15.3125 9.44628 15.3125 8C15.3105 6.06123 14.5394 4.20246 13.1685 2.83154C11.7975 1.46063 9.93877 0.689547 8 0.6875ZM11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86227 10.5288 5.82081 10.5971 5.79253C10.6654 5.76424 10.7386 5.74969 10.8125 5.74969C10.8864 5.74969 10.9596 5.76424 11.0279 5.79253C11.0962 5.82081 11.1582 5.86227 11.2105 5.91453C11.2627 5.96679 11.3042 6.02884 11.3325 6.09712C11.3608 6.1654 11.3753 6.23859 11.3753 6.3125C11.3753 6.38641 11.3608 6.4596 11.3325 6.52788C11.3042 6.59616 11.2627 6.65821 11.2105 6.71047Z"
                        fill="#4FC23D"
                      />
                    </svg>
                  </span>
                  <h1 className="text-gray-400 text-xs"> Verified Buyer</h1>
                </div>
                <h1 className="mt-3">Height : 5'9" - 5'11"</h1>
                <h1>Weight (lbs) : 161 - 180</h1>
                <h1> Body Type : Petite</h1>
                <h1 className="mt-3"> Size Purchased : L</h1>
                <h1> Usual Size : L </h1>
              </p>
            </div>

            <div className="flex flex-col w-[80%]">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>

              <div className="mt-3">
                <span className="font-bold">Sapien consequat eleifend!</span>
                <p className="mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            <div> 14 Days Ago</div>
          </div>
        </div>

        <div className="flex items-start mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_minmax(900px,_1fr)_100px] relative">
            <div className="">
              <p className="flex items-baseline">
                <span className="text-gray-600 font-bold">Anonymous</span>
              </p>

              <p className="mt-3">
                <div className="flex flex-row gap-2 mt-3">
                  <span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 0.6875C6.55373 0.6875 5.13993 1.11637 3.9374 1.91988C2.73486 2.72339 1.7976 3.86544 1.24413 5.20163C0.690668 6.53781 0.545856 8.00811 0.828011 9.4266C1.11017 10.8451 1.80661 12.148 2.82928 13.1707C3.85196 14.1934 5.15492 14.8898 6.57341 15.172C7.99189 15.4541 9.46219 15.3093 10.7984 14.7559C12.1346 14.2024 13.2766 13.2651 14.0801 12.0626C14.8836 10.8601 15.3125 9.44628 15.3125 8C15.3105 6.06123 14.5394 4.20246 13.1685 2.83154C11.7975 1.46063 9.93877 0.689547 8 0.6875ZM11.2105 6.71047L7.27297 10.648C7.22073 10.7003 7.15869 10.7418 7.09041 10.7701C7.02212 10.7984 6.94892 10.8129 6.875 10.8129C6.80108 10.8129 6.72789 10.7984 6.6596 10.7701C6.59131 10.7418 6.52928 10.7003 6.47703 10.648L4.78953 8.96047C4.68399 8.85492 4.62469 8.71177 4.62469 8.5625C4.62469 8.41323 4.68399 8.27008 4.78953 8.16453C4.89508 8.05898 5.03824 7.99969 5.1875 7.99969C5.33677 7.99969 5.47992 8.05898 5.58547 8.16453L6.875 9.45477L10.4145 5.91453C10.4668 5.86227 10.5288 5.82081 10.5971 5.79253C10.6654 5.76424 10.7386 5.74969 10.8125 5.74969C10.8864 5.74969 10.9596 5.76424 11.0279 5.79253C11.0962 5.82081 11.1582 5.86227 11.2105 5.91453C11.2627 5.96679 11.3042 6.02884 11.3325 6.09712C11.3608 6.1654 11.3753 6.23859 11.3753 6.3125C11.3753 6.38641 11.3608 6.4596 11.3325 6.52788C11.3042 6.59616 11.2627 6.65821 11.2105 6.71047Z"
                        fill="#4FC23D"
                      />
                    </svg>
                  </span>
                  <h1 className="text-gray-400 text-xs"> Verified Buyer</h1>
                </div>
                <h1 className="mt-3">Height : 5'9" - 5'11"</h1>
                <h1>Weight (lbs) : 161 - 180</h1>
                <h1> Body Type : Petite</h1>
                <h1 className="mt-3"> Size Purchased : L</h1>
                <h1> Usual Size : L </h1>
              </p>
            </div>

            <div className="flex flex-col w-[80%]">
              <div className="flex items-center">
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
                <svg
                  className="w-4 h-4 fill-current text-yellow-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              </div>

              <div className="mt-3">
                <span className="font-bold">Asdfsd alajsdl!</span>
                <p className="mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>

            <div> 18 Days Ago</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
