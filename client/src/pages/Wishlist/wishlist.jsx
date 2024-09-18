import { useSelector } from "react-redux";

import WishlistItem from "./WishlistItem";

const Wishlist = () => {
  const wishlistState = useSelector((state) => state.wishlist.wishlistData);

  const wishlistLength = wishlistState.length;

  console.log(wishlistState, "Wishlist State on Wishlist page");
  console.log(wishlistLength, "Wishlist count");

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="mt-4 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        {wishlistLength > 0 ? (
          <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
            <div className="flex flex-col border-2 border-gray-2 rounded-lg justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
              <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                Wishlist
              </p>

              <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                  <div className="w-full flex flex-col justify-start items-start space-y-8">
                    <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                      PRODUCTS
                    </h3>
                    <div className="flex justify-start items-start flex-col space-y-2"></div>
                  </div>
                  <div className="flex justify-between space-x-8 items-start w-full">
                    <p className="text-base dark:text-white xl:text-lg leading-6">
                      PRICE
                    </p>
                    <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
                      STOCK STATUS
                    </p>
                    <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                      ACTIONS
                    </p>
                  </div>
                </div>
              </div>
              {wishlistState.map((wishListItem) => (
                <WishlistItem key={wishListItem} wishlist={wishListItem} />
              ))}
            </div>
          </div>
        ) : (
          <h1> Wishlist Empty</h1>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
