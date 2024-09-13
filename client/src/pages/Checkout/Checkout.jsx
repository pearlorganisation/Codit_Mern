import XRed from "../../assets/xred.png";
import XWhite from "../../assets/xwhite.png";
import ArrowLeft from "../../assets/arrleft.png";
import ArrowRight from "../../assets/arrright.png";
import { useState } from "react";

const Checkout = () => {
  const products = [
    {
      id: 1,
      image: "https://readymadeui.com/images/product6.webp",
      title: " 4K UHD LED Smart TV with Chromecast built in ",
      quantity: 3,
      price: 18.5,
    },
    {
      id: 2,
      image: "https://readymadeui.com/images/product6.webp",
      title: "Samsung Galaxy S3",
      quantity: 2,
      price: 350,
    },
  ];

  return (
    <div className="font-sans mt-4">
      <div className="grid lg:grid-cols-3 px-4">
        <div className="lg:col-span-2 py-6 bg-white border-gray-400  border-2 rounded-lg overflow-x-auto mr-2">
          <div className="flex px-0 md:pb-4 md:px-6">
            <h2 className="text-2xl font-bold text-gray-800 ">Shopping Card</h2>
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
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="p-4 items-center justify-center">
                    <div className="flex items-center gap-4 w-[300px]">
                      <img src={XRed} alt="x-white" />
                      <div className="h-32 shrink-0 items-center">
                        <img
                          src={product.image}
                          className="w-[60px] h-[60px] rounded-lg mt-8"
                        />
                      </div>
                      <div>
                        <p className="text-sm md:text-xl font-bold text-gray-800 text-wrap">
                          {product.title}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-1">
                    <h4 className="text-base font-bold text-gray-800">
                      ${product.price}
                    </h4>
                  </td>
                  <td className="p-4">
                    <div className="flex divide-x border w-max rounded-lg overflow-hidden">
                      <button
                        type="button"
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
                      ${product.quantity * product.price}
                    </h4>
                  </td>
                </tr>
              ))}
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
              Card Totals
            </h2>

            <ul className="text-gray-800 mt-6 px-4">
              <li className="flex flex-wrap gap-4  py-3">
                Sub-total <span className="ml-auto font-bold">$320.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-base py-3">
                Shipping <span className="ml-auto font-bold">Free</span>
              </li>
              <li className="flex flex-wrap gap-4 text-base py-3">
                Discount <span className="ml-auto font-bold">$24.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-base py-3">
                Tax <span className="ml-auto font-bold">$61.99</span>
              </li>
              <hr />
              <li className="flex flex-wrap gap-4 text-base py-3 font-bold">
                Total <span className="ml-auto">$357.99.00 USD</span>
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
    </div>
  );
};

export default Checkout;
