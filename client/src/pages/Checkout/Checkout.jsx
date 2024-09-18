import ArrowLeft from "../../assets/arrleft.png";
import ArrowRight from "../../assets/arrright.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CheckoutItem from "./CheckoutItem";

const Checkout = () => {
  const { cartData } = useSelector((state) => state.cart);

  const cartQuantity = cartData.length;

  const cartTotal = cartData
    .map((item) => item.price * item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const discount = 24.0;
  const tax = 61.99;

  const total = cartTotal - discount + tax;

  return (
    <div className="font-sans mt-4">
      {cartData.length > 0 ? (
        <div className="grid lg:grid-cols-3 px-4">
          <div className="lg:col-span-2 py-6 bg-white border-gray-400  border-2 rounded-lg overflow-x-auto mr-2">
            <div className="flex px-0 md:pb-4 md:px-6">
              <h2 className="text-2xl font-bold text-gray-800 ">
                Shopping Card
              </h2>
            </div>
            <table className="mt-6 w-full border-collapse divide-y">
              <thead className="whitespace-wrap text-left bg-gray-200">
                <tr>
                  <th className="text-xs text-gray-800 md:p-4 md:text-base">
                    Products
                  </th>
                  <th className="text-xs text-gray-800 md:p-4 md:text-base">
                    Price
                  </th>
                  <th className="text-xs text-gray-800 md:p-4 md:text-base">
                    Quantity
                  </th>
                  <th className="text-xs text-gray-800 md:p-4 md:text-base">
                    Sub-Total
                  </th>
                </tr>
              </thead>

              <tbody className="whitespace-nowrap divide-y text-xl md:text-xl">
                {cartData.map((product) => {
                  return <CheckoutItem key={product.id} product={product} />;
                })}
              </tbody>
            </table>

            <div className="md:mt-24">
              <div className="flex justify-between px-4 align-bottom">
                <button
                  type="button"
                  className="px-6  py-3.5 text-sm md:text-xl font-semibold text-blue-400 inline-flex items-center text-primary border-2 border-blue-500 bg-white hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center"
                >
                  <img src={ArrowLeft} alt="arr-left" className="ml-2 mr-2" />
                  RETURN TO SHOP
                </button>

                <button
                  type="button"
                  className="px-6  py-3.5 text-sm md:text-xl font-semibold text-blue-400 inline-flex items-center text-primary border-2 border-blue-500 bg-white hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center"
                >
                  UPDATE CART
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-6 sm:px-6 h-max">
            <div className="h-full border-gray-400 py-4 rounded-lg    border-2 ">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 px-4">
                Total Products : {cartQuantity}
              </h2>

              <ul className="text-gray-800 mt-6 px-4">
                <li className="flex flex-wrap gap-4  py-3">
                  Sub-total{" "}
                  <span className="ml-auto font-bold">
                    ${cartTotal.toFixed(2)}
                  </span>
                </li>
                <li className="flex flex-wrap gap-4 text-base py-3">
                  Shipping <span className="ml-auto font-bold">Free</span>
                </li>
                <li className="flex flex-wrap gap-4 text-base py-3">
                  Discount{" "}
                  <span className="ml-auto font-bold">${discount}</span>
                </li>
                <li className="flex flex-wrap gap-4 text-base py-3">
                  Tax <span className="ml-auto font-bold">${tax}</span>
                </li>
                <hr />
                <li className="flex flex-wrap gap-4 text-base py-3 font-bold">
                  Total <span className="ml-auto">$ {total.toFixed(2)}</span>
                </li>
              </ul>

              <div className="flex p-4">
                <button
                  type="button"
                  className="w-full px-6 items-center justify-center py-3.5 text-base font-medium text-white inline-flex  text-primary  bg-pink-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center rounded-sm"
                >
                  PROCEED TO CHECKOUT
                  <img src={ArrowRight} alt="arr-right" className="ml-4" />
                </button>
              </div>
            </div>

            <div className="h-full border-gray-400 py-4 rounded-lg mt-3 border-2 ">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 px-4">
                Coupon Code
              </h2>

              <div className="p-4 mb-3">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="px-4 py-2.5 bg-white text-gray-800 rounded-md w-full text-sm border-2 focus:border-gray-800 outline-none"
                />

                <button
                  type="button"
                  className="w-[50%] mt-3  px-6 items-center justify-center py-3.5 text-base font-medium text-white inline-flex  text-primary  bg-pink-400 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center rounded-sm"
                >
                  APPLY COUPON
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-gray-700 font-semibold text-xl mb-2">
              Your cart is empty!
            </h1>
            <Link to={"/product"}>
              <button className="bg-purple-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-purple-600 font-bold hover:text-purple-700 p-3">
                SHOP NOW
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
