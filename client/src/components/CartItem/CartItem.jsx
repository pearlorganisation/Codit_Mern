/* eslint-disable react/prop-types */
import { useSelector, useDispatch } from "react-redux";
import {
  decrementItem,
  incrementItem,
  removeItem,
} from "../../features/slices/cartSlice/cartSlice";

const CartItem = ({ item }) => {
  const { cartData } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  const cartQuantity = cartData.length;
  const { id, image, price, quantity } = item;

  const itemTotal = price * quantity;

  return (
    <div>
      {cartQuantity === 0 ? (
        <h1>Cart Empty</h1>
      ) : (
        <div
          key={id}
          className="flex items-center p-5 justify-between bg-violet-200 mt-2 mb-2 rounded-xl"
        >
          <div className="flex p-3">
            <img src={image} className="h-28 w-28 rounded-lg" alt="" />
            <div className="ml-10 self-start space-y-5">
              <h1 className="text-xl text-purple-700 font-semibold">
                {item.title}
              </h1>

              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1 items-center justify-center ">
                  <button
                    className="px-2 py-2 border-2 border-blue-200"
                    onClick={() => handleDecrement(id)}
                  >
                    -
                  </button>
                  <p className="text-red-500 ml-2">{quantity}</p>

                  <button
                    className="px-2 py-2 border-2 border-blue-200"
                    onClick={() => handleIncrement(id)}
                  >
                    +
                  </button>
                </div>

                <h1>${itemTotal.toFixed(2)}</h1>
              </div>
            </div>
          </div>
          <div className="bg-purple-300 hover:bg-purple-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
            <button
              className="text-gray-800 px-2 py-2"
              onClick={() => handleRemove(id)}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
