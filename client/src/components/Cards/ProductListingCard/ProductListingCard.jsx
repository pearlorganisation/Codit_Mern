/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../../features/slices/cartSlice/cartSlice";

import { useState } from "react";
import {
  addToWishList,
  removeFromWishList,
} from "../../../features/slices/wishlist/wishlistSlice";
import { Link } from "react-router-dom";

const ProductListingCard = ({ data }) => {
  const { cartData } = useSelector((state) => state.cart);
  console.log(data?.variant, "aewreet");
  const [isAdded, setIsAdded] = useState(false);
  const [isWishAdded, setIsWishAdded] = useState(false);

  const dispatch = useDispatch();

  const handleAddtoCart = () => {
    const item = { ...data };
    dispatch(addItem(item));

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 3000);
  };

  const handleAddtoWishlist = () => {
    const item = { ...data };
    dispatch(addToWishList(item));

    setIsWishAdded(true);
  };

  const handleRemoveFromWishlist = () => {
    const item = { ...data };
    dispatch(removeFromWishList(item));
    setIsWishAdded(false);
  };

  const wishListHandler = () => {
    if (isWishAdded) {
      dispatch(removeFromWishList(data));
    } else {
      dispatch(addToWishList(data));
    }
  };

  return (
    <div className="relative text-[#262626] rounded-md border-2 border-black p-2">
      <span className="bg-white text-[#D0021B] text-xs tracking-wide font-extrabold  z-20 absolute top-2 left-2 p-1">
        30% OFF
      </span>
      <Link to={`/product/${data?._id}`} className="group">
        <div className="overflow-hidden rounded-lg bg-gray-200 relative">
          <img
            alt={data?.name}
            src={data?.image}
            className="h-44 w-44 bg-cover object-center group-hover:opacity-75"
          />
          <button onClick={() => {}}>
            <img src="wishlist.svg" className="absolute right-8 top-4" />
          </button>
        </div>
      </Link>

      <div className=" ">
        <h3 className="text-xs">{data?.name}</h3>
        <div className="flex gap-2 items-center">
          {" "}
          <p className="mt-1 text-[20px] font-bold tracking">
            ${data?.variant[0].price}
          </p>
          <p className="mt-1 text-[13px] line-through text-[#737373]">
            ${data?.variant[0].price}
          </p>
        </div>
        <span className="text-[11px] rounded-full px-[10px] py-[2px] font-medium tracking-tight bg-[#FFCA63]">
          500+ bought in past month
        </span>

        <div className="text-xs font-bold text-[#737373] mt-2">Black</div>
        <div className="flex justify-between">
          <div className="flex gap-3 py-1">
            <button className="w-5 h-5 rounded-full bg-[#514535] focus:ring-2 hover:ring-2 border-2 border-white ring-[#514535]"></button>
            <button className="w-5 h-5 rounded-full bg-[#3A3840] focus:ring-2 hover:ring-2 border-2 border-white ring-[#3A3840]"></button>
            <button className="w-5 h-5 rounded-full bg-[#8C7058] focus:ring-2 hover:ring-2 border-2 border-white ring-[#8C7058]"></button>
            <button className="w-5 h-5 rounded-full bg-[#262525] focus:ring-2 hover:ring-2 border-2 border-white ring-[#262525]"></button>
          </div>
          <div className="flex  justify-end ">
            <button
              className="group-hover:bg-purple-700 group-hover:text-white transition duration-300 ease-in text-purple-700 border-2 border-purple-700 rounded-lg font-semibold p-3"
              onClick={handleAddtoCart}
            >
              {isAdded ? "Added" : "Add to cart"}
            </button>
          </div>
        </div>

        <div className="w-full mt-3 flex items-center justify-center">
          <button
            className="p-3 bg-pink-400 text-white rounded-md"
            onClick={
              isWishAdded ? handleRemoveFromWishlist : handleAddtoWishlist
            }
          >
            {isWishAdded ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListingCard;

{
  /*
  
  <button
              onClick={() => {}}
              type="button"
              className="inline-flex items-center rounded-lg bg-pink-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4  focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="-ms-2 me-2 h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                />
              </svg>
              Add to cart
            </button>
            
            */
}
