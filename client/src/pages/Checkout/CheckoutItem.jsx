/* eslint-disable react/prop-types */
import XRed from "../../assets/xred.png";
import { useDispatch } from "react-redux";
import {
  decrementItem,
  incrementItem,
  removeItem,
} from "../../features/slices/cartSlice/cartSlice";
const CheckoutItem = ({ product }) => {
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

  const { id, name, image, price, quantity } = product;

  const itemTotal = price * quantity;
  return (
    <tr className="">
      <td className="p-4 items-center justify-center">
        <div className="flex items-center gap-4 w-full">
          <button onClick={() => handleRemove(id)}>
            <img src={XRed} alt="x-white" className="h-8 w-full" />
          </button>
          <div className="h-32 shrink-0 items-center">
            <img src={image} className="w-[60px] h-[60px] rounded-lg mt-8" />
          </div>
          <div>
            <p className="text-sm md:text-xl font-bold text-gray-800 text-wrap">
              {name}
            </p>
          </div>
        </div>
      </td>
      <td className="p-1">
        <h4 className="text-base font-bold text-gray-800">${price}</h4>
      </td>
      <td className="p-4">
        <div className="flex divide-x border w-max rounded-lg overflow-hidden">
          <button
            type="button"
            onClick={() => handleDecrement(id)}
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
            {product.quantity}
          </button>
          <button
            type="button"
            onClick={() => handleIncrement(id)}
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
      </td>
      <td className="p-4">
        <h4 className="text-base font-bold text-gray-800">
          ${itemTotal.toFixed(2)}
        </h4>
      </td>
    </tr>
  );
};

export default CheckoutItem;
