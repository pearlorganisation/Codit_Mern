/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import XRed from "../../assets/xred.png";
import { removeItemFromWishlist } from "../../features/slices/wishlist/wishlistSlice";
import { addItem } from "../../features/slices/cartSlice/cartSlice";

const WishlistItem = ({ wishlist: wishListItem }) => {
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    console.log("Item ID", itemId);
    dispatch(removeItemFromWishlist(itemId));
  };

  const handleAddtoCart = (itemId) => {
    console.log("Item ID Add Cart", itemId);
    dispatch(addItem(itemId));
  };

  return (
    <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
      <div className="flex flex-row items-start justify-center gap-3">
        <button onClick={() => handleRemove(wishListItem.id)}>
          <img src={XRed} alt="x-white" className="h-8 w-full" />
        </button>
        <div className="pb-4 md:pb-8 w-full md:w-40">
          <img
            className="w-[40px] h-[40px] hidden md:block"
            src={wishListItem.image}
            alt="dress"
          />
          <img
            className="w-full md:hidden"
            src={wishListItem.image}
            alt="dress"
          />
        </div>
      </div>
      <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
        <div className="w-full flex flex-col justify-start items-start space-y-8">
          <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
            {wishListItem.name}
          </h3>
        </div>
        <div className="flex justify-between space-x-8 items-start w-full">
          <p className="text-base dark:text-white xl:text-lg leading-6">
            ${wishListItem.price}
            <span className="text-red-300 line-through"> $45.00</span>
          </p>
          <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
            OUT OF STOCK
          </p>
          <button
            onClick={() => handleAddtoCart(wishListItem)}
            className="text-base xl:text-lg font-semibold leading-6 text-gray-800 bg-pink-400 px-4 py-2 rounded-md"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistItem;
